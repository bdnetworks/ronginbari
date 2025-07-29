import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Features from "@/components/features";
import Statistics from "@/components/statistics";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-bengali">
              আমাদের সম্পর্কে
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-bengali">
              স্কিল শিখুন বাংলাদেশের অন্যতম জনপ্রিয় অনলাইন শিক্ষা প্ল্যাটফর্ম। আমাদের লক্ষ্য হচ্ছে 
              সাশ্রয়ী মূল্যে মানসম্মত শিক্ষা প্রদান করা এবং প্রত্যেকের ক্যারিয়ার গঠনে সহায়তা করা।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-600 mb-4 font-bengali">আমাদের মিশন</h3>
              <p className="text-gray-600 font-bengali">
                প্রত্যেকের জন্য সাশ্রয়ী এবং মানসম্মত অনলাইন শিক্ষার ব্যবস্থা করা
              </p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 font-bengali">আমাদের ভিশন</h3>
              <p className="text-gray-600 font-bengali">
                বাংলাদেশে দক্ষ জনশক্তি গড়ে তোলা এবং বেকারত্ব কমানো
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-4 font-bengali">আমাদের মূল্যবোধ</h3>
              <p className="text-gray-600 font-bengali">
                মানসম্মত শিক্ষা, সততা, এবং শিক্ষার্থীদের সফলতা
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Features />
      <Statistics />
      <Footer />
    </div>
  );
}