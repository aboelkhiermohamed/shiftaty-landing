import { useEffect, useRef } from 'react';
import { Download, Calendar, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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
    if (stepsRef.current) observer.observe(stepsRef.current);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      icon: Download,
      title: 'ثبّت التطبيق',
      description: 'حمّل APK من Telegram أو الرابط المباشر. التثبيت سهل وما ياخذ دقيقة.',
      color: 'bg-blue-500',
    },
    {
      number: '02',
      icon: Calendar,
      title: 'سجّل شفتاتك',
      description: 'اختار التاريخ والمستشفى والوقت. أضف التفاصيل وخلّي التطبيق يحسب لك.',
      color: 'bg-green-500',
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'تابع دخلك',
      description: 'شوف ملخّصك اليومي والشهري وصدر PDF لما تحب. سيطر على دخلك بسهولة.',
      color: 'bg-purple-500',
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-clinical-bg overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-[20%] right-[10%] text-clinical-navy opacity-15 text-3xl">+</div>
      <div className="absolute bottom-[25%] left-[8%] text-clinical-navy opacity-15 text-2xl">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <span className="inline-block pill-green text-sm mb-4 arabic-text">
            البداية السريعة
          </span>
          <h2 className="arabic-text text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-navy mb-6">
            ابدأ في <span className="text-clinical-green">3 خطوات</span>
          </h2>
          <p className="arabic-text text-lg text-clinical-gray max-w-2xl mx-auto">
            ما تحتاج خبرة تقنية. مجرد 3 خطوات بسيطة وبتكون جاهز.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 opacity-0"
        >
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-clinical-green to-transparent" />
              )}

              <div className="section-card p-8 text-center hover:shadow-float transition-shadow duration-300 h-full">
                {/* Number Circle */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full border-3 border-clinical-navy bg-white flex items-center justify-center">
                    <span className="arabic-text text-2xl font-bold text-clinical-navy">
                      {step.number}
                    </span>
                  </div>
                  {/* Icon Badge */}
                  <div className={`absolute -bottom-2 -right-2 w-10 h-10 ${step.color} rounded-full flex items-center justify-center shadow-md`}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="arabic-text text-xl font-bold text-clinical-navy mb-3">
                  {step.title}
                </h3>
                <p className="arabic-text text-clinical-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
