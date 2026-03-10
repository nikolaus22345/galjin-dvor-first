const Jimp = require('jimp'); Jimp.read('public/croatia_heart_map.png').then(img => { console.log(img.getPixelColor(10, 10).toString(16)); }).catch(console.error);
