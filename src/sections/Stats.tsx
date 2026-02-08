import { useEffect, useRef, useState } from 'react';
import { Users, Calendar, Wallet } from 'lucide-react';

const Stats = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: '+',
      label: 'طبيب يستخدمون التطبيق',
      color: 'bg-brand-blue',
    },
    {
      icon: Calendar,
      value: 150000,
      suffix: '+',
      label: 'شفتة مسجلة',
      color: 'bg-brand-green',
    },
    {
      icon: Wallet,
      value: 50,
      suffix: 'M+',
      label: 'جنيه تم حسابه',
      color: 'bg-brand-cyan',
    },
  ];

  const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    const formatNumber = (num: number) => {
      if (num >= 1000000) return (num / 1000000).toFixed(0);
      if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
      return num.toString();
    };

    return (
      <span className="text-4xl sm:text-5xl font-bold text-slate-900">
        {formatNumber(count)}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="relative w-full py-16 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl bg-slate-50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 ${stat.color} bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="arabic-text text-slate-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
