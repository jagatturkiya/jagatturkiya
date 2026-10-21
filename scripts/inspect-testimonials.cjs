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
  console.log('HTML Length:', html.length);
  // Match all <img src="...">
  const imgs = html.match(/<img[^>]+>/gi) || [];
  console.log(`Total <img> tags: ${imgs.length}`);
  for (let img of imgs) {
    console.log(img);
  }
}

run();
