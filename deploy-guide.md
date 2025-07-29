# 🚀 Vercel Deployment Guide - Skill Shikhun

এই guide অনুসরণ করে আপনি আপনার Skill Shikhun প্রোজেক্ট Vercel এ deploy করতে পারবেন।

## 📋 Pre-requisites

- Node.js 18+ installed
- Git repository (GitHub/GitLab/Bitbucket)
- Vercel account (free)

## 🛠️ Method 1: Automatic Deployment (Recommended)

### Step 1: Build করুন
```bash
node build-vercel.js
```

### Step 2: Git এ push করুন
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 3: Vercel এ import করুন
1. [vercel.com](https://vercel.com) এ যান
2. "New Project" ক্লিক করুন
3. আপনার Git repository select করুন
4. "Deploy" ক্লিক করুন

## 🔧 Method 2: CLI Deployment

### Step 1: Vercel CLI install করুন
```bash
npm install -g vercel
```

### Step 2: Login করুন
```bash
vercel login
```

### Step 3: Build এবং Deploy করুন
```bash
# Build করুন
node build-vercel.js

# Deploy করুন
vercel --prod
```

## 📁 Project Structure (Vercel Ready)

```
skill-shikhun/
├── api/
│   ├── index.js          # Serverless function
│   └── package.json      # API dependencies
├── dist/
│   ├── public/           # Built React app
│   └── index.js          # Built Express server
├── client/               # React source
├── server/               # Express source
├── shared/               # Shared schemas
├── vercel.json           # Vercel config
├── .vercelignore         # Ignore files
└── build-vercel.js       # Build script
```

## ⚙️ Configuration Files যা তৈরি করা হয়েছে:

### 1. `vercel.json`
- Vercel deployment configuration
- API routing setup
- Build settings

### 2. `api/index.js`
- Serverless function entry point
- Express app wrapper
- CORS configuration

### 3. `.vercelignore`
- Files to ignore during deployment
- Optimizes build size

### 4. `build-vercel.js`
- Automated build script
- Verifies all required files
- Error handling

## 🌐 Post-Deployment

### Custom Domain (Optional)
1. Vercel dashboard এ যান
2. Project settings > Domains
3. আপনার domain add করুন

### Environment Variables (If needed)
1. Project settings > Environment Variables
2. Add variables:
   - `NODE_ENV=production`
   - `DATABASE_URL=your_db_url` (if using database)

## 🔍 Troubleshooting

### Build Errors:
```bash
# Clean build
rm -rf dist/ node_modules/
npm install
node build-vercel.js
```

### API Errors:
- Check `api/index.js` imports
- Verify serverless function structure

### Static Files Issues:
- Ensure `dist/public/` contains all assets
- Check `vercel.json` routing

## ✅ Success Indicators

আপনার deployment successful হলে:
- ✅ Build script কোনো error ছাড়া complete হবে
- ✅ Vercel dashboard এ "Ready" status দেখাবে
- ✅ Live URL এ সাইট accessible হবে
- ✅ API endpoints কাজ করবে

## 📞 Support

যদি কোনো সমস্যা হয়:
1. Build logs check করুন
2. Vercel function logs দেখুন
3. Browser console check করুন

**আপনার Skill Shikhun platform এখন Vercel এ deploy করার জন্য সম্পূর্ণ প্রস্তুত!** 🎉