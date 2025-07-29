import { useLocation } from "wouter";
import { useState } from "react";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WhatsAppChat from "@/components/whatsapp-chat";
import { courses } from "@/lib/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CourseDetail() {
  const [location] = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const slug = location.slice(1); // Remove leading slash
  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen">
        <Header />
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4 font-bengali">কোর্স খুঁজে পাওয়া যায়নি</h1>
          <p className="text-xl text-gray-600 font-bengali">দুঃখিত, এই কোর্সটি বর্তমানে উপলব্ধ নেই।</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  {course.isLive && (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">LIVE CLASS</span>
                  )}
                  <span className="text-gray-500 font-bengali">{course.duration}</span>
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800 font-bengali">{course.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-lg text-gray-600 mb-6 font-bengali">{course.description}</p>
                
                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">
                    ৳ {course.price}
                    {course.price > 750 && <span className="text-lg font-bengali"> প্রতি মাস</span>}
                  </h3>
                  <p className="text-gray-600 font-bengali">
                    {course.price > 750 ? "কিস্তিতে পেমেন্ট সুবিধা উপলব্ধ" : "একমুশত পেমেন্ট"}
                  </p>
                </div>
                
                <Button 
                  onClick={() => setIsChatOpen(true)}
                  className="w-full text-lg py-3 bg-purple-600 hover:bg-purple-700 font-bengali"
                >
                  এখনই ভর্তি হন
                </Button>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2 font-bengali">বিশেষ সুবিধা:</h4>
                  <ul className="list-disc list-inside text-green-700 space-y-1 font-bengali">
                    <li>লাইভ ক্লাস এবং রেকর্ডেড ভিডিও</li>
                    <li>২৪/৭ সাপোর্ট সিস্টেম</li>
                    <li>সার্টিফিকেট প্রদান</li>
                    <li>প্র্যাকটিক্যাল প্রজেক্ট</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
      
      <WhatsAppChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        courseTitle={course.title}
      />
    </div>
  );
}
