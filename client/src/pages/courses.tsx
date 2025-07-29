import { useState } from "react";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import CourseGrid from "@/components/course-grid";
import WhatsAppChat from "@/components/whatsapp-chat";
import Footer from "@/components/footer";
import { courses } from "@/lib/courses";

export default function Courses() {
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
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-bengali">
              আমাদের সকল কোর্স
            </h1>
            <p className="text-xl text-gray-600 font-bengali">
              আপনার পছন্দের স্কিল শিখুন এবং ক্যারিয়ার গড়ুন
            </p>
          </div>
          
          <CourseGrid onEnrollClick={handleEnrollClick} />
        </div>
      </div>
      
      <Footer />
      
      <WhatsAppChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        courseTitle={selectedCourseTitle}
      />
    </div>
  );
}