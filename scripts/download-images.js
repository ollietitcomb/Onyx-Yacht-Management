const https = require('https');
const fs = require('fs');
const path = require('path');

// Unsplash Source API - no auth needed for basic use
const images = [
  {
    url: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&h=1080&fit=crop&q=80',
    path: 'public/images/hero-yacht.jpg',
    description: 'Hero yacht image'
  },
  {
    url: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&h=800&fit=crop&q=80',
    path: 'public/images/case-studies/sunseeker-62.jpg',
    description: 'Sunseeker case study'
  },
  {
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&q=80',
    path: 'public/images/case-studies/princess-75.jpg',
    description: 'Princess yacht case study'
  },
  {
    url: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&h=800&fit=crop&q=80',
    path: 'public/images/blog/mca-coding.jpg',
    description: 'MCA coding blog'
  },
  {
    url: 'https://images.unsplash.com/photo-1598901126328-c1fccb0b6445?w=1200&h=800&fit=crop&q=80',
    path: 'public/images/blog/maintenance.jpg',
    description: 'Maintenance blog'
  },
  {
    url: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&h=630&fit=crop&q=80',
    path: 'public/og-image.png',
    description: 'Open Graph image'
  }
];

function downloadImage(url, filepath, description) {
  return new Promise((resolve, reject) => {
    // Ensure directory exists
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${description} -> ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete partial file
      console.error(`❌ Error downloading ${description}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('🚢 Downloading yacht images from Unsplash...\n');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.path, image.description);
      // Small delay to be respectful to Unsplash
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Failed to download ${image.description}`);
    }
  }
  
  console.log('\n✨ Image download complete!');
  console.log('\n📸 Images downloaded:');
  console.log('   • Hero background (1920x1080)');
  console.log('   • 2 Case study images (1200x800)');
  console.log('   • 2 Blog post images (1200x800)');
  console.log('   • Open Graph social image (1200x630)');
  console.log('\n💡 Tip: You can replace these with your own images later!');
}

downloadAllImages().catch(console.error);
