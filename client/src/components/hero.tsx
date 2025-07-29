import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-bengali leading-tight">
          <span className="block text-white">স্কিল শিখুন এর হাত ধরে শিখুন</span>
          <span className="block text-yellow-300 mt-2">ঘরে বসে আয় করার মাধ্যম!</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto font-bengali text-gray-100">
          সাশ্রয়ী মূল্যে ঘরে বসে লাইভ ক্লাস করুন ইন্সট্রাক্টর এর সাথে!
        </p>
        <a 
          href="tel:09613823645"
          className="bg-green-500 inline-flex items-center px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <span className="font-bengali">কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য কল করুন</span>
          <Phone className="w-4 h-4 md:w-5 md:h-5 ml-2" />
          <span className="ml-2 font-bold">09613823645</span>
        </a>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300 opacity-10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 opacity-20 rounded-full transform -translate-y-1/2"></div>
    </section>
  );
}
