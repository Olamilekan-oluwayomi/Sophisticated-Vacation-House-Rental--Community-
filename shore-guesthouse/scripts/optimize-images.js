import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const INPUT_DIR = "src/assets";
const OUTPUT_DIR = "src/assets/optimized";

// Images that need multiple responsive sizes (hero/banner images)
const RESPONSIVE_IMAGES = [
  { match: /^Homepage-hero/i, widths: [800, 1600, 2400] },
  { match: /^Homepage-cta/i, widths: [800, 1600, 2400] },
];

const SIZE_RULES = [
  { match: /^gallery\/hero/i, maxWidth: 2400 },
  { match: /^gallery\/booking\/hero/i, maxWidth: 2400 },
  { match: /^gallery\/information\/hero/i, maxWidth: 2400 },
  { match: /^gallery\/exterior-03/i, maxWidth: 1600 },
  { match: /^gallery\/neigborhood-07/i, maxWidth: 1600 },
  { match: /^gallery\/interior-/i, maxWidth: 1800 },
  { match: /^gallery\/exterior-0[12]/i, maxWidth: 1100 },
  { match: /^gallery\/neigborhood-0[1-6]/i, maxWidth: 400 },
  { match: /^galleryInfinite\//i, maxWidth: 700 },
  { match: /.*/, maxWidth: 1200 },
];

function getMaxWidth(relativePath) {
  const normalizedPath = relativePath.split(path.sep).join("/");
  const rule = SIZE_RULES.find((r) => r.match.test(normalizedPath));
  return rule.maxWidth;
}

function getResponsiveRule(relativePath) {
  const normalizedPath = relativePath.split(path.sep).join("/");
  return RESPONSIVE_IMAGES.find((r) => r.match.test(normalizedPath));
}

async function getAllFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? getAllFiles(fullPath) : fullPath;
    })
  );
  return files.flat();
}

async function processResponsiveImage(inputPath, relativePath, widths) {
  const parsed = path.parse(relativePath);
  const baseName = parsed.name;
  const dir = parsed.dir;

  for (const width of widths) {
    const outputRelative = path.join(dir, `${baseName}-${width}w.avif`);
    const outputPath = path.join(OUTPUT_DIR, outputRelative);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const resizeOptions = metadata.width > width ? { width } : {};

    await image.resize(resizeOptions).avif({ quality: 60 }).toFile(outputPath);

    const newSize = (await fs.stat(outputPath)).size;
    console.log(`${relativePath} -> ${outputRelative}: ${(newSize / 1024).toFixed(1)}KB (${width}w)`);
  }
}

async function processImage(inputPath) {
  if (inputPath.includes(OUTPUT_DIR)) return;

  const ext = path.extname(inputPath).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".avif", ".webp"].includes(ext)) return;

  const relativePath = path.relative(INPUT_DIR, inputPath);
  const responsiveRule = getResponsiveRule(relativePath);

  if (responsiveRule) {
    await processResponsiveImage(inputPath, relativePath, responsiveRule.widths);
    return;
  }

  const maxWidth = getMaxWidth(relativePath);
  const outputRelative = relativePath.replace(/\.(jpg|jpeg|png)$/i, ".avif");
  const outputPath = path.join(OUTPUT_DIR, outputRelative);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const resizeOptions = metadata.width > maxWidth ? { width: maxWidth } : {};

  await image.resize(resizeOptions).avif({ quality: 60 }).toFile(outputPath);

  const originalSize = (await fs.stat(inputPath)).size;
  const newSize = (await fs.stat(outputPath)).size;

  console.log(
    `${relativePath} (max ${maxWidth}px) -> ${outputRelative}: ${(originalSize / 1024).toFixed(1)}KB -> ${(newSize / 1024).toFixed(1)}KB`
  );
}

async function run() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const allFiles = await getAllFiles(INPUT_DIR);

  for (const file of allFiles) {
    await processImage(file);
  }

  console.log("\nDone.");
}

run().catch(console.error);