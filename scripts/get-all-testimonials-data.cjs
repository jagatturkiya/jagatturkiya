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
  // Strip tags and print quotes & names
  const regex = /<p[^>]*class=\"[^\"]*(?:text-gray|leading-relaxed|italic)[^\"]*\"[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = regex.exec(html)) !== null) {
    const text = m[1].replace(/<[^>]+>/g, '').trim();
    if (text.length > 20) {
      console.log('--- QUOTE ---');
      console.log(text);
      // Find nearby author
      const snippet = html.substring(m.index, m.index + 500);
      const nameM = snippet.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
      const roleM = snippet.match(/<p[^>]*class=\"[^\"]*text-brand-orange[^\"]*\"[^>]*>([\s\S]*?)<\/p>/i);
      const imgM = snippet.match(/src=\"([^\"]+)\"/i);
      console.log('Author:', nameM ? nameM[1].replace(/<[^>]+>/g, '').trim() : 'Unknown');
      console.log('Role:', roleM ? roleM[1].replace(/<[^>]+>/g, '').trim() : '');
      console.log('Img:', imgM ? imgM[1] : '');
    }
  }
}

run();
