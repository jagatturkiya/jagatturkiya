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
  const start = html.indexOf('What Our Clients Say') !== -1 ? html.indexOf('What Our Clients Say') : html.indexOf('Testimonial');
  console.log('Testimonials section index:', start);
  if (start !== -1) {
    console.log(html.substring(start - 200, start + 8000));
  } else {
    // Find all <h4> and <img nearby
    const m = html.match(/<h4[^>]*class=\"font-bold[^\"]*\"[^>]*>([^<]+)<\/h4>/gi) || [];
    console.log('H4 matches:', m);
  }
}

run();
