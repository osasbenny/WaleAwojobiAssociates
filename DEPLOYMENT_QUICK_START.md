# Quick Start - cPanel Deployment

## 5-Minute Deployment Guide

### What You Need

- cPanel hosting account
- Domain name (waleawojobiassociates.com.ng)
- FTP/SFTP access or cPanel File Manager

### Step 1: Download Distribution Files

The production build is ready in the `dist/` folder:
- **File:** `WaleAwojobiAssociates-cpanel-dist.tar.gz` (365 KB)
- **Contains:** All optimized HTML, CSS, JavaScript, and images

### Step 2: Upload to cPanel (Choose One)

**Via File Manager (Easiest):**
1. Log in to cPanel
2. Open File Manager
3. Navigate to `public_html`
4. Upload contents of `dist/public/` folder

**Via FTP:**
1. Connect with FTP client to your hosting
2. Navigate to `public_html` folder
3. Upload all files from `dist/public/`

### Step 3: Add .htaccess File

1. In `public_html`, create a new file named `.htaccess`
2. Copy contents from `.htaccess-template` file in the project
3. Save the file

### Step 4: Verify SSL

1. In cPanel, go to SSL/TLS
2. Ensure your domain has an active SSL certificate
3. If not, enable AutoSSL

### Step 5: Test

Visit your domain: `https://waleawojobiassociates.com.ng`

✅ **Done!** Your website is live.

---

## File Structure to Upload

```
public_html/
├── index.html
├── .htaccess
├── favicon.ico
├── favicon-192.png
├── apple-touch-icon.png
├── logo.png
└── assets/
    ├── index-BdCjCIep.css
    └── index-C6q9gm0v.js
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 on sub-pages | Ensure `.htaccess` is in `public_html` |
| Styles not loading | Check file permissions (644 for files) |
| Images missing | Verify all image files uploaded |
| HTTPS not working | Enable SSL in cPanel SSL/TLS section |

## Update Website Content

To update property listings or team info:

1. Edit `client/src/const.ts`
2. Run `pnpm build`
3. Upload new `dist/public/` files to `public_html`

## Need Help?

- **Email:** waleawojobi@gmail.com
- **Phone:** 07788249154, 08078697158
- **GitHub:** https://github.com/osasbenny/WaleAwojobiAssociates

---

**Status:** ✅ Ready for Production
