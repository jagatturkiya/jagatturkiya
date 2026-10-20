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
  const htmlContent = fs.readFileSync(compiledHtmlPath, 'utf-8');
  
  // Write to dist
  fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);
  fs.writeFileSync(path.join(distDir, '404.html'), htmlContent);
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

  // Write to root for direct branch serving
  fs.writeFileSync(path.join(rootDir, 'index.html'), htmlContent);
  fs.writeFileSync(path.join(rootDir, '404.html'), htmlContent);
  fs.writeFileSync(path.join(rootDir, '.nojekyll'), '');
  console.log('[prepare-gh-pages] Written index.html, 404.html, and .nojekyll to dist/ and root.');
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
