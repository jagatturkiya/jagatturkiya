import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const redirects = {
  'about.html': '#/about',
  'mastermind.html': '#/mastermind',
  'contact.html': '#/contact',
  'privacy-policy.html': '#/privacy-policy',
  'terms.html': '#/terms',
  'refund-policy.html': '#/refund-policy',
  'disclaimer.html': '#/disclaimer',
  'books.html': '#/about',
  'products.html': '#/mastermind',
  'legal.html': '#/terms',
  'media.html': '#/about'
};

for (const [file, route] of Object.entries(redirects)) {
  const filePath = path.join(rootDir, file);
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0; url=./${route}" />
  <script>window.location.replace('./${route}');</script>
  <title>Redirecting...</title>
</head>
<body>
  <p>Redirecting to <a href="./${route}">Jagat Turkiya</a>...</p>
</body>
</html>
`;
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Updated redirect for:', file);
}
console.log('All legacy HTML redirects generated successfully.');
