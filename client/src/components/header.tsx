import { useState } from "react";
import { X } from "lucide-react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full skill-gradient p-1 relative">
      <div className="container mx-auto text-center relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-1 text-white hover:text-gray-200 z-10"
          aria-label="Close advertisement"
        >
          <X className="w-4 h-4" />
        </button>
        <a href="https://skill999.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://skill-shikhun.netlify.app/static/media/skill999.59ef7ce4173034a1f289.png" 
            alt="Buy Now - Skill999 Advertisement" 
            className="mx-auto h-12 md:h-16 object-contain hidden md:block hover:opacity-90 transition-opacity cursor-pointer" 
          />
          <img 
            src="https://skill-shikhun.netlify.app/static/media/skill999_sm.7e94708304c503e59e1f.png" 
            alt="Buy Now - Skill999 Advertisement Mobile" 
            className="mx-auto h-8 md:h-10 object-contain md:hidden hover:opacity-90 transition-opacity cursor-pointer" 
          />
        </a>
      </div>
    </div>
  );
}
