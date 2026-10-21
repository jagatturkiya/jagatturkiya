const https = require('https');

function fetch(url) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function run() {
  const html = await fetch('https://topmate.io/jagat_singh_turkiya');
  console.log('Topmate length:', html.length);
  const names = ['Tabraj', 'Renu', 'Singh', 'Chaudhary'];
  for (let n of names) {
    let p = html.indexOf(n);
    console.log(n, p);
  }
}

run();
