import { Link } from "wouter";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-bengali">স্কিল শিখুন</h3>
            <p className="text-gray-300 mb-4 font-bengali">ঘরে বসে আয় করার মাধ্যম শিখুন আমাদের সাথে</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">YouTube</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 font-bengali">কোর্স সমূহ</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/shobar-jnno-freelancing" className="hover:text-white transition-colors font-bengali">ফ্রিল্যান্সিং</Link></li>
              <li><Link href="/web-development" className="hover:text-white transition-colors font-bengali">ওয়েব ডেভেলপমেন্ট</Link></li>
              <li><Link href="/graphics-design" className="hover:text-white transition-colors font-bengali">গ্রাফিক্স ডিজাইন</Link></li>
              <li><Link href="/digital-marketing" className="hover:text-white transition-colors font-bengali">ডিজিটাল মার্কেটিং</Link></li>
              <li><Link href="/video-editing" className="hover:text-white transition-colors font-bengali">ভিডিও এডিটিং</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 font-bengali">যোগাযোগ</h4>
            <div className="text-gray-300 space-y-2">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:09613823645" className="hover:text-white transition-colors">09613823645</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p className="font-bengali">&copy; 2024 স্কিল শিখুন। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}
