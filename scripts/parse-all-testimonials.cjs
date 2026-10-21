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
  
  // Find all testimonial cards
  // Let's search for <h4>
  let pos = 0;
  while ((pos = html.indexOf('<h4', pos)) !== -1) {
    const end = html.indexOf('</h4>', pos);
    const h4 = html.substring(pos, end + 5);
    // Find preceding or following <img
    const cardStart = html.lastIndexOf('<div', pos - 100);
    const cardSnippet = html.substring(pos - 400, pos + 300);
    console.log('--- TESTIMONIAL ---');
    console.log(h4);
    const imgM = cardSnippet.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
    if (imgM) {
      console.log('IMG:', imgM[1]);
    }
    pos = end + 5;
  }
}

run();
