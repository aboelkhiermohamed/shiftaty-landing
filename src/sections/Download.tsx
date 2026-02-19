import { useEffect, useRef } from 'react';
import { Download as DownloadIcon, ExternalLink, MessageCircle, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Download = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="download" className="relative w-full py-20 lg:py-32 bg-clinical-bg overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-[10%] left-[8%] w-24 h-24 border-2 border-clinical-navy opacity-10 rounded-full hidden lg:block" />
      <div className="absolute bottom-[15%] right-[10%] w-20 h-20 border-2 border-clinical-navy opacity-10 rounded-full hidden lg:block" />
      <div className="absolute top-[30%] right-[15%] text-clinical-navy opacity-20 text-2xl">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="bg-white border-[3px] border-clinical-navy rounded-[32px] p-8 lg:p-12 shadow-card opacity-0"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Content */}
            <div ref={contentRef} className="w-full lg:w-1/2 text-center lg:text-right opacity-0">
              <span className="inline-block pill-green text-sm mb-4 arabic-text">
                حمّل الآن
              </span>
              <h2 className="arabic-text text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-navy mb-6">
                حمّل <span className="text-clinical-green">Shiftaty</span> الآن
              </h2>
              <p className="arabic-text text-lg text-clinical-gray leading-relaxed mb-8">
                التطبيق متاح حاليًا على Android (APK). نسخة iOS قريبًا.
                حمّل التطبيق وابدأ في تنظيم شفتاتك اليوم.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="https://t.me/shiftaty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button className="pill-green text-base px-6 py-6 flex items-center gap-3 hover:scale-105 transition-transform w-full sm:w-auto">
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
                    className="pill-white text-base px-6 py-6 flex items-center gap-3 hover:bg-clinical-bg w-full sm:w-auto"
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
                    className="pill-white text-base px-6 py-6 flex items-center gap-3 hover:bg-clinical-bg w-full sm:w-auto"
                  >
                    <DownloadIcon className="w-5 h-5" />
                    <span className="arabic-text">MediaFire</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>

              {/* Note */}
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-clinical-gray">
                <Smartphone className="w-5 h-5" />
                <span className="arabic-text text-sm">
                  متاح على Android فقط (APK)
                </span>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-[260px] sm:w-[300px]">
                {/* Phone Frame */}
                <div className="relative bg-clinical-navy rounded-[36px] p-2.5 shadow-float">
                  <div className="bg-white rounded-[28px] overflow-hidden">
                    <img
                      src="/screenshots/screenshot1.jpg"
                      alt="Shiftaty App"
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-clinical-navy rounded-b-xl" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-3 -left-3 bg-clinical-green text-white px-4 py-2 rounded-pill text-sm font-bold shadow-float arabic-text animate-float">
                  مجاني!
                </div>

                {/* Decorative Circle */}
                <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 bg-clinical-green opacity-20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
