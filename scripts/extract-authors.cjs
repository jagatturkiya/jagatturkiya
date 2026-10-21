const https = require('https');

function fetch(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function run() {
  const html = await fetch('https://jagatturkiya.com/testimonials');
  const reg = /<div class="flex items-center gap-3">[\s\S]*?<\/div>\s*<\/div>/gi;
  let m;
  while ((m = reg.exec(html)) !== null) {
    console.log('--- AUTHOR BLOCK ---');
    console.log(m[0]);
  }
}

run();
