import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const INPUT_DIR = "src/assets";
const OUTPUT_DIR = "src/assets/optimized";

const SIZE_RULES = [
  // Full-bleed hero/banner images
  { match: /^Homepage-hero/i, maxWidth: 2400 },
  { match: /^Homepage-cta/i, maxWidth: 2400 },
  { match: /^gallery\/hero/i, maxWidth: 2400 },
  { match: /^gallery\/booking\/hero/i, maxWidth: 2400 },
  { match: /^gallery\/information\/hero/i, maxWidth: 2400 },

  // Large feature images (~1075px display) - main gallery folder only
  { match: /^gallery\/exterior-03/i, maxWidth: 1600 },
  { match: /^gallery\/neigborhood-07/i, maxWidth: 1600 },

  // Lightbox/carousel main viewer (interior-01 to 06) - main gallery folder only
  { match: /^gallery\/interior-/i, maxWidth: 1800 },

  // Medium grid images (~522px display) - main gallery folder only
  { match: /^gallery\/exterior-0[12]/i, maxWidth: 1100 },

  // Small grid images (~180px display) - main gallery folder only
  { match: /^gallery\/neigborhood-0[1-6]/i, maxWidth: 400 },

  // galleryInfinite card thumbnails (~270-410px display) - checked BEFORE fallback
  { match: /^galleryInfinite\//i, maxWidth: 700 },

  // fallback for anything unmatched (information/, booking/, etc.)
  { match: /.*/, maxWidth: 1200 },
];

function getMaxWidth(relativePath) {
  // Normalize backslashes to forward slashes for consistent matching on all OSes
  const normalizedPath = relativePath.split(path.sep).join("/");
  const rule = SIZE_RULES.find((r) => r.match.test(normalizedPath));
  return rule.maxWidth;
}

// Recursively collect all file paths under a directory
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

async function processImage(inputPath) {
  // Skip anything already inside the output folder
  if (inputPath.includes(OUTPUT_DIR)) return;

  const ext = path.extname(inputPath).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".avif", ".webp"].includes(ext)) return;

  const relativePath = path.relative(INPUT_DIR, inputPath);
  const maxWidth = getMaxWidth(relativePath);

  const outputRelative = relativePath.replace(/\.(jpg|jpeg|png)$/i, ".avif");
  const outputPath = path.join(OUTPUT_DIR, outputRelative);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const resizeOptions = metadata.width > maxWidth ? { width: maxWidth } : {};

  await image
    .resize(resizeOptions)
    .avif({ quality: 60 })
    .toFile(outputPath);

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

  console.log("\nDone. Check src/assets/optimized before swapping imports.");
}

run().catch(console.error);