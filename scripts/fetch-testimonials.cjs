const https = require('https');
const fs = require('fs');
const path = require('path');

function fetch(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  const html = await fetch('https://jagatturkiya.com/testimonials');
  const homeHtml = await fetch('https://jagatturkiya.com');
  const fullHtml = html + '\n' + homeHtml;

  const regex = /src=["'](https:\/\/jagatturkiya\.com\/images\/testimonials\/[^"']+)["']/gi;
  const found = new Set();
  let match;
  while ((match = regex.exec(fullHtml)) !== null) {
    found.add(match[1]);
  }

  console.log('Found Testimonial Image URLs:');
  for (let u of found) {
    console.log(u);
  }

  const outDir = 'public/assets/images/testimonials';
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const assetDir = 'assets/images/testimonials';
  if (!fs.existsSync(assetDir)) {
    fs.mkdirSync(assetDir, { recursive: true });
  }

  for (let u of found) {
    const filename = path.basename(u);
    const dest1 = path.join(outDir, filename);
    const dest2 = path.join(assetDir, filename);
    console.log('Downloading', u, 'to', dest1);
    try {
      await download(u, dest1);
      fs.copyFileSync(dest1, dest2);
    } catch (e) {
      console.error('Failed to download', u, e.message);
    }
  }

  console.log('Downloaded all testimonial images successfully!');
}

run();
