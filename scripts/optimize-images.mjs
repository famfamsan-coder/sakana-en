import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const INPUT_DIR = 'public/images';
const targets = ['.png', '.jpg', '.jpeg'];

async function optimize() {
  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter(f =>
    targets.some(ext => f.toLowerCase().endsWith(ext)) &&
    f.startsWith('sample-')
  );

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    const outputName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const outputPath = join(INPUT_DIR, outputName);

    const originalStat = await stat(inputPath);

    await sharp(inputPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outputPath);

    const optimizedStat = await stat(outputPath);

    const originalSize = (originalStat.size / 1024 / 1024).toFixed(2);
    const optimizedSize = (optimizedStat.size / 1024 / 1024).toFixed(2);
    const reduction = ((1 - optimizedStat.size / originalStat.size) * 100).toFixed(0);

    console.log(`${file}`);
    console.log(`  ${originalSize}MB → ${optimizedSize}MB (${reduction}% smaller)`);
    console.log(`  → ${outputName}\n`);

    totalOriginal += originalStat.size;
    totalOptimized += optimizedStat.size;
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`Total: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB → ${(totalOptimized / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)}MB (${((1 - totalOptimized / totalOriginal) * 100).toFixed(0)}% reduction)`);
}

optimize().catch(console.error);
