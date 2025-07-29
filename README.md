# Skill Shikhun - Bengali Online Learning Platform

একটি সম্পূর্ণ Bengali অনলাইন কোর্স প্ল্যাটফর্ম যা React এবং Express দিয়ে তৈরি।

## বৈশিষ্ট্য

- 🎓 **5টি কোর্স**: ফ্রিল্যান্সিং, ওয়েব ডেভেলপমেন্ট, গ্রাফিক্স ডিজাইন, ডিজিটাল মার্কেটিং, ভিডিও এডিটিং
- 📱 **Responsive Design**: মোবাইল এবং ডেস্কটপ উভয়ের জন্য
- 🌟 **Bengali Support**: সম্পূর্ণ Bengali ভাষায় interface
- 🎥 **Course Carousel**: স্বয়ংক্রিয় slide carousel 
- 📝 **Enrollment System**: Multi-step enrollment modal with OTP
- 💬 **Testimonials**: Student reviews এবং feedback
- 📊 **Statistics**: Live visitor counter
- 🎨 **Modern UI**: Tailwind CSS এবং Radix UI

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **UI Components**: Radix UI, shadcn/ui
- **Fonts**: Noto Sans Bengali, Poppins
- **Build**: Vite, ESBuild

## Vercel Deployment

এই প্রোজেক্ট Vercel এ deploy করার জন্য সম্পূর্ণ প্রস্তুত।

### Deployment Steps:

1. **Vercel CLI Install করুন:**
   ```bash
   npm i -g vercel
   ```

2. **Vercel এ Login করুন:**
   ```bash
   vercel login
   ```

3. **Project Build করুন:**
   ```bash
   npm run build
   ```

4. **Deploy করুন:**
   ```bash
   vercel --prod
   ```

### Environment Variables (Optional):

যদি database বা অন্য external services ব্যবহার করতে চান:

```
DATABASE_URL=your_database_url
NODE_ENV=production
```

## Development

```bash
# Dependencies install করুন
npm install

# Development server চালু করুন
npm run dev

# Production build করুন
npm run build

# Production server চালু করুন
npm start
```

## Course Pages

- `/` - Homepage
- `/shobar-jnno-freelancing` - Freelancing Course
- `/web-development` - Web Development Course
- `/graphics-design` - Graphics Design Course
- `/digital-marketing` - Digital Marketing Course
- `/video-editing` - Video Editing Course

## Features

✅ Header advertisement banner  
✅ Navigation menu below header  
✅ Course carousel and grid layout  
✅ Multi-step enrollment modal  
✅ Bengali typography and content  
✅ Responsive design  
✅ Working page routing  
✅ Testimonials slider  
✅ Statistics counter  
✅ Footer with links  

## Vercel Configuration

প্রোজেক্টে `vercel.json` এবং build configuration সব ready আছে। শুধু deploy command run করলেই কাজ হবে।