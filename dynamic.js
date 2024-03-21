const Jimp = require('jimp') ;

async function textOverlay(tokenId) {
   // Reading image
   const image = await Jimp.read('./pass.png');
   // Defining the text font
   const font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  //  Jimp.measureText(await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE), "Some string");
   image.print(font, 875, 270, tokenId, 900);
   // Writing image after processing

//   Jimp.read(
//     image
//   ).then(img => {
//     img.getBase64(Jimp.AUTO, (err, res) => {
//       console.log(res)
//     })
//   });

   await image.writeAsync('./textOverlay.png');
}

textOverlay(420420);