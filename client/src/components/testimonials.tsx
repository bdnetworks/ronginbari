import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/courses";
import { Link } from "wouter";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 font-bengali">টেস্টিমোনিয়াল</h2>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-none w-full md:w-1/3 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      {testimonial.avatar ? (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full mr-4" 
                        />
                      ) : (
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-purple-600 font-bold text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <Link href={`/${testimonial.courseId}`} className="text-purple-600 text-sm font-bengali">
                          {testimonial.courseName}
                        </Link>
                      </div>
                    </div>
                    <p className="text-gray-600 font-bengali">{testimonial.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
