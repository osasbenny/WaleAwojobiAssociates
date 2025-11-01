# Wale Awojobi Associates - cPanel Deployment Guide

## Overview

This guide provides step-by-step instructions for deploying the Wale Awojobi Associates website to a cPanel hosting environment.

## Prerequisites

- Active cPanel hosting account
- FTP/SFTP access or cPanel File Manager
- Domain name configured in cPanel
- Basic understanding of cPanel interface

## Deployment Steps

### Step 1: Prepare the Distribution Package

The production build has been created in the `dist/` folder. This folder contains:

- `dist/public/` - All static assets (HTML, CSS, JavaScript, images, favicon)
- `dist/public/index.html` - Main HTML file
- `dist/public/assets/` - Minified CSS and JavaScript bundles
- `dist/public/favicon.ico`, `logo.png`, etc. - Branding assets

### Step 2: Upload Files to cPanel

**Option A: Using File Manager (Easiest)**

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Click on your domain's **public_html** folder
4. Upload the contents of `dist/public/` to `public_html/`
   - Upload `index.html` to the root
   - Upload the `assets/` folder
   - Upload all image files (favicon.ico, logo.png, apple-touch-icon.png, favicon-192.png)

**Option B: Using FTP/SFTP**

1. Connect to your hosting via FTP/SFTP client (FileZilla, WinSCP, etc.)
2. Navigate to the `public_html` directory
3. Upload all files from `dist/public/` to `public_html/`

**Option C: Using Terminal (Advanced)**

```bash
# Extract the distribution package
tar -xzf WaleAwojobiAssociates-cpanel-dist.tar.gz

# Copy files to public_html
cp -r dist/public/* ~/public_html/
```

### Step 3: Configure .htaccess for Single Page Application (SPA)

Since this is a React SPA, you need to configure `.htaccess` to handle client-side routing.

1. Create or edit `.htaccess` file in `public_html/`
2. Add the following configuration:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite all requests to index.html
  RewriteRule ^(.*)$ index.html [L]
</IfModule>

# Enable gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Set cache headers for static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType application/x-javascript "access plus 1 year"
  ExpiresByType font/ttf "access plus 1 year"
  ExpiresByType font/otf "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresDefault "access plus 2 days"
</IfModule>
```

### Step 4: Verify SSL Certificate

1. In cPanel, go to **AutoSSL** or **SSL/TLS**
2. Ensure your domain has an SSL certificate installed
3. Force HTTPS by updating `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

### Step 5: Test the Website

1. Open your domain in a web browser: `https://waleawojobiassociates.com.ng`
2. Test all pages:
   - Home page
   - About Us
   - Listings
   - Team
   - Blog
   - Contact
3. Test interactive features:
   - Property filters
   - Navigation menu
   - WhatsApp button
   - Contact form

### Step 6: Monitor Performance

1. In cPanel, check **Bandwidth** and **Disk Usage**
2. Monitor error logs in **Error Log** section
3. Use Google PageSpeed Insights to check performance

## File Structure in public_html

```
public_html/
├── index.html                 # Main HTML file
├── .htaccess                  # Apache configuration
├── favicon.ico                # Browser tab icon
├── favicon-192.png            # Android icon
├── apple-touch-icon.png       # iOS icon
├── logo.png                   # Website logo
└── assets/
    ├── index-BdCjCIep.css    # Minified CSS
    └── index-C6q9gm0v.js     # Minified JavaScript
```

## Troubleshooting

### Issue: Page shows 404 error when accessing sub-routes

**Solution:** Ensure `.htaccess` is properly configured to rewrite all requests to `index.html`.

### Issue: Styles or images not loading

**Solution:** 
- Check file permissions (should be 644 for files, 755 for folders)
- Verify all files were uploaded correctly
- Check browser console for 404 errors

### Issue: WhatsApp button not working

**Solution:** Ensure the phone number in the code is correct: `08078697158`

### Issue: Contact form not submitting

**Solution:** Contact forms require backend processing. Currently, the form is a placeholder. To enable email functionality, you'll need to:
1. Set up a backend service (Node.js, PHP, etc.)
2. Configure form submission endpoint
3. Update the contact form component

## Performance Optimization Tips

1. **Enable Gzip Compression** - Already configured in `.htaccess`
2. **Browser Caching** - Already configured in `.htaccess`
3. **CDN Integration** - Consider using Cloudflare for faster global delivery
4. **Image Optimization** - All images are optimized for web

## Updating Content

To update property listings, team members, or other content:

1. Clone the GitHub repository: `https://github.com/osasbenny/WaleAwojobiAssociates.git`
2. Edit the content in `client/src/const.ts`
3. Run `pnpm build` to create new distribution
4. Upload new files to `public_html/`

## Security Considerations

1. **HTTPS** - Always use HTTPS (enabled via SSL certificate)
2. **Headers** - Add security headers in `.htaccess`:

```apache
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

3. **Form Validation** - All form inputs are validated on the client side
4. **No Sensitive Data** - No API keys or credentials are exposed in the frontend code

## Support & Maintenance

For updates or modifications:
- Contact: waleawojobi@gmail.com
- Phone: 07788249154, 08078697158
- GitHub: https://github.com/osasbenny/WaleAwojobiAssociates

## Build Information

- **Build Date:** October 31, 2025
- **Framework:** React 19 with TypeScript
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite
- **Total Size:** ~1.2 MB (uncompressed), ~365 KB (compressed)

---

**Deployment Status:** Ready for production

For any issues or questions, reach out to the development team.
