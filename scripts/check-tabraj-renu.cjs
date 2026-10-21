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
  const html = await fetch('https://jagatturkiya.com');
  const names = ['Tabraj', 'Renu'];
  for (let name of names) {
    let pos = html.indexOf(name);
    console.log(`=== ${name} at ${pos} ===`);
    if (pos !== -1) {
      console.log(html.substring(pos - 400, pos + 300));
    }
  }
}

run();
