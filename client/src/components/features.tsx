import { CheckCircle, Share2, Home, Star } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: CheckCircle,
      title: "এক্সক্লুসিভ কন্টেন্ট",
      description: "সেরা এবং অভিজ্ঞ মেন্টরদের দ্বারা তৈরি ও যাচাইকৃত মানসম্মত কন্টেন্ট"
    },
    {
      icon: Share2,
      title: "সোশ্যাল মিডিয়ায় নিয়মিত আপডেট",
      description: "কোর্স সম্পর্কিত আপডেট এবং তথ্য পাবেন নিয়মিত"
    },
    {
      icon: Home,
      title: "২৪ ঘন্টা সাপোর্ট সিস্টেম",
      description: "সব প্রয়োজনে সহায়তার জন্য থাকছে সার্বক্ষনিক এক্টিভ সাপোর্ট টিম"
    },
    {
      icon: Star,
      title: "হাতে-কলমে শেখানো",
      description: "কোর্সগুলো সাজানো হয়েছে পূর্ব অভিজ্ঞতা ছাড়া সকল মেধার শিক্ষার্থীর জন্য"
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-bengali">স্কিলশিখুন কেন বেছে নেবেন? ফিচারগুলো দেখে নিন!</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-bengali">{feature.title}</h3>
                <p className="text-gray-600 font-bengali">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
