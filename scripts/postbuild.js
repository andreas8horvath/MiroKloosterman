const fs = require('fs');
const path = require('path');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  const standalonePath = path.join(__dirname, '../.next/standalone');
  if (fs.existsSync(standalonePath)) {
    console.log('Detected Next.js standalone folder at .next/standalone. Syncing static assets...');
    
    // Copy .next/static to .next/standalone/.next/static
    const srcStatic = path.join(__dirname, '../.next/static');
    const destStatic = path.join(standalonePath, '.next/static');
    copyDirRecursive(srcStatic, destStatic);
    console.log('Successfully copied build static files to standalone folder.');

    // Copy public dir to .next/standalone/public
    const srcPublic = path.join(__dirname, '../public');
    const destPublic = path.join(standalonePath, 'public');
    if (fs.existsSync(srcPublic)) {
      copyDirRecursive(srcPublic, destPublic);
      console.log('Successfully copied public assets to standalone folder.');
    }
  } else {
    console.log('Standalone directory not active. Skipping postbuild static copy.');
  }
} catch (error) {
  console.error('Error synchronizing standalone static assets:', error);
}
