import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Calendar, Wallet } from 'lucide-react';

const DashboardPreview = () => {
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

  const stats = [
    { icon: Wallet, label: 'الدخل', value: '15,700', color: 'bg-blue-500', suffix: 'EGP' },
    { icon: Calendar, label: 'الشفتات', value: '10', color: 'bg-green-500', suffix: '' },
    { icon: Users, label: 'المرضى', value: '25', color: 'bg-cyan-500', suffix: '' },
    { icon: TrendingUp, label: 'المتوسط', value: '1,570', color: 'bg-orange-500', suffix: 'EGP' },
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />

      <div className="section-container relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-block bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium mb-4 arabic-text">
              لوحة التحكم
            </span>
            <h2 className="arabic-text text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              كل إحصائياتك في <span className="text-gradient">نظرة واحدة</span>
            </h2>
            <p className="arabic-text text-lg text-slate-500 leading-relaxed mb-8">
              تابع دخلك وشفتاتك بسهولة مع لوحة تحكم ذكية تعرض لك كل المعلومات 
              المهمة بشكل واضح ومفصل.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-slate-50 rounded-xl p-4 transition-all duration-500 hover:shadow-md ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className={`w-10 h-10 ${stat.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-3`}>
                    <stat.icon className={`w-5 h-5 ${stat.color.replace('bg-', 'text-')}`} />
                  </div>
                  <p className="text-slate-500 text-sm arabic-text mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900">
                    {stat.value} <span className="text-sm font-normal text-slate-400">{stat.suffix}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup */}
          <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-brand-blue/20 rounded-phone blur-3xl scale-110" />
              
              {/* Phone */}
              <div className="phone-mockup w-[280px] sm:w-[320px]">
                <div className="phone-screen">
                  <img
                    src="/screenshots/screenshot-splash.png"
                    alt="Shiftaty Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="phone-notch" />
              </div>

              {/* Floating Card - Income */}
              <div className="absolute -right-8 top-1/4 glass-card px-4 py-3 rounded-xl shadow-lg hidden lg:block animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs arabic-text">إجمالي الدخل</p>
                    <p className="text-slate-900 font-bold">15,700 EGP</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Shifts */}
              <div className="absolute -left-8 bottom-1/3 glass-card px-4 py-3 rounded-xl shadow-lg hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs arabic-text">الشفتات</p>
                    <p className="text-slate-900 font-bold">10 شفتات</p>
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

export default DashboardPreview;
