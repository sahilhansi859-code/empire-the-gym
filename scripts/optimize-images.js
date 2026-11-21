const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const ROOT = path.resolve(__dirname, '..', 'client', 'public', 'images')
const QUALITY = 70

const optimize = async (file) => {
  if (!file.endsWith('.webp')) return
  const filePath = path.join(ROOT, file)
  const stat = fs.statSync(filePath)
  const originalSize = stat.size
  const meta = await sharp(filePath).metadata()
  if (!meta.width || !meta.height) return

  const buf = await sharp(filePath)
    .webp({ quality: QUALITY, effort: 6 })
    .toBuffer()

  // Only write if it actually reduces size
  if (buf.length < originalSize) {
    fs.writeFileSync(filePath, buf)
    const kb = Math.round(buf.length / 1024)
    const saved = Math.round((originalSize - buf.length) / 1024)
    console.log(`optimized ${file} -> ${kb} KiB (saved ${saved} KiB) [${meta.width}x${meta.height}]`)
  } else {
    console.log(`skipped ${file} (no size reduction) [${meta.width}x${meta.height}]`)
  }
}

;(async () => {
  let totalSaved = 0
  for (const dir of fs.readdirSync(ROOT, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue
    const files = fs.readdirSync(path.join(ROOT, dir.name))
    for (const f of files) {
      const r = await optimize(path.join(dir.name, f))
    }
  }
  console.log('Done')
})()
