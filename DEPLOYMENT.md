# Deployment Guide - Onyx Yacht Management

## Option 1: Vercel (Recommended) ⭐

Vercel is built for Next.js and offers the best performance with zero configuration.

### Steps:

#### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial Onyx Yacht Management website"

# Create a new repo on GitHub, then:
git remote add origin https://github.com/yourusername/onyx-yacht-management.git
git push -u origin main
```

#### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings
5. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com`
   - `VERCEL_ANALYTICS` = `1`
6. Click "Deploy"

#### 3. Connect Your Hostinger Domain

**In Vercel:**
1. Go to Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `onyxyachtmanagement.com`)
4. Vercel will show DNS records you need

**In Hostinger:**
1. Log into Hostinger
2. Go to "Domains" → Your Domain → DNS/Nameservers
3. Choose "Custom DNS records"
4. Add the records Vercel provided:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`

5. Save and wait 5-60 minutes for DNS propagation

#### 4. Done!

Your site will be live at your Hostinger domain with:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-deployments on git push
- ✅ Preview deployments for branches

---

## Option 2: Hostinger VPS/Cloud Hosting

**Requirements:**
- Hostinger **VPS** or **Cloud Hosting** plan (NOT shared hosting)
- Node.js 18+ installed
- SSH access

### Steps:

#### 1. SSH into Your Hostinger Server

```bash
ssh your-username@your-server-ip
```

#### 2. Install Node.js (if not already installed)

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version  # Should show v18+
```

#### 3. Upload Your Code

```bash
# Option A: Via Git
git clone https://github.com/yourusername/onyx-yacht-management.git
cd onyx-yacht-management

# Option B: Via SFTP
# Upload files using FileZilla or similar
```

#### 4. Install Dependencies & Build

```bash
npm install --legacy-peer-deps
npm run build
```

#### 5. Set Up PM2 (Process Manager)

```bash
sudo npm install -g pm2
pm2 start npm --name "onyx-website" -- start
pm2 save
pm2 startup  # Follow the instructions
```

#### 6. Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/onyxyachtmanagement.com
```

Add:
```nginx
server {
    listen 80;
    server_name onyxyachtmanagement.com www.onyxyachtmanagement.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/onyxyachtmanagement.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 7. Set Up SSL (HTTPS)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d onyxyachtmanagement.com -d www.onyxyachtmanagement.com
```

---

## Option 3: Static Export (Works on Shared Hosting)

If you only have Hostinger shared hosting, you can export as static HTML:

### Limitations:
- ❌ No server actions (contact form won't work)
- ❌ No dynamic features
- ✅ Fast, simple hosting

### Steps:

1. Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. Build static files:
```bash
npm run build
```

3. Upload the `out/` folder to Hostinger via FTP

4. Point your domain to the uploaded folder

**Note:** This disables the contact form and server features.

---

## Recommended: Use Vercel

For a Next.js site like this, **Vercel is the best choice**:

- Free for commercial use
- Perfect Next.js optimization
- Automatic HTTPS
- Global CDN
- Zero configuration
- Easy domain connection

Just keep your Hostinger domain and point the DNS to Vercel!

---

## Need Help?

The easiest path:
1. Deploy to Vercel (free)
2. Point your Hostinger domain DNS to Vercel
3. Done in 10 minutes

Want me to walk you through the GitHub → Vercel deployment?
