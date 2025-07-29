import { useEffect, useRef, useState } from "react";

export default function Statistics() {
  const [visitors, setVisitors] = useState(0);
  const [freeClasses, setFreeClasses] = useState(0);
  const [totalLearners, setTotalLearners] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter(setVisitors, 10324);
          animateCounter(setFreeClasses, 0);
          animateCounter(setTotalLearners, 0);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = (setter: (value: number) => void, target: number) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setter(Math.floor(current));
    }, 20);
  };

  return (
    <section ref={sectionRef} className="py-16 skill-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold mb-2">{visitors.toLocaleString()}</div>
            <div className="text-xl font-bengali">ওয়েবসাইট ভিজিট করেছেন</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">{freeClasses.toLocaleString()}</div>
            <div className="text-xl font-bengali">ফ্রি ক্লাস করেছেন</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">{totalLearners.toLocaleString()}</div>
            <div className="text-xl font-bengali">সর্বমোট লার্নার্স</div>
          </div>
        </div>
      </div>
    </section>
  );
}
