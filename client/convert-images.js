import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const INPUT_DIR = '/workspaces/empire-the-gym/client/public/images';
const OUTPUT_DIR = '/workspaces/empire-the-gym/client/public/images';

const HERO_SIZES = [640, 1024, 1920];
const GALLERY_SIZES = [480, 800, 1200];
const ABOUT_SIZES = [480, 800, 1200];

const QUALITY = 75;

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function convertImage(inputPath, outputBaseName, sizes, quality = QUALITY) {
  const results = {};
  
  for (const width of sizes) {
    const outputPath = path.join(OUTPUT_DIR, `${outputBaseName}-${width}.webp`);
    
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    results[width] = { path: outputPath, size: stats.size };
    console.log(`  ${outputBaseName}-${width}.webp: ${(stats.size / 1024).toFixed(1)} KB`);
  }
  
  return results;
}

async function main() {
  console.log('Starting image conversion...\n');
  
  await ensureDir(path.join(OUTPUT_DIR, 'hero'));
  await ensureDir(path.join(OUTPUT_DIR, 'gallery'));
  await ensureDir(path.join(OUTPUT_DIR, 'about'));
  
  const heroImages = [
    { input: 'hero/hero 1.png', output: 'hero/hero-1' },
    { input: 'hero/hero 2.png', output: 'hero/hero-2' },
    { input: 'hero/hero 3.png', output: 'hero/hero-3' },
  ];
  
  console.log('=== HERO IMAGES (640, 1024, 1920) ===');
  for (const img of heroImages) {
    console.log(`\nProcessing ${img.input}...`);
    const inputPath = path.join(INPUT_DIR, img.input);
    if (fs.existsSync(inputPath)) {
      await convertImage(inputPath, img.output, HERO_SIZES);
    } else {
      console.log(`  WARNING: ${inputPath} not found`);
    }
  }
  
  const galleryImages = [];
  for (let i = 1; i <= 12; i++) {
    galleryImages.push({ 
      input: `gallery/gallery-${i}.jpg`, 
      output: `gallery/gallery-${i}` 
    });
  }
  
  console.log('\n=== GALLERY IMAGES (480, 800, 1200) ===');
  for (const img of galleryImages) {
    console.log(`\nProcessing ${img.input}...`);
    const inputPath = path.join(INPUT_DIR, img.input);
    if (fs.existsSync(inputPath)) {
      await convertImage(inputPath, img.output, GALLERY_SIZES);
    } else {
      console.log(`  WARNING: ${inputPath} not found`);
    }
  }
  
  const aboutImages = [
    { input: 'about/about empire the gym home or about section .png', output: 'about/about-gym' },
    { input: 'about/meet the owner home or about section.png', output: 'about/owner' },
  ];
  
  console.log('\n=== ABOUT IMAGES (480, 800, 1200) ===');
  for (const img of aboutImages) {
    console.log(`\nProcessing ${img.input}...`);
    const inputPath = path.join(INPUT_DIR, img.input);
    if (fs.existsSync(inputPath)) {
      await convertImage(inputPath, img.output, ABOUT_SIZES);
    } else {
      console.log(`  WARNING: ${inputPath} not found`);
    }
  }
  
  const faviconInput = path.join(INPUT_DIR, 'favicon.png');
  if (fs.existsSync(faviconInput)) {
    console.log('\n=== FAVICON ===');
    await sharp(faviconInput)
      .resize(32, 32)
      .webp({ quality: 80 })
      .toFile(path.join(OUTPUT_DIR, 'favicon.webp'));
    console.log('  favicon.webp created');
  }
  
  const chatbotLogoInput = path.join(INPUT_DIR, 'chatbot logo.png');
  if (fs.existsSync(chatbotLogoInput)) {
    console.log('\n=== CHATBOT LOGO ===');
    await sharp(chatbotLogoInput)
      .resize(64, 64)
      .webp({ quality: 80 })
      .toFile(path.join(OUTPUT_DIR, 'chatbot-logo.webp'));
    console.log('  chatbot-logo.webp created');
  }
  
  console.log('\n=== CONVERSION COMPLETE ===');
}

main().catch(console.error);