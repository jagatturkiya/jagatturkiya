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
  const videoRegex = /<video[\s\S]*?<\/video>/gi;
  let m;
  while ((m = videoRegex.exec(html)) !== null) {
    console.log('VIDEO BLOCK:');
    console.log(m[0]);
  }
}

run();
