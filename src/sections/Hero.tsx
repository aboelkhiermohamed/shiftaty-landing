import { useEffect, useRef } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial animation
    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.classList.add('animate-in');
      }
      if (phoneRef.current) {
        phoneRef.current.classList.add('animate-in');
        phoneRef.current.style.animationDelay = '0.2s';
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-dark"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-[100px]" />

      {/* Main Content */}
      <div className="relative z-10 w-full section-container py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <div ref={contentRef} className="w-full lg:w-1/2 text-center lg:text-right opacity-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span className="arabic-text text-sm text-white/80">مجاني 100% - بدون إعلانات</span>
            </div>

            {/* Headline */}
            <h1 className="arabic-text text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              نظّم شفتاتك…
              <br />
              <span className="text-gradient">واحسب دخلك بذكاء</span>
            </h1>

            {/* Subheadline */}
            <p className="arabic-text text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              تطبيق Shiftaty يساعد الأطباء والكوادر الطبية على تسجيل الشفتات
              وحساب الدخل تلقائيًا—كل البيانات على جهازك وتحت سيطرتك.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToDownload}
                className="btn-gradient text-base px-8 py-6 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span className="arabic-text">حمّل التطبيق</span>
              </Button>
              <Button
                onClick={scrollToFeatures}
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-base px-8 py-6 flex items-center justify-center gap-2"
              >
                <span className="arabic-text">اكتشف المميزات</span>
                <ChevronDown className="w-5 h-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center lg:items-end gap-3 mt-8 lg:mt-6">
              <p className="arabic-text text-sm text-slate-400">تواصل معنا</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://t.me/shiftaty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-500/10 hover:bg-blue-500/20 flex items-center justify-center transition-all hover:scale-110 group"
                  title="Telegram Channel"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-400 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37055 0 0 5.37055 0 12C0 18.6295 5.37055 24 12 24C18.6295 24 24 18.6295 24 12C24 5.37055 18.6295 0 12 0ZM17.2023 7.82143L15.4228 16.4893C15.2868 17.0945 14.9288 17.2483 14.4283 16.9635L11.7203 14.9453L10.4218 16.2163C10.2788 16.361 10.158 16.4805 9.87328 16.4805L10.0638 13.6763L15.0933 9.07125C15.3123 8.874 15.0423 8.7615 14.7438 8.964L8.52628 12.9158L5.85028 12.0675C5.27128 11.8853 5.26003 11.4795 5.97028 11.2005L16.4275 7.11225C16.9143 6.936 17.3395 7.23 17.2023 7.82143Z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/M7MED1573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-sky-500/10 hover:bg-sky-500/20 flex items-center justify-center transition-all hover:scale-110 group"
                  title="Personal Contact"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-sky-400 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div
            ref={phoneRef}
            className="w-full lg:w-1/2 flex justify-center opacity-0"
          >
            <div className="relative animate-float">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-brand rounded-phone blur-3xl opacity-30 scale-110" />

              {/* Phone Frame */}
              <div className="phone-mockup w-[280px] sm:w-[320px]">
                <div className="phone-screen">
                  <img
                    src="/screenshots/screenshot-splash.jpg"
                    alt="Shiftaty App"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="phone-notch" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -right-4 top-1/4 glass-card-dark px-4 py-3 rounded-xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center">
                    <span className="text-brand-green text-lg font-bold">EGP</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs arabic-text">دخل الشهر</p>
                    <p className="text-white font-bold">15,700</p>
                  </div>
                </div>
              </div>

              {/* Floating Shifts Card */}
              <div className="absolute -left-4 bottom-1/3 glass-card-dark px-4 py-3 rounded-xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                    <span className="text-brand-blue text-lg font-bold">10</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs arabic-text">شفتات</p>
                    <p className="text-white font-bold arabic-text">هذا الشهر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;
