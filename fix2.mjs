import { Jimp } from 'jimp';
async function run() {
  const image = await Jimp.read('public/croatia_heart_map.png');
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  const bgC = image.getPixelColor(10, 10);
  
  for(let y = Math.floor(h * 0.70); y < h; y++) {
    for(let x = Math.floor(w * 0.45); x < Math.floor(w * 0.90); x++) {
      const p = image.getPixelColor(x, y);
      const r = (p >> 24) & 255;
      const g = (p >> 16) & 255;
      const b = (p >> 8) & 255;
      
      if(r > 150 && g > 150 && b < 150) {
        image.setPixelColor(bgC, x, y);
      }
    }
  }
  await image.write('public/croatia_heart_map_fixed.png');
  console.log('Fixed map saved via mjs');
}
run().catch(console.error);
