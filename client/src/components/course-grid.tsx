import { Link } from "wouter";
import { courses } from "@/lib/courses";

interface CourseGridProps {
  onEnrollClick: (courseId: string) => void;
}

export default function CourseGrid({ onEnrollClick }: CourseGridProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-bengali">ঘরে বসেই ক্যারিয়ার তৈরির সহজ সমাধান এখানেই</h2>
          <p className="text-xl text-gray-600 font-bengali">আমাদের কোর্সগুলো থেকে বাছাই করুন আপনার পছন্দের স্কিল</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div 
                className="cursor-pointer"
                onClick={() => onEnrollClick(course.id)}
              >
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform" 
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    {course.isLive && (
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">LIVE</span>
                    )}
                    <span className="text-gray-500 text-sm font-bengali">{course.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 font-bengali">{course.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">
                      ৳ {course.price}
                      {course.price > 750 && <span className="text-sm font-bengali"> প্রতি মাস</span>}
                    </span>
                    <span className="text-purple-600 font-semibold font-bengali">বিস্তারিত দেখুন</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
