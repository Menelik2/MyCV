/**
 * Optimize portfolio profile images with sharp.
 * Usage (from project root):
 *   npm install sharp --save-dev
 *   node scripts/optimize-images.mjs
 *   node scripts/optimize-images.mjs path/to/source.jpg
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'static', 'images');
fs.mkdirSync(outDir, { recursive: true });

const input = process.argv[2] || path.join(root, 'profile.jpg');
if (!fs.existsSync(input)) {
  console.error('Source not found:', input);
  process.exit(1);
}

const sizes = [
  { name: 'profile-32', size: 32 },
  { name: 'profile-64', size: 64 },
  { name: 'profile-128', size: 128 },
  { name: 'profile-320', size: 320 },
  { name: 'profile', size: 320 },
  { name: 'profile-thumb', size: 96 },
];

function base(name, size) {
  return sharp(input)
    .rotate()
    .resize(size, size, { fit: 'cover', position: 'centre' });
}

for (const { name, size } of sizes) {
  const jpg = path.join(outDir, `${name}.jpg`);
  const webp = path.join(outDir, `${name}.webp`);
  const avif = path.join(outDir, `${name}.avif`);
  await base(name, size).jpeg({ quality: 80, progressive: true, mozjpeg: true }).toFile(jpg);
  await base(name, size).webp({ quality: 78, effort: 6 }).toFile(webp);
  await base(name, size).avif({ quality: 55, effort: 4 }).toFile(avif);
  console.log(name, size, 'jpg', fs.statSync(jpg).size, 'webp', fs.statSync(webp).size, 'avif', fs.statSync(avif).size);
}

for (const ext of ['jpg', 'webp']) {
  fs.copyFileSync(path.join(outDir, `profile.${ext}`), path.join(root, `profile.${ext}`));
}
fs.copyFileSync(path.join(outDir, 'profile-thumb.jpg'), path.join(root, 'profile-thumb.jpg'));
console.log('Optimized → static/images/ + root profile.*');
