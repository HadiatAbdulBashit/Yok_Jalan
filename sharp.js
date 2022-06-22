const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/vector');

fs.readdirSync(target)
  .forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(450)
      .toFile(path.resolve(__dirname, `${target}/${image.split('.')
        .slice(0, -1)
        .join('.')}-small.png`));
  });
