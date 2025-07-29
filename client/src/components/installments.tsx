import { Link } from "wouter";

export default function Installments() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-bengali">
              বাংলাদেশের এই প্রথম কিস্তিতে পেমেন্ট করার সুব্যবস্থা ! ! !
            </h2>
            <p className="text-lg text-gray-700 mb-8 font-bengali leading-relaxed">
              স্কিল শিখে কাজ করতে চাচ্ছেন কিন্তু ফি পরিশোধ করতে পারছেন না? ২মাস কিংবা ৩মাস মেয়াদি যেকোনো কোর্স এ পাচ্ছেন কিস্তিতে ফি পরিশোধ এর সুব্যবস্থা ! আগে আসলে আগে পাবেন ভিত্তিতে সিট কিন্তু সীমিত ! !
            </p>
            <Link href="/courses">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors font-bengali">
                কোর্স সমূহ
              </button>
            </Link>
          </div>
          <div className="text-center">
            <img 
              src="https://skill-shikhun.netlify.app/static/media/Installments.a2c60221b25b56b21231.png" 
              alt="Installments Payment" 
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}