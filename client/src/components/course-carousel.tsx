import { useEffect, useState } from "react";
import { Link } from "wouter";
import { courses } from "@/lib/courses";

export default function CourseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % courses.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 font-bengali">লাইভ কোর্সের কিছু ভিডিও দেখুন ফ্রি!</h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out space-x-4"
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
          >
            {[...courses, ...courses].map((course, index) => (
              <div key={`${course.id}-${index}`} className="flex-none w-48 md:w-64">
                <Link href={`/${course.slug}`} className="block group">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-32 md:h-40 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow" 
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
