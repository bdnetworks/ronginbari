import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("আসসালামু আলাইকুম। আমি স্কিল শিখুন সম্পর্কে জানতে চাই।");
    window.open(`https://wa.me/8801613823645?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-bengali">
              যোগাযোগ করুন
            </h1>
            <p className="text-xl text-gray-600 font-bengali">
              আমাদের সাথে যোগাযোগ করুন এবং আপনার প্রশ্নের উত্তর পান
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-bengali">ফোন</h3>
              <a 
                href="tel:09613823645" 
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                09613823645
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-bengali">WhatsApp</h3>
              <button 
                onClick={handleWhatsAppClick}
                className="text-green-600 hover:text-green-700 font-semibold font-bengali"
              >
                মেসেজ পাঠান
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-bengali">ইমেইল</h3>
              <a 
                href="mailto:info@skillshikhun.com" 
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                info@skillshikhun.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-bengali">ঠিকানা</h3>
              <p className="text-gray-600 font-bengali">ঢাকা, বাংলাদেশ</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-bengali">
              অফিস সময়
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-bengali">কল সেন্টার</h3>
                <ul className="space-y-2 text-gray-600 font-bengali">
                  <li>সকাল ৯:০০ টা - রাত ১০:০০ টা</li>
                  <li>সাত দিন খোলা</li>
                  <li>তাৎক্ষণিক সাপোর্ট</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-bengali">লাইভ ক্লাস</h3>
                <ul className="space-y-2 text-gray-600 font-bengali">
                  <li>সকাল ১০:০০ টা - রাত ৯:০০ টা</li>
                  <li>সপ্তাহে ৬ দিন</li>
                  <li>ইন্টারঅ্যাক্টিভ সেশন</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}