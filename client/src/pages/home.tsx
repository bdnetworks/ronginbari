import { useState } from "react";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import CourseCarousel from "@/components/course-carousel";
import CourseGrid from "@/components/course-grid";
import Features from "@/components/features";
import Statistics from "@/components/statistics";
import Testimonials from "@/components/testimonials";
import WhatsAppChat from "@/components/whatsapp-chat";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { courses } from "@/lib/courses";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState<string>();

  const handleEnrollClick = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    setSelectedCourseTitle(course?.title);
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <Hero />
      <CourseCarousel />
      <CourseGrid onEnrollClick={handleEnrollClick} />
      
      {/* Installment Payment Section */}
      <section className="py-16 skill-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-4xl font-bold mb-6 font-bengali">বাংলাদেশের এই প্রথম কিস্তিতে পেমেন্ট করার সুব্যবস্থা !!!</h2>
              <p className="text-xl mb-6 font-bengali">
                স্কিল শিখে কাজ করতে চাচ্ছেন কিন্তু ফি পরিশোধ করতে পারছেন না? ২মাস কিংবা ৩মাস মেয়াদি যেকোনো কোর্স এ পাচ্ছেন কিস্তিতে ফি পরিশোধ এর সুব্যবস্থা ! আগে আসলে আগে পাবেন ভিত্তিতে সিট কিন্তু সীমিত !!
              </p>
              <Link href="/courses" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors font-bengali">
                কোর্স সমূহ
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://skill-shikhun.netlify.app/static/media/Installments.a2c60221b25b56b21231.png" 
                alt="Installment Payment" 
                className="w-full max-w-md mx-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Header Ad */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="https://skill-shikhun.netlify.app/static/media/skill999.59ef7ce4173034a1f289.png" 
            alt="Skill999 Advertisement" 
            className="mx-auto h-16 md:h-20 object-contain hidden md:block" 
          />
          <img 
            src="https://skill-shikhun.netlify.app/static/media/skill999_sm.7e94708304c503e59e1f.png" 
            alt="Skill999 Advertisement Mobile" 
            className="mx-auto h-12 object-contain md:hidden" 
          />
        </div>
      </section>

      <Features />
      <Statistics />
      <Testimonials />
      <Footer />
      
      <WhatsAppChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        courseTitle={selectedCourseTitle}
      />
    </div>
  );
}
