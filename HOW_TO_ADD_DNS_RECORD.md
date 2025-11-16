# How to Add DNS TXT Record for HilltopAds

## 📋 Quick Summary

**What you need to add:**
- **Record Type:** TXT
- **Name/Host:** `@` (or leave blank)
- **Value:** `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
- **TTL:** 3600 (or default)

---

## ⚠️ Important: Domain Type Matters

### Scenario 1: Using Vercel Subdomain (.vercel.app)
**Domain:** `metals-calculator-app.vercel.app`

**❌ Problem:** Vercel subdomains (`.vercel.app`) don't allow custom DNS records. DNS is managed by Vercel.

**✅ Solutions:**
1. **Use File Upload or Meta Tag Method Instead** (Recommended)
   - These methods work immediately
   - File: Already created at `public/44ec65e08d33da6bf884.txt`
   - Meta tag: Already added to `index.html`
   - Just deploy and verify!

2. **Add a Custom Domain** (If you have one)
   - Add your custom domain in Vercel dashboard
   - Then follow instructions below for your domain registrar

---

### Scenario 2: Using Custom Domain
**Domain:** `yourdomain.com` (or any custom domain)

**✅ You can add DNS records** - Follow instructions below based on your domain registrar.

---

## 🚀 Step-by-Step Instructions by Provider

### Method 1: Cloudflare (Most Common)

1. **Log in to Cloudflare**
   - Go to https://dash.cloudflare.com
   - Log in with your account

2. **Select Your Domain**
   - Click on your domain name from the list
   - You'll see the DNS dashboard

3. **Add TXT Record**
   - Click the **"Add record"** button
   - **Type:** Select `TXT` from dropdown
   - **Name:** Enter `@` (or leave blank for root domain)
   - **Content:** Enter `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
   - **TTL:** Leave as "Auto" or set to 3600
   - Click **"Save"**

4. **Verify**
   - The record will appear in your DNS records list
   - Status should show as "Active"

---

### Method 2: GoDaddy

1. **Log in to GoDaddy**
   - Go to https://www.godaddy.com
   - Sign in to your account

2. **Access DNS Management**
   - Click **"My Products"** in the top menu
   - Find your domain and click **"DNS"** button
   - Or click the three dots (⋯) next to your domain → **"Manage DNS"**

3. **Add TXT Record**
   - Scroll down to the **"Records"** section
   - Click **"Add"** button
   - **Type:** Select `TXT` from dropdown
   - **Name:** Enter `@` (for root domain)
   - **Value:** Enter `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
   - **TTL:** Select "1 hour" (3600 seconds)
   - Click **"Save"**

4. **Verify**
   - The new TXT record will appear in your records list
   - Wait a few minutes for it to activate

---

### Method 3: Namecheap

1. **Log in to Namecheap**
   - Go to https://www.namecheap.com
   - Sign in to your account

2. **Access Advanced DNS**
   - Go to **"Domain List"** from the left menu
   - Click **"Manage"** next to your domain
   - Click on **"Advanced DNS"** tab

3. **Add TXT Record**
   - Scroll to **"Host Records"** section
   - Click **"Add New Record"** button
   - **Type:** Select `TXT Record`
   - **Host:** Enter `@` (for root domain)
   - **Value:** Enter `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
   - **TTL:** Select "Automatic" or "30 min"
   - Click the **✓ (checkmark)** to save

4. **Verify**
   - The record will appear in your Host Records list
   - Status should be active

---

### Method 4: Google Domains / Google Workspace

1. **Log in to Google Domains**
   - Go to https://domains.google.com
   - Sign in with your Google account

2. **Access DNS Settings**
   - Click on your domain name
   - Click on **"DNS"** in the left sidebar

3. **Add TXT Record**
   - Scroll to **"Custom resource records"** section
   - Click **"Add custom record"**
   - **Name:** Enter `@` (or leave blank)
   - **Type:** Select `TXT`
   - **Data:** Enter `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
   - **TTL:** Leave as default (3600)
   - Click **"Save"**

---

### Method 5: Name.com

1. **Log in to Name.com**
   - Go to https://www.name.com
   - Sign in to your account

2. **Access DNS Management**
   - Click on your domain name
   - Click **"DNS Records"** tab

3. **Add TXT Record**
   - Click **"Add Record"** button
   - **Type:** Select `TXT`
   - **Hostname:** Enter `@` (or leave blank)
   - **Answer:** Enter `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
   - **TTL:** Leave as default
   - Click **"Add Record"**

---

### Method 6: Vercel (If Using Custom Domain)

1. **Log in to Vercel**
   - Go to https://vercel.com
   - Sign in to your account

2. **Access Domain Settings**
   - Go to your project dashboard
   - Click on **"Settings"** → **"Domains"**
   - Click on your custom domain

3. **Add DNS Record**
   - Vercel doesn't manage DNS directly
   - You need to add the record at your domain registrar (where you bought the domain)
   - Follow instructions for your specific registrar above

---

## 🔍 How to Verify DNS Record is Working

### Method 1: Online DNS Checker

1. **Visit DNS Checker:**
   - Go to: https://www.whatsmydns.net/#TXT/metals-calculator-app.vercel.app
   - Replace with your actual domain

2. **Check Results:**
   - Enter your domain name
   - Select "TXT" record type
   - Click "Search"
   - You should see: `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`

### Method 2: Command Line (Windows PowerShell)

```powershell
nslookup -type=TXT yourdomain.com
```

**Expected Output:**
```
yourdomain.com
    text = "44ec65e08d33da6bf8848d733eb56b3bebe9cdc4"
```

### Method 3: Command Line (Mac/Linux Terminal)

```bash
dig TXT yourdomain.com
```

**Expected Output:**
```
;; ANSWER SECTION:
yourdomain.com.  3600  IN  TXT  "44ec65e08d33da6bf8848d733eb56b3bebe9cdc4"
```

---

## ⏱️ DNS Propagation Time

**Typical Timeline:**
- **Immediate:** 0-5 minutes (sometimes instant)
- **Common:** 5 minutes to 1 hour
- **Maximum:** Up to 24-48 hours (rare)

**Factors Affecting Speed:**
- Your DNS provider
- Geographic location
- TTL settings
- DNS cache

**What to Do:**
1. Wait at least 1 hour after adding the record
2. Check using DNS checker tools
3. If not showing after 24 hours, double-check the record

---

## ✅ Verification Checklist

After adding the DNS record, verify:

- [ ] Record added in DNS provider dashboard
- [ ] Record type is `TXT`
- [ ] Name/Host is `@` or blank (for root domain)
- [ ] Value is exactly: `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
- [ ] Record shows as "Active" or "Enabled"
- [ ] Wait 1-24 hours for propagation
- [ ] Verify using DNS checker tool
- [ ] Verify in HilltopAds dashboard

---

## 🆘 Troubleshooting

### Problem: Record Not Showing After 24 Hours

**Solutions:**
1. **Double-check the value** - Make sure it's exactly: `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
2. **Check for typos** - Copy and paste the value directly
3. **Verify record type** - Must be `TXT`, not `A`, `CNAME`, or other
4. **Check domain** - Make sure you're adding to the correct domain
5. **Clear DNS cache** - On Windows: `ipconfig /flushdns`

### Problem: "Record Already Exists"

**Solution:**
- You can have multiple TXT records
- Just add another one with the same value
- Or check if it's already there with a different name

### Problem: Using Vercel Subdomain (.vercel.app)

**Solution:**
- You **cannot** add DNS records to `.vercel.app` domains
- Use **File Upload** or **Meta Tag** method instead
- Both are already set up in your code!

---

## 🎯 Alternative: Use File or Meta Tag Method

If DNS setup is too complicated, you can use:

1. **File Upload Method** ✅ (Already Done)
   - File: `public/44ec65e08d33da6bf884.txt`
   - Accessible at: `https://yourdomain.com/44ec65e08d33da6bf884.txt`
   - Just deploy and verify!

2. **Meta Tag Method** ✅ (Already Done)
   - Meta tag already in `index.html`
   - Just deploy and verify!

**Both methods work immediately** - no DNS propagation needed!

---

## 📞 Need More Help?

1. **Check your domain registrar's documentation**
   - Most have step-by-step guides with screenshots
   - Search: "How to add TXT record [your registrar name]"

2. **Contact your domain registrar support**
   - They can help you add the record
   - Provide them the TXT record value

3. **Use File/Meta Tag method instead**
   - These are already set up in your code
   - No DNS configuration needed

---

**Last Updated:** $(date)  
**TXT Record Value:** `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`  
**Publisher ID:** `8d733eb56b3bebe9cdc4`

