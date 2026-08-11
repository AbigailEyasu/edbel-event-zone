import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'src/assets';
const servicesDir = 'src/assets/services';

const imagesToCompress = [
  {
    input: path.join(servicesDir, 'flowers_cakes.png'),
    output: path.join(servicesDir, 'flowers_cakes_opt.jpg'),
    width: 800
  },
  {
    input: path.join(servicesDir, 'engagement.png'),
    output: path.join(servicesDir, 'engagement_opt.jpg'),
    width: 800
  },
  {
    input: path.join(assetsDir, 'decor-rental.jpg'),
    output: path.join(assetsDir, 'decor_rental_opt.jpg'),
    width: 800
  },
  {
    input: path.join(assetsDir, 'bridal.jpg'),
    output: path.join(assetsDir, 'bridal_opt.jpg'),
    width: 800
  },
  {
    input: path.join(assetsDir, 'birthday-new.jpg'),
    output: path.join(assetsDir, 'birthday_new_opt.jpg'),
    width: 800
  },
  {
    input: path.join(assetsDir, 'birthday.jpg'),
    output: path.join(assetsDir, 'birthday_opt.jpg'),
    width: 800
  },
  {
    input: path.join(servicesDir, 'wedding.jpg'),
    output: path.join(servicesDir, 'wedding_opt.jpg'),
    width: 800
  }
];

async function run() {
  for (const item of imagesToCompress) {
    if (fs.existsSync(item.input)) {
      console.log(`Compressing ${item.input}...`);
      try {
        await sharp(item.input)
          .resize({ width: item.width, withoutEnlargement: true })
          .jpeg({ quality: 80, progressive: true })
          .toFile(item.output);
        console.log(`Saved optimized image to ${item.output}`);
      } catch (err) {
        console.error(`Error compressing ${item.input}:`, err);
      }
    } else {
      console.log(`File not found: ${item.input}`);
    }
  }
}

run();
