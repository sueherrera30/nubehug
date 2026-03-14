const Jimp = require('jimp');

const makeTransparent = async (inputFile, outputFile) => {
  try {
    const image = await Jimp.read(inputFile);
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      if (red > 235 && green > 235 && blue > 235) {
        this.bitmap.data[idx + 3] = 0; // alpha
      }
    });
    await image.writeAsync(outputFile);
    console.log('Processed', inputFile);
  } catch(e) { console.error(e); }
};

const run = async () => {
    await makeTransparent('public/nubehug_3d_ai.png', 'public/nubehug_3d_ai_transparent.png');
    await makeTransparent('public/nubehug_3d_logistics.png', 'public/nubehug_3d_logistics_transparent.png');
    await makeTransparent('public/nubehug_3d_marketplace.png', 'public/nubehug_3d_marketplace_transparent.png');
}
run();
