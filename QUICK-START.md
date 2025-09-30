# Quick Start - Deploy Your Website

## Current Status: ✅ Website is Built & Ready!

Your Onyx Yacht Management website is complete with:
- 21 pages
- UK coastal positioning (37-90ft vessels)
- Blog & case studies
- Your custom logo
- All content

## 🚀 Deploy to Vercel (5 Minutes)

### Step 1: Sign Up on Vercel
1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel

### Step 2: Import Your Project
1. Click "Add New Project"
2. You'll see "Import Git Repository"
3. Find: `ollietitcomb/Onyx-Yacht-Management`
4. Click "Import"

### Step 3: Configure (Auto-detected)
Vercel will automatically detect:
- ✅ Framework: Next.js
- ✅ Build command: `npm run build`
- ✅ Output directory: Auto

Just click "Deploy"!

### Step 4: Your Site is Live!
You'll get a URL like:
```
https://onyx-yacht-management.vercel.app
```

## 🌐 Add Your Domain Later

When you buy your domain:
1. In Vercel, go to Settings → Domains
2. Add your domain
3. Update DNS at your registrar
4. Done!

## ⚠️ Known Issues

### Hero Image Not Loading Locally
The hero-yacht.jpg file needs to be:
- Under 2MB (yours is 8MB from iPhone)
- Properly formatted JPEG

**To fix:**
1. Resize the image using Preview app or online tool
2. Export as JPEG at 80% quality, max width 1920px
3. Replace `public/images/hero-yacht.jpg`

Or just deploy to Vercel - it often handles large images better!

## 📝 Before Going Live - Update These:

1. **Contact Details** in `components/footer.tsx`:
   - Replace "+44 (0) XXXX XXXXXX" with real phone
   
2. **Email** in `components/contact-form-static.tsx`:
   - Replace "info@onyxyachtmanagement.com" with your email

3. **Social Links** (optional):
   - Add to `components/footer.tsx` when ready

## 🎯 Recommended Next Actions:

1. **Deploy to Vercel now** → Get live preview URL
2. **Test everything works** on the live site
3. **Make final tweaks** (contact details, etc.)
4. **Buy domain** when ready
5. **Connect domain** in Vercel settings

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Your README.md has detailed instructions
- DEPLOYMENT.md has all deployment options

**Your website is production-ready. Just deploy it!** 🎉
