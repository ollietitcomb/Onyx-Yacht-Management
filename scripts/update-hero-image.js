const https = require('https');
const fs = require('fs');
const path = require('path');

// Better image for UK coastal vessels - smaller day boats/motor yachts
const image = {
  url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&q=80',
  path: 'public/images/hero-yacht.jpg',
  description: 'UK coastal day boat/motor yacht'
};

function downloadImage(url, filepath, description) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Updated: ${description} -> ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.error(`❌ Error downloading ${description}:`, err.message);
      reject(err);
    });
  });
}

console.log('🚢 Updating hero image to smaller UK coastal yacht...\n');

downloadImage(image.url, image.path, image.description)
  .then(() => {
    console.log('\n✨ Hero image updated!');
    console.log('💡 New image shows a more appropriate smaller coastal vessel');
  })
  .catch(console.error);
