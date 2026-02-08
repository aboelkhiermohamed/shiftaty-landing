import { useEffect, useRef } from 'react';
import { Clock, Calculator, Shield } from 'lucide-react';

const WhyShiftaty = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: Clock,
      tag: 'وفر وقت',
      title: 'سجّل الشفتة في ثواني',
      description: 'بدون تعقيد، مجرد لمسات وتم تسجيل الشفتة مع جميع التفاصيل.',
      color: 'bg-blue-50',
    },
    {
      icon: Calculator,
      tag: 'دقّة حسابات',
      title: 'تقارير شهرية واضحة',
      description: 'احسب دخلك بدقة حسب المستشفى والتخصص مع تقارير PDF جاهزة.',
      color: 'bg-green-50',
    },
    {
      icon: Shield,
      tag: 'خصوصية تامة',
      title: 'البيانات على جهازك فقط',
      description: 'ما في سحابة ولا تتبع. خصوصيتك أولوية مطلقة.',
      color: 'bg-purple-50',
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-clinical-bg overflow-hidden">
      {/* Decorative Plus Marks */}
      <div className="absolute top-[15%] left-[10%] text-clinical-navy opacity-20 text-2xl">+</div>
      <div className="absolute top-[25%] right-[15%] text-clinical-navy opacity-20 text-xl">+</div>
      <div className="absolute bottom-[20%] left-[20%] text-clinical-navy opacity-20 text-lg">+</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <h2 className="arabic-text text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-navy mb-6">
            ليه <span className="text-clinical-green">Shiftaty</span>؟
          </h2>
          <p className="arabic-text text-lg text-clinical-gray max-w-2xl mx-auto leading-relaxed">
            كتير من الأطباء بيتعب في تتبع الشفتات على ورق أو تطبيقات معقدة.
            Shiftaty مصمم خصيصًا للكادر الطبي—بسيط، سريع، ويحسبلك دخلك بدقة.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 opacity-0"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="section-card p-6 lg:p-8 hover:shadow-float transition-shadow duration-300 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Tag */}
              <div className="inline-block mb-4">
                <span className="pill-green text-sm py-1 px-4 arabic-text">
                  {card.tag}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <card.icon className="w-7 h-7 text-clinical-navy" />
              </div>

              {/* Content */}
              <h3 className="arabic-text text-xl font-bold text-clinical-navy mb-3">
                {card.title}
              </h3>
              <p className="arabic-text text-clinical-gray leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShiftaty;
