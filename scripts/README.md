# Image Management Scripts

## Download Images

To download placeholder yacht images from Unsplash:

```bash
node scripts/download-images.js
```

This will download:
- Hero background image (1920x1080)
- Case study images (1200x800)
- Blog post images (1200x800)
- Open Graph social sharing image (1200x630)

## Replace Images

To use your own images:

1. Replace files in `/public/images/` with your own
2. Keep the same filenames, or
3. Update the references in the code:
   - Hero: `components/hero.tsx`
   - Case studies: `content/case-studies/*.mdx` (coverImage field)
   - Blog: `content/blog/*.mdx` (coverImage field)

## Image Specifications

### Hero Image
- Path: `/public/images/hero-yacht.jpg`
- Recommended size: 1920x1080 or larger
- Format: JPG or WebP
- Subject: Wide yacht shot, dramatic angle

### Blog/Case Study Images
- Path: `/public/images/blog/` or `/public/images/case-studies/`
- Recommended size: 1200x800
- Format: JPG or WebP

### Open Graph Image
- Path: `/public/og-image.png`
- Required size: 1200x630
- Format: PNG or JPG
- Used for social media sharing

### Favicons
Generate proper favicons at [favicon.io](https://favicon.io) and replace files in `/public/`

## Credits

Current placeholder images are from [Unsplash](https://unsplash.com) - free for commercial use.
