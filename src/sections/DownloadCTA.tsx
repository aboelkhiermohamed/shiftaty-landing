import { useEffect, useRef, useState } from 'react';
import { Download as DownloadIcon, MessageCircle, ExternalLink, Smartphone, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DownloadCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const features = [
    'مجاني 100%',
    'بدون إعلانات',
    'بدون تسجيل',
    'خصوصية تامة',
  ];

  return (
    <section id="download" ref={sectionRef} className="relative w-full py-20 lg:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-brand" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />

      <div className="section-container relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className={`w-full lg:w-1/2 text-center lg:text-right transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 arabic-text backdrop-blur-sm">
              حمّل الآن
            </span>
            <h2 className="arabic-text text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              ابدأ رحلتك مع <span className="text-white">Shiftaty</span>
            </h2>
            <p className="arabic-text text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              حمّل التطبيق الآن وابدأ في تنظيم شفتاتك وحساب دخلك بذكاء.
              متاح على Android (APK) - نسخة iOS قريبًا.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm arabic-text"
                >
                  <Check className="w-4 h-4" />
                  {feature}
                </span>
              ))}
            </div>



            {/* iOS Button */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="/ios-install.html"
                className="inline-flex"
              >
                <Button className="bg-white text-black hover:bg-white/90 text-base px-8 py-6 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.24-.93 3.57-.79 1.52.12 2.65.7 3.4 1.75-2.92 1.6-2.45 6.09.56 7.42-.51 1.4-1.28 2.89-2.61 3.85zM12.03 7.25c-.15 2.23-1.66 4.07-3.74 4.25-.29-2.31 1.5-4.52 3.74-4.25z" />
                  </svg>
                  <span className="arabic-text">تحميل للآيفون (iOS)</span>
                </Button>
              </a>
              <a
                href="https://t.me/shiftaty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button className="bg-white text-brand-blue hover:bg-white/90 text-base px-8 py-6 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <MessageCircle className="w-5 h-5" />
                  <span className="arabic-text">تحميل عبر Telegram</span>
                </Button>
              </a>
              <a
                href="/shiftaty.apk"
                download
                className="inline-flex"
              >
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base px-8 py-6 flex items-center justify-center gap-2"
                >
                  <DownloadIcon className="w-5 h-5" />
                  <span className="arabic-text">رابط مباشر (APK)</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://www.mediafire.com/file/qsqd63y60a3l7ok/shiftaty.apk/file"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base px-8 py-6 flex items-center justify-center gap-2"
                >
                  <DownloadIcon className="w-5 h-5" />
                  <span className="arabic-text">MediaFire</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Platform Note */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-white/70">
              <Smartphone className="w-5 h-5" />
              <span className="arabic-text text-sm">متاح على Android (APK)</span>
            </div>
          </div>

          {/* App Icon Display */}
          <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-white/30 rounded-3xl blur-3xl scale-150" />

              {/* App Icon Card */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/screenshots/screenshot-1.png"
                    alt="Shiftaty App Icon"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* App Name */}
                <div className="text-center mt-6">
                  <h3 className="arabic-text text-2xl font-bold text-white">Shiftaty</h3>
                  <p className="arabic-text text-white/70 text-sm mt-1">شفتاتي</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-brand-green text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg arabic-text animate-pulse">
                مجاني!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default DownloadCTA;
