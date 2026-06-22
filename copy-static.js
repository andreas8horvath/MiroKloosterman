const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  if (!exists) return;
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  console.log('Copying static assets for standalone build...');
  copyRecursiveSync('public', '.next/standalone/public');
  copyRecursiveSync('.next/static', '.next/standalone/.next/static');
  console.log('Successfully copied public and .next/static folders to next/standalone!');
} catch (err) {
  console.error('Error copying static files to next/standalone:', err);
}
