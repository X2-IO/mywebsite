import sharp from "sharp";
import { resolve } from "node:path";
import { writeFileSync } from "node:fs";

const root = resolve(import.meta.dirname, "..");
const src = resolve(root, "public/pohjola-logo.png");
const outPng = resolve(root, "app/icon.png");
const outApplePng = resolve(root, "app/apple-icon.png");
const outIco = resolve(root, "app/favicon.ico");

const sizes = [16, 32, 48];

const background = { r: 3, g: 3, b: 6, alpha: 1 };

async function createIconPng(size) {
  const logoSize = Math.round(size * 0.72);
  const mark = await sharp(src)
    .trim({ background: "#000000", threshold: 24 })
    .resize(logoSize, logoSize, {
      fit: "contain",
      background: { ...background, alpha: 0 },
    })
    .ensureAlpha()
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toBuffer();
}

const pngBuffers = await Promise.all(sizes.map(createIconPng));

await sharp(await createIconPng(192)).png().toFile(outPng);
await sharp(await createIconPng(180)).png().toFile(outApplePng);

const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(sizes.length, 4);

const entries = [];
let offset = 6 + 16 * sizes.length;
const imageData = [];

for (let i = 0; i < sizes.length; i++) {
  const buf = pngBuffers[i];
  const entry = Buffer.alloc(16);
  entry[0] = sizes[i] === 256 ? 0 : sizes[i];
  entry[1] = sizes[i] === 256 ? 0 : sizes[i];
  entry[4] = 1;
  entry[6] = 32;
  entry.writeUInt32LE(buf.length, 8);
  entry.writeUInt32LE(offset, 12);
  entries.push(entry);
  imageData.push(buf);
  offset += buf.length;
}

writeFileSync(outIco, Buffer.concat([icoHeader, ...entries, ...imageData]));
console.log("Favicon optimized:", outIco, outPng, outApplePng);
