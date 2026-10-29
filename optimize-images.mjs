import sharp from 'sharp'
const src='src/assets/model.png'
for (const w of [484, 360]) {
  await sharp(src).resize({width:w}).webp({quality:82,alphaQuality:90}).toFile(`public/model-${w}.webp`)
  await sharp(src).resize({width:w}).avif({quality:55}).toFile(`public/model-${w}.avif`)
}
await sharp(src).resize({width:484}).png().toFile('public/model-484.png')
