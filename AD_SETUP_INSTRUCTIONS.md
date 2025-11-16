# Ad System Setup Instructions

## ✅ Completed Implementation

Your website has been successfully upgraded with a full ad system including:
- Google AdSense integration
- Media.net fallback ads
- Adsterra fallback ads
- **HilltopAds fallback ads** ✅ (Configured)
- Smart ad system with automatic fallback logic

## 📝 Where to Update Ad IDs

### 1. Google AdSense ID

**File: `index.html`**
- Line 44: Replace `YOUR_ADSENSE_ID` with your actual Google AdSense publisher ID
- Format: `ca-pub-XXXXXXXXXX`

**File: `src/components/Ads/GoogleAd.tsx`**
- Line 31: Replace `YOUR_ADSENSE_ID` with your actual Google AdSense publisher ID
- Format: `ca-pub-XXXXXXXXXX`

### 2. Media.net ID

**File: `src/components/Ads/FallbackAd.tsx`**
- Line 15: Replace `YOUR_MEDIA_NET_ID` with your actual Media.net CID
- Format: Usually an 8-character alphanumeric code

### 3. Adsterra ID

**File: `src/components/Ads/FallbackAd.tsx`**
- Line 16: Replace `YOUR_ADSTERRA_ID` with your actual Adsterra publisher ID
- Format: Usually a numeric ID

### 4. HilltopAds ✅ (Already Configured)

**Status:** ✅ **CONFIGURED** - Publisher ID: `8d733eb56b3bebe9cdc4`

**Files already updated:**
- `index.html` - Verification meta tag added (line 15)
- `index.html` - Referrer meta tag added (line 18)
- `src/components/Ads/FallbackAd.tsx` - HilltopAds integration added
- `src/components/Ads/SmartAd.tsx` - HilltopAds added to fallback chain

**DNS Setup Required:**
You need to add a TXT record to your DNS configuration:
- **Record Type:** TXT
- **Name/Host:** @ (or your domain root)
- **Value:** `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
- **TTL:** 3600 (or default)

**For Vercel:**
1. Go to your domain provider (where you manage DNS)
2. Add a TXT record with the value: `44ec65e08d33da6bf8848d733eb56b3bebe9cdc4`
3. Wait up to 24 hours for DNS propagation
4. Verify in HilltopAds dashboard

### 5. Ad Slot IDs

**Files to update:**
- `src/App.tsx` - Lines 141, 308, 385: Replace `"1234567890"` with your actual AdSense slot IDs
- `src/components/Footer.tsx` - Line 13: Replace `"1234567890"` with your actual AdSense slot ID

**Note:** You can use different slot IDs for different placements (top, middle, bottom) for better ad performance.

## 🎯 Ad Placement Locations

1. **Top Ad** - Homepage header (always visible)
2. **Middle Ad** - Between item form and item lists (shown when items exist)
3. **Bottom Ad** - After item lists (shown when items exist)
4. **Footer Ad** - In the footer section (always visible)

## 🔄 How the Smart Ad System Works

The ad system uses a 4-tier fallback chain:

1. **First Attempt:** Tries to load Google AdSense ad (2.5s timeout)
2. **Fallback 1:** If Google ad doesn't load (height < 40px), switches to Media.net (3s timeout)
3. **Fallback 2:** If Media.net doesn't load (height < 40px), switches to Adsterra (3s timeout)
4. **Fallback 3:** If Adsterra doesn't load (height < 40px), switches to HilltopAds ✅

The system automatically detects when ads fail to load and seamlessly switches to the next provider.

## 📋 Legal Pages Updated

All legal pages have been updated with:
- ✅ Privacy Policy - Includes AdSense, cookies, third-party vendors, data usage
- ✅ Terms & Conditions - Includes user responsibilities, no financial advice disclaimer
- ✅ Disclaimer - Includes data accuracy, no financial advice, limitations
- ✅ About Page - Professional content about the tool

## 🎨 UI Enhancements

- ✅ Framer Motion animations added for smooth transitions
- ✅ React Router Link integration for proper navigation
- ✅ Responsive design maintained
- ✅ Professional layout with header and footer

## 🚀 Next Steps

1. **Get AdSense Approval:**
   - Ensure your site has sufficient content (✅ Already done)
   - Submit your site to Google AdSense
   - Wait for approval (usually 1-2 weeks)

2. **Set Up Media.net Account:**
   - Sign up at media.net
   - Get your CID
   - Update the ID in FallbackAd.tsx

3. **Set Up Adsterra Account:**
   - Sign up at adsterra.com
   - Get your publisher ID
   - Update the ID in FallbackAd.tsx

4. **Create Ad Units:**
   - In Google AdSense, create ad units for each placement
   - Copy the slot IDs and update them in App.tsx and Footer.tsx

5. **Test the System:**
   - Deploy to production
   - Test ad loading in different scenarios
   - Monitor ad performance

## ⚠️ Important Notes

- **Development Mode:** Ads will show placeholders in development
- **Production Only:** Google AdSense only loads in production environment
- **Ad Blockers:** Some users may have ad blockers that prevent ads from showing
- **Compliance:** Ensure your site complies with AdSense policies

## 📞 Support

If you encounter any issues:
1. Check browser console for errors
2. Verify all ad IDs are correctly entered
3. Ensure ad scripts are loading (check Network tab)
4. Test in incognito mode (ad blockers disabled)

---

**Last Updated:** $(date)
**Website:** https://metals-calculator-app.vercel.app/

