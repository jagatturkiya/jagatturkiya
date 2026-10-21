import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

console.log('[prepare-gh-pages] Synchronizing production bundle...');

// 1. Ensure dist/index.html & dist/404.html exist
const compiledHtmlPath = fs.existsSync(path.join(distDir, 'dev.html')) 
  ? path.join(distDir, 'dev.html') 
  : path.join(distDir, 'index.html');

if (fs.existsSync(compiledHtmlPath)) {
  let htmlContent = fs.readFileSync(compiledHtmlPath, 'utf-8');
  const v = Date.now();
  htmlContent = htmlContent.replace(/src="\.?\/assets\/index\.js(\?v=[^"]*)?"/, `src="./assets/index.js?v=${v}"`);
  htmlContent = htmlContent.replace(/href="\.?\/assets\/index\.css(\?v=[^"]*)?"/, `href="./assets/index.css?v=${v}"`);
  
  // Write to dist
  fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);

  // Create 404.html with automatic HashRouter SPA redirect for GitHub Pages
  const spa404Content = htmlContent.replace('</head>', `  <script>
    (function() {
      var p = window.location.pathname;
      var repo = '/jagatturkiya';
      if (p.startsWith(repo)) p = p.slice(repo.length);
      p = p.replace(/^\\/+/, '').replace(/\\.html$/, '');
      if (p && !p.startsWith('assets/')) {
        window.location.replace(window.location.origin + repo + '/#/' + p + window.location.search);
      }
    })();
  </script>
</head>`);
  fs.writeFileSync(path.join(distDir, '404.html'), spa404Content);
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

  // Write to root for direct branch serving
  fs.writeFileSync(path.join(rootDir, 'index.html'), htmlContent);
  fs.writeFileSync(path.join(rootDir, '404.html'), spa404Content);
  fs.writeFileSync(path.join(rootDir, '.nojekyll'), '');

  // Copy standalone html redirects to dist
  const redirectFiles = ['optin.html', 'form.html', 'forms.html', 'apply.html', 'vsl.html', 'thank-you.html', 'success-stories.html', 'testimonials.html'];
  for (const f of redirectFiles) {
    const srcPath = path.join(rootDir, f);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, path.join(distDir, f));
      console.log(`[prepare-gh-pages] Copied ${f} to dist/`);
    }
  }

  // Copy all favicon formats to dist & root
  const faviconFiles = ['favicon.ico', 'favicon.png', 'favicon.svg', 'favicon-32x32.png', 'favicon-16x16.png', 'favicon-64x64.png', 'apple-touch-icon.png'];
  for (const f of faviconFiles) {
    const srcPath = path.join(rootDir, 'public', f);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, path.join(distDir, f));
      fs.copyFileSync(srcPath, path.join(rootDir, f));
    }
  }

  console.log('[prepare-gh-pages] Written index.html, 404.html, .nojekyll, and favicons to dist/ and root.');
} else {
  console.error('[prepare-gh-pages] Error: compiled HTML not found in dist');
  process.exit(1);
}

// 2. Copy compiled assets to root assets directory
const distAssetsDir = path.join(distDir, 'assets');
const rootAssetsDir = path.join(rootDir, 'assets');

if (fs.existsSync(distAssetsDir)) {
  if (!fs.existsSync(rootAssetsDir)) {
    fs.mkdirSync(rootAssetsDir, { recursive: true });
  }

  const files = fs.readdirSync(distAssetsDir);
  for (const file of files) {
    const srcFile = path.join(distAssetsDir, file);
    const destFile = path.join(rootAssetsDir, file);
    const stat = fs.statSync(srcFile);
    if (!stat.isDirectory()) {
      fs.copyFileSync(srcFile, destFile);
      console.log(`[prepare-gh-pages] Copied asset: ${file} -> root/assets/${file}`);
    }
  }
}

console.log('[prepare-gh-pages] Production deployment bundle ready!');
