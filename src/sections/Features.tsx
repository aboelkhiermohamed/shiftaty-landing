import { useEffect, useRef, useState } from 'react';
import { Calendar, Calculator, FileText, Moon, Shield, TrendingUp } from 'lucide-react';

const Features = () => {
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
    {
      icon: Calendar,
      title: 'إدارة الشفتات',
      description: 'سجّل شفتاتك بسهولة مع تحديد المستشفى، التاريخ، وعدد الحالات.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: Calculator,
      title: 'حساب الدخل',
      description: 'احسب دخلك تلقائيًا حسب نموذج الدفع لكل مستشفى.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      icon: FileText,
      title: 'تقارير PDF',
      description: 'صدر تقارير شهرية احترافية جاهزة للمشاركة أو الطباعة.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      icon: Moon,
      title: 'وضع ليلي',
      description: 'واجهة مريحة للعين مع Dark Mode للشفتات الليلية.',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
    },
    {
      icon: Shield,
      title: 'خصوصية تامة',
      description: 'البيانات على جهازك فقط. لا سحابة، لا تتبع، 100% خاص.',
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-600',
    },
    {
      icon: TrendingUp,
      title: 'إحصائيات ذكية',
      description: 'تابع أدائك مع رسوم بيانية وتحليلات شهرية مفصلة.',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600',
    },
  ];

  return (
    <section id="features" ref={sectionRef} className="relative w-full py-20 lg:py-28 bg-slate-50">
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-4 arabic-text">
            المميزات
          </span>
          <h2 className="arabic-text text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            كل اللي تحتاجه في <span className="text-gradient">تطبيق واحد</span>
          </h2>
          <p className="arabic-text text-lg text-slate-500 max-w-2xl mx-auto">
            Shiftaty يوفر لك كل الأدوات اللي تحتاجها لإدارة شفتاتك بكفاءة
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.textColor}`} />
                <div className={`absolute w-7 h-7 bg-gradient-to-br ${feature.color} opacity-20 rounded-lg`} />
              </div>

              {/* Content */}
              <h3 className="arabic-text text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="arabic-text text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
