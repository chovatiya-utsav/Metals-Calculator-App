# AdSense 400 Error Troubleshooting Guide

## 🔧 Fixed Issues

### 1. **Development Mode Protection**
- ✅ Ads are disabled in development mode
- ✅ Shows placeholder instead of making API calls
- ✅ Prevents 400 errors during development

### 2. **Better Error Handling**
- ✅ Graceful fallback when ads fail to load
- ✅ Proper error states and user feedback
- ✅ Script loading optimization

### 3. **Production-Ready Configuration**
- ✅ Only loads ads in production environment
- ✅ Proper domain verification checks
- ✅ Optimized script loading

## 🚨 Common 400 Error Causes & Solutions

### **1. Invalid Ad Slot ID**
**Problem**: Using placeholder slot ID `1234567890`
**Solution**: 
1. Go to your AdSense dashboard
2. Create actual ad units
3. Replace placeholder IDs in `src/utils/adsense.ts`

```typescript
export const ADSENSE_CONFIG = {
  clientId: 'ca-pub-8681185583405652',
  adSlots: {
    topBanner: 'YOUR_ACTUAL_TOP_BANNER_SLOT_ID',
    bottomBanner: 'YOUR_ACTUAL_BOTTOM_BANNER_SLOT_ID',
    sidebar: 'YOUR_ACTUAL_SIDEBAR_SLOT_ID',
  }
};
```

### **2. AdSense Not Approved**
**Problem**: Site not yet approved for AdSense
**Solution**: 
- Wait for AdSense approval
- Ensure site has enough content
- Fix any policy violations

### **3. Domain Not Verified**
**Problem**: Testing on unverified domain
**Solution**:
- Add your domain to AdSense
- Verify domain ownership
- Test only on verified domains

### **4. Ad Blockers**
**Problem**: Browser extensions blocking ads
**Solution**:
- Disable ad blockers for testing
- Test in incognito mode
- Use different browsers

## 🛠️ Testing Steps

### **1. Development Testing**
```bash
npm run dev
```
- Should show placeholder ads
- No 400 errors in console
- Clean development experience

### **2. Production Testing**
```bash
npm run build
npm run preview
```
- Should attempt to load real ads
- Check browser console for errors
- Verify domain is approved

### **3. AdSense Dashboard**
1. Check ad unit status
2. Verify slot IDs are correct
3. Ensure site is approved
4. Check for policy violations

## 📋 Pre-Deployment Checklist

- [ ] Replace placeholder ad slot IDs
- [ ] Verify AdSense account is approved
- [ ] Add domain to AdSense
- [ ] Test in production environment
- [ ] Check for policy compliance
- [ ] Ensure sufficient content

## 🚀 Quick Fix

If you're still getting 400 errors:

1. **Temporarily disable ads**:
   ```typescript
   // In src/utils/adsense.ts
   export const isAdSenseEnabled = () => false;
   ```

2. **Check AdSense dashboard** for actual slot IDs

3. **Verify domain** is added to AdSense

4. **Wait for approval** if site is new

The app will work perfectly without ads while you fix the AdSense configuration!
