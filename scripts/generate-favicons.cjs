const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const rootDir = path.resolve(__dirname, '..');

// CRC32 table
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
  crcTable[n] = c;
}
function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}
function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(12 + len);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  buf.writeUInt32BE(crc32(buf.slice(4, 8 + len)), 8 + len);
  return buf;
}
function makePng(width, height, rgbaBuffer) {
  const rowSize = 1 + width * 4;
  const filtered = Buffer.alloc(height * rowSize);
  for (let y = 0; y < height; y++) {
    filtered[y * rowSize] = 0;
    rgbaBuffer.copy(filtered, y * rowSize + 1, y * width * 4, (y + 1) * width * 4);
  }
  const idatData = zlib.deflateSync(filtered, { level: 9 });
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([sig, makeChunk('IHDR', ihdr), makeChunk('IDAT', idatData), makeChunk('IEND', Buffer.alloc(0))]);
}

// Read transparent symbol
const srcBuf = fs.readFileSync(path.join(rootDir, 'public', 'assets', 'images', 'apkacoach-symbol.png'));
let pos = 8, srcW, srcH;
const idats = [];
while (pos < srcBuf.length) {
  const len = srcBuf.readUInt32BE(pos);
  const type = srcBuf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IHDR') {
    srcW = srcBuf.readUInt32BE(pos + 8);
    srcH = srcBuf.readUInt32BE(pos + 12);
  } else if (type === 'IDAT') idats.push(srcBuf.slice(pos + 8, pos + 8 + len));
  pos += 12 + len;
}
const raw = zlib.inflateSync(Buffer.concat(idats));

// Resample function with centering in a square
function resampleToSquare(targetSize, paddingRatio = 0.06) {
  const dst = Buffer.alloc(targetSize * targetSize * 4);
  const innerSize = Math.round(targetSize * (1 - paddingRatio * 2));
  const scale = Math.min(innerSize / srcW, innerSize / srcH);
  const drawW = Math.round(srcW * scale);
  const drawH = Math.round(srcH * scale);
  const offsetX = Math.round((targetSize - drawW) / 2);
  const offsetY = Math.round((targetSize - drawH) / 2);

  for (let dy = 0; dy < drawH; dy++) {
    for (let dx = 0; dx < drawW; dx++) {
      const targetX = offsetX + dx;
      const targetY = offsetY + dy;
      if (targetX < 0 || targetX >= targetSize || targetY < 0 || targetY >= targetSize) continue;

      const srcX = (dx / drawW) * srcW;
      const srcY = (dy / drawH) * srcH;
      const x0 = Math.floor(srcX);
      const y0 = Math.floor(srcY);
      const x1 = Math.min(srcW - 1, x0 + 1);
      const y1 = Math.min(srcH - 1, y0 + 1);
      const wx = srcX - x0;
      const wy = srcY - y0;

      const p00 = y0 * (1 + srcW * 4) + 1 + x0 * 4;
      const p10 = y0 * (1 + srcW * 4) + 1 + x1 * 4;
      const p01 = y1 * (1 + srcW * 4) + 1 + x0 * 4;
      const p11 = y1 * (1 + srcW * 4) + 1 + x1 * 4;

      const dstIdx = (targetY * targetSize + targetX) * 4;
      for (let c = 0; c < 4; c++) {
        const top = raw[p00 + c] * (1 - wx) + raw[p10 + c] * wx;
        const bot = raw[p01 + c] * (1 - wx) + raw[p11 + c] * wx;
        dst[dstIdx + c] = Math.round(top * (1 - wy) + bot * wy);
      }
    }
  }
  return dst;
}

// Generate sizes
const sizes = [16, 32, 64, 180];
const pngBuffers = {};
for (const s of sizes) {
  const rgba = resampleToSquare(s);
  pngBuffers[s] = makePng(s, s, rgba);
}

// Helper to write to multiple locations
function writeAll(filename, buffer) {
  const dirs = [
    path.join(rootDir, 'public'),
    path.join(rootDir, 'public', 'assets'),
    path.join(rootDir, 'public', 'assets', 'images'),
    path.join(rootDir, 'assets'),
    path.join(rootDir, 'assets', 'images')
  ];
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, filename), buffer);
  }
}

writeAll('favicon-16x16.png', pngBuffers[16]);
writeAll('favicon-32x32.png', pngBuffers[32]);
writeAll('favicon-64x64.png', pngBuffers[64]);
writeAll('favicon.png', pngBuffers[64]);
writeAll('apple-touch-icon.png', pngBuffers[180]);

// Build ICO file containing 16x16 and 32x32
function makeIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(count, 4); // count

  let offset = 6 + count * 16;
  const entries = [];
  const datas = [];

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(img.data.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    datas.push(img.data);
    offset += img.data.length;
  }
  return Buffer.concat([header, ...entries, ...datas]);
}

const icoBuf = makeIco([
  { width: 16, height: 16, data: pngBuffers[16] },
  { width: 32, height: 32, data: pngBuffers[32] }
]);
writeAll('favicon.ico', icoBuf);

// Create SVG favicon with base64 PNG of the A symbol
const b64 = pngBuffers[64].toString('base64');
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">\n  <image href="data:image/png;base64,${b64}" width="64" height="64" />\n</svg>\n`;
writeAll('favicon.svg', Buffer.from(svgContent, 'utf-8'));

console.log('[generate-favicons] Successfully created all favicons with ApkaCoach A symbol!');
