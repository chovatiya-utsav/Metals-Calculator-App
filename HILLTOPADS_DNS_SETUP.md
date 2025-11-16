# HilltopAds DNS Setup Guide

## ✅ HilltopAds Integration Status

**Publisher ID:** `8d733eb56b3bebe9cdc4`  
**Status:** ✅ Code integration complete  
**DNS Setup:** ⚠️ Required (see below)

## 📋 DNS TXT Record Setup

To complete the HilltopAds verification, you need to add a TXT record to your domain's DNS configuration.

### DNS Record Details

- **Record Type:** TXT
- **Name/Host:** `@` (or leave blank for root domain)
- **Value:** `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
- **TTL:** 3600 (or use your DNS provider's default)

### Step-by-Step Instructions

#### For Vercel (if using custom domain)

1. **Go to your domain registrar** (where you purchased the domain)
   - Examples: GoDaddy, Namecheap, Google Domains, Cloudflare, etc.

2. **Access DNS Management**
   - Log into your domain registrar account
   - Navigate to DNS Management or DNS Settings
   - Find your domain: `metals-calculator-app.vercel.app` (or your custom domain)

3. **Add TXT Record**
   - Click "Add Record" or "Create Record"
   - Select record type: **TXT**
   - **Name/Host:** Enter `@` or leave blank (for root domain)
   - **Value/Content:** `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
   - **TTL:** 3600 (or default)
   - Save the record

4. **Wait for Propagation**
   - DNS changes can take up to 24 hours to propagate
   - Usually takes 1-4 hours, but can be up to 48 hours
   - You can check propagation status at: https://www.whatsmydns.net/

5. **Verify in HilltopAds Dashboard**
   - Once DNS propagates, go to your HilltopAds dashboard
   - The verification should complete automatically
   - You may need to click "Verify" or "Re-verify" in the dashboard

### For Different DNS Providers

#### Cloudflare
1. Go to Cloudflare Dashboard → Select your domain
2. Click "DNS" → "Records"
3. Click "Add record"
4. Type: TXT
5. Name: @ (or your subdomain)
6. Content: `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
7. TTL: Auto
8. Save

#### GoDaddy
1. Go to GoDaddy → My Products → DNS
2. Click "Add" under Records
3. Type: TXT
4. Name: @
5. Value: `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
6. TTL: 1 hour
7. Save

#### Namecheap
1. Go to Domain List → Manage → Advanced DNS
2. Click "Add New Record"
3. Type: TXT Record
4. Host: @
5. Value: `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
6. TTL: Automatic
7. Save

## ✅ What's Already Done in Code

1. ✅ **Verification Meta Tag** - Added to `index.html` (line 15)
   ```html
   <meta name="44ec65e08d33da6bf8848d733eb56b3bebe9cdc4" content="44ec65e08d33da6bf8848d733eb56b3bebe9cdc4" />
   ```

2. ✅ **Referrer Meta Tag** - Added to `index.html` (line 18)
   ```html
   <meta name="referrer" content="no-referrer-when-downgrade" />
   ```
   (This boosts revenue up to 20% according to HilltopAds)

3. ✅ **HilltopAds Script** - Integrated in `FallbackAd.tsx`
   - Publisher ID: `8d733eb56b3bebe9cdc4`
   - Script URL: `https://hilltopads.com/script/8d733eb56b3bebe9cdc4`

4. ✅ **Smart Ad Fallback** - HilltopAds added as final fallback in `SmartAd.tsx`

## 🔍 Verify DNS Record

After adding the TXT record, verify it's working:

### Using Command Line (Windows PowerShell)
```powershell
nslookup -type=TXT metals-calculator-app.vercel.app
```

### Using Online Tools
- https://www.whatsmydns.net/#TXT/metals-calculator-app.vercel.app
- https://mxtoolbox.com/TXTLookup.aspx

### Expected Result
You should see the TXT record with value: `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`

## ⚠️ Important Notes

1. **DNS Propagation Time:** Changes can take 1-48 hours to propagate globally
2. **Multiple Records:** You can have multiple TXT records, so adding this won't break existing records
3. **Verification:** HilltopAds will automatically verify once DNS propagates
4. **No Impact on Site:** Adding DNS records doesn't affect your website's functionality

## 🚀 After DNS Setup

Once DNS is verified:
1. HilltopAds will be active as the final fallback in your ad chain
2. Ads will automatically load if other ad networks fail
3. You can monitor performance in the HilltopAds dashboard
4. Revenue boost from referrer meta tag will be active

## 📞 Need Help?

If you encounter issues:
1. Double-check the TXT record value is exactly: `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
2. Wait at least 24 hours for DNS propagation
3. Check your DNS provider's documentation
4. Contact HilltopAds support if verification fails after 48 hours

---

**Last Updated:** $(date)  
**Publisher ID:** 8d733eb56b3bebe9cdc4  
**Website:** https://metals-calculator-app.vercel.app/

