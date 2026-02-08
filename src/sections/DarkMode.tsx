import { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkMode = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 lg:py-28 bg-navy-900 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px]" />

      <div className="section-container relative">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 arabic-text backdrop-blur-sm">
              وضع ليلي
            </span>
            <h2 className="arabic-text text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              راحة لعينك في <span className="text-gradient">الشفتات الليلية</span>
            </h2>
            <p className="arabic-text text-lg text-slate-300 leading-relaxed mb-8">
              فعّل الوضع الليلي واستمتع بواجهة مريحة للعين أثناء الشفتات الليلية. 
              ألوان داكنة مصممة خصيصًا للاستخدام المطوّل.
            </p>

            {/* Toggle Demo */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 transition-all hover:bg-white/20"
              >
                {isDark ? (
                  <>
                    <Moon className="w-5 h-5 text-brand-blue" />
                    <span className="arabic-text text-white">الوضع الليلي مفعل</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-5 h-5 text-yellow-400" />
                    <span className="arabic-text text-white">الوضع النهاري</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-brand-blue/20 rounded-phone blur-3xl scale-110" />
              
              {/* Phone */}
              <div className="phone-mockup w-[280px] sm:w-[320px]">
                <div className="phone-screen bg-navy-900">
                  <img
                    src="/screenshots/screenshot-2.png"
                    alt="Shiftaty Dark Mode"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="phone-notch" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-4 top-1/3 glass-card-dark px-4 py-3 rounded-xl hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                    <Moon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs arabic-text">Dark Mode</p>
                    <p className="text-white font-bold arabic-text">مفعل</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkMode;
