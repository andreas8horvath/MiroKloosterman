const fs = require('fs');
const path = require('path');

const base64Icon = 'AAABAAEAEBAAAAEAIABoQgAAAFlQC0AAAQAgAGhCAAAfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

const buffer = Buffer.from(base64Icon, 'base64');
const publicDir = path.join(__dirname, '../public');
const faviconPath = path.join(publicDir, 'favicon.ico');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(faviconPath, buffer);
console.log('Created elegant transparent public/favicon.ico safely.');
