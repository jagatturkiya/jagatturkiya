const https = require('https');
const fs = require('fs');
const path = require('path');

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

const list = [
  { name: 'yogeta-shrivastav.png', url: 'https://jagatturkiya.com/videos/testimonial/thumbnail/yogeta-shrivastav.png' },
  { name: 'hema-pandey.png', url: 'https://jagatturkiya.com/videos/testimonial/thumbnail/hema-pandey.png' },
  { name: 'deepali.png', url: 'https://jagatturkiya.com/videos/testimonial/thumbnail/deepali.png' }
];

async function run() {
  for (let item of list) {
    const d1 = path.join('public/assets/images/testimonials', item.name);
    const d2 = path.join('assets/images/testimonials', item.name);
    console.log('Downloading', item.url, 'to', d1);
    try {
      await download(item.url, d1);
      fs.copyFileSync(d1, d2);
      console.log('Saved', item.name);
    } catch(e) {
      console.error('Error:', e.message);
    }
  }
}

run();
