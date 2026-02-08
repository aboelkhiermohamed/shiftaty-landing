import { useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: 'د. سارة',
      role: 'طبيبة مقيمة',
      quote: 'أخيرًا تطبيق يفهم شفتات المستشفيات. لا معادلات Excel ولا ورق ضايع. Shiftaty وفّر لي وقت كبير كل شهر.',
      avatar: 'S',
      color: 'bg-rose-500',
      rating: 5,
    },
    {
      name: 'د. خالد',
      role: 'أخصائي جراحة',
      quote: 'التقارير PDF توفر وقتي كل شهر مع المحاسب. التطبيق سهل وبسيط وأنصح فيه بشدة لكل الزملاء.',
      avatar: 'K',
      color: 'bg-blue-500',
      rating: 5,
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-clinical-bg overflow-hidden">
      {/* Decorative Pills */}
      <div className="absolute top-[15%] left-[5%] pill-white rotate-[-8deg] text-xs hidden lg:block opacity-60">
        سهل الاستخدام
      </div>
      <div className="absolute bottom-[20%] right-[8%] pill-white rotate-[6deg] text-xs hidden lg:block opacity-60">
        موثوق 100%
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <span className="inline-block pill-green text-sm mb-4 arabic-text">
            آراء المستخدمين
          </span>
          <h2 className="arabic-text text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-navy mb-6">
            شوف <span className="text-clinical-green">الأطباء</span> يقولوا إيه
          </h2>
          <p className="arabic-text text-lg text-clinical-gray max-w-2xl mx-auto">
            آلاف الأطباء بيستخدموا Shiftaty يوميًا لإدارة شفتاتهم.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 opacity-0"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="section-card p-6 lg:p-8 relative hover:shadow-float transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-clinical-green bg-opacity-10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-clinical-green" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="arabic-text text-lg text-clinical-navy leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 ${testimonial.color} rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="arabic-text font-bold text-clinical-navy">
                    {testimonial.name}
                  </h4>
                  <p className="arabic-text text-sm text-clinical-gray">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
