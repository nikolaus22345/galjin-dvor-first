import Jimp from 'jimp';
Jimp.read('public/croatia_heart_map.png').then(img => {
  const w = img.bitmap.width;
  const h = Math.floor(img.bitmap.height);
  const bgC = Jimp.rgbaToInt(255, 255, 255, 255); // Assuming white background
  
  // Wipe out the area near Korcula/South where the second heart is
  // Usually this is around bottom right of the bounds:
  const startY = Math.floor(h * 0.75);
  const startX = Math.floor(w * 0.50);
  
  for(let y = startY; y < h; y++) {
    for(let x = startX; x < w; x++) {
      const p = Jimp.intToRGBA(img.getPixelColor(x, y));
      // If it's the golden color (high red/green, lower blue), make it transparent/white
      if(p.r > 150 && p.g > 150 && p.b < 150) { 
        img.setPixelColor(bgC, x, y);
      }
    }
  }
  img.write('public/croatia_heart_map_fixed.png');
  console.log('Fixed saved');
});
