import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const screenshots = [
    { src: '/screenshots/screenshot1.jpg', alt: 'Shiftaty Logo' },
    { src: '/screenshots/screenshot2.jpg', alt: 'Settings & Export' },
    { src: '/screenshots/screenshot3.jpg', alt: 'Add Hospital' },
    { src: '/screenshots/screenshot4.jpg', alt: 'Add Shift Form' },
    { src: '/screenshots/screenshot5.jpg', alt: 'Shift Details' },
    { src: '/screenshots/screenshot6.jpg', alt: 'Dashboard' },
    { src: '/screenshots/screenshot7.jpg', alt: 'Dark Mode Settings' },
    { src: '/screenshots/screenshot8.jpg', alt: 'Hospitals List' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-clinical-bg overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-[10%] left-[5%] w-20 h-20 border-2 border-clinical-navy opacity-10 rounded-full hidden lg:block" />
      <div className="absolute bottom-[15%] right-[8%] w-16 h-16 border-2 border-clinical-navy opacity-10 rounded-full hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <span className="inline-block pill-green text-sm mb-4 arabic-text">
            شوف التطبيق
          </span>
          <h2 className="arabic-text text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-navy mb-6">
            لقطات من <span className="text-clinical-green">التطبيق</span>
          </h2>
          <p className="arabic-text text-lg text-clinical-gray max-w-2xl mx-auto">
            تصفح واجهة التطبيق وشوف كيف يساعدك في إدارة شفتاتك.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Display */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-4xl">
              {/* Phone Frame */}
              <div className="relative bg-clinical-navy rounded-[40px] p-3 sm:p-4 shadow-float mx-auto w-fit">
                <div className="bg-white rounded-[32px] overflow-hidden w-[280px] sm:w-[320px] md:w-[380px]">
                  <img
                    src={screenshots[currentIndex].src}
                    alt={screenshots[currentIndex].alt}
                    className="w-full h-auto transition-opacity duration-300"
                  />
                </div>
                {/* Notch */}
                <div className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-clinical-navy rounded-b-2xl" />
              </div>

              {/* Screenshot Counter */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <span className="arabic-text text-clinical-gray text-sm">
                  {currentIndex + 1} / {screenshots.length}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-clinical-navy bg-white hover:bg-clinical-bg transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-clinical-navy" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="outline"
            className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-clinical-navy bg-white hover:bg-clinical-bg transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-clinical-navy" />
          </Button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 mt-16 overflow-x-auto pb-4 px-4">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-clinical-green ring-2 ring-clinical-green ring-opacity-30'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
