import { useEffect, useRef } from 'react';
import { Heart, RefreshCw, Headphones } from 'lucide-react';

const Trust = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const trustPoints = [
    {
      icon: Heart,
      title: 'صُنع بعناية',
      description: 'تطبيق مصمم من طبيب للأطباء، يفهم احتياجات الكادر الطبي.',
    },
    {
      icon: RefreshCw,
      title: 'تحديثات مستمرة',
      description: 'نستمع لملاحظاتكم ونطور التطبيق باستمرار ليصبح أفضل.',
    },
    {
      icon: Headphones,
      title: 'دعم فني',
      description: 'فريق دعم جاهز يساعدك في أي استفسار أو مشكلة.',
    },
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 bg-clinical-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="text-center opacity-0"
        >
          {/* Main Trust Message */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-clinical-green bg-opacity-10 rounded-full mb-6">
              <Heart className="w-8 h-8 text-clinical-green" />
            </div>
            <h3 className="arabic-text text-2xl sm:text-3xl font-bold text-clinical-navy mb-4">
              صُنع بعناية <span className="text-clinical-green">للأطباء</span>
            </h3>
            <p className="arabic-text text-lg text-clinical-gray max-w-2xl mx-auto">
              Shiftaty مش مجرد تطبيق، هو أداة صُنعت بفهم عميق لتحديات الكادر الطبي.
              بنستمع لملاحظاتكم وبنطور التطبيق باستمرار.
            </p>
          </div>

          {/* Trust Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-12 h-12 bg-white border-2 border-clinical-navy rounded-xl flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-clinical-navy" />
                </div>
                <h4 className="arabic-text font-bold text-clinical-navy mb-2">
                  {point.title}
                </h4>
                <p className="arabic-text text-sm text-clinical-gray">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
