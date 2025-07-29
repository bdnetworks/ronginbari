import { Link } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <h1 className="text-2xl font-bold text-purple-600 cursor-pointer">স্কিল শিখুন</h1>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-bengali">হোম</Link>
              <Link href="/courses" className="text-gray-700 hover:text-purple-600 transition-colors font-bengali">কোর্স সমূহ</Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-bengali">আমাদের সম্পর্কে</Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-bengali">যোগাযোগ</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="tel:09613823645" 
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">09613823645</span>
            </a>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-purple-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <Link 
                href="/" 
                className="block text-gray-700 hover:text-purple-600 py-2 font-bengali"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                হোম
              </Link>
              <Link 
                href="/courses" 
                className="block text-gray-700 hover:text-purple-600 py-2 font-bengali"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                কোর্স সমূহ
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-700 hover:text-purple-600 py-2 font-bengali"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                আমাদের সম্পর্কে
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-700 hover:text-purple-600 py-2 font-bengali"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                যোগাযোগ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
