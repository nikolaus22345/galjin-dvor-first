const Jimp = require('jimp'); Jimp.read('public/croatia_heart_map.png').then(img => {
  const w = img.bitmap.width;
  const h = img.bitmap.height;
  const bgC = img.getPixelColor(10, 10);
  // Remove original bottom right heart
  for(let y = Math.floor(h*0.6); y < h; y++) {
    for(let x = Math.floor(w*0.5); x < Math.floor(w*0.85); x++) {
      const p = img.getPixelColor(x, y);
      const r = Jimp.intToRGBA(p);
      if(r.r > 150 && r.g > 150 && r.b < 200) { 
        img.setPixelColor(bgC, x, y);
      }
    }
  }
  img.write('public/croatia_heart_map_fixed.png');
  console.log('Fixed saved');
});
