export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  isLive: boolean;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "সবার জন্য ফ্রিল্যান্সিং",
    slug: "shobar-jnno-freelancing",
    description: "ফ্রিল্যান্সিং এর মূল বিষয়গুলো শিখুন এবং অনলাইনে আয় শুরু করুন",
    price: 750,
    duration: "৭ দিনের কোর্স",
    image: "https://skill-shikhun.netlify.app/static/media/FL.36b4e5cbb64728ca3c0a.png",
    isLive: true
  },
  {
    id: "2", 
    title: "ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট",
    slug: "web-development",
    description: "সম্পূর্ণ ওয়েব ডেভেলপমেন্ট শিখুন HTML, CSS, JavaScript এবং আরও অনেক কিছু",
    price: 1500,
    duration: "৩ মাসের কোর্স",
    image: "https://skill-shikhun.netlify.app/static/media/WD.3c2e0df1e4412a1f69a5.png",
    isLive: true
  },
  {
    id: "3",
    title: "ডিজিটাল মার্কেটিং",
    slug: "digital-marketing", 
    description: "ডিজিটাল মার্কেটিং এর সকল কৌশল শিখুন এবং ব্র্যান্ড তৈরি করুন",
    price: 1500,
    duration: "২ মাসের কোর্স",
    image: "https://skill-shikhun.netlify.app/static/media/DM.f0f690691a1af9996b02.png",
    isLive: true
  },
  {
    id: "4",
    title: "গ্রাফিক্স ডিজাইন",
    slug: "graphics-design",
    description: "প্রফেশনাল গ্রাফিক্স ডিজাইন শিখুন এবং ক্রিয়েটিভ ক্যারিয়ার শুরু করুন",
    price: 1500,
    duration: "৩ মাসের কোর্স", 
    image: "https://skill-shikhun.netlify.app/static/media/GD.63300e1ce24623e1f031.png",
    isLive: true
  },
  {
    id: "5",
    title: "ভিডিও এডিটিং",
    slug: "video-editing",
    description: "প্রফেশনাল ভিডিও এডিটিং শিখুন এবং সৃজনশীল কন্টেন্ট তৈরি করুন",
    price: 1500,
    duration: "২ মাসের কোর্স",
    image: "https://skill-shikhun.netlify.app/static/media/VE.f7fcb97cb00d6a1210fa.png",
    isLive: true
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Tutul Ahmed",
    courseId: "4",
    courseName: "Graphics Design",
    review: "অসাধারণ!! খুব সুন্দর একটি কোর্স!! ইনশাআল্লাহ ভালো কিছু শিখতে পারবো আশা করি।",
    avatar: null
  },
  {
    id: "2", 
    name: "Abed Hossain",
    courseId: "5",
    courseName: "Video Editing", 
    review: "Very very important course for video editing. So helpful for professional video editing as well as freelancing. The mentor is well enough to help cordially as soon as possible",
    avatar: "https://skill-shikhun.netlify.app/static/media/Abed%20Hossain.71c7d737de1765d175fb.jpg"
  },
  {
    id: "3",
    name: "Ramisa Anjum", 
    courseId: "5",
    courseName: "Video Editing",
    review: "This course is so effective to develop skill about video editing. I appreciate that if anyone follow the all lesson of this course with regular practice he must gain.",
    avatar: null
  },
  {
    id: "4",
    name: "Supto Khan",
    courseId: "5", 
    courseName: "Video Editing",
    review: "আমি আসলে অনেক কনফিউজড ছিলাম এই কোর্স টা নিয়ে কারন আমি এত দিন খুজে যাচ্ছিলাম এমন একটা কোর্স। যাক ভাইয়া খুবই ফ্রেন্ডলি অনেক হেল্প করে। আমি আশা করি এই কোর্স থেকে ভালো কিছু অর্জন করবো",
    avatar: null
  }
];
