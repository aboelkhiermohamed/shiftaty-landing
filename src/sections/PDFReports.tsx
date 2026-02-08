import { useEffect, useRef, useState } from 'react';
import { FileText, Download, Share2, Check } from 'lucide-react';

const PDFReports = () => {
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
    'تقرير شهري كامل',
    'تفصيل حسب المستشفى',
    'إجمالي الدخل والشفتات',
    'جاهز للمشاركة أو الطباعة',
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-20 lg:py-28 bg-slate-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-50/50 to-transparent" />

      <div className="section-container relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-block bg-purple-500/10 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4 arabic-text">
              تقارير PDF
            </span>
            <h2 className="arabic-text text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              صدر تقاريرك <span className="text-gradient">بضغطة زر</span>
            </h2>
            <p className="arabic-text text-lg text-slate-500 leading-relaxed mb-8">
              احصل على تقارير شهرية احترافية بصيغة PDF تفصل لك كل شفتاتك والدخل 
              حسب المستشفى. جاهزة للمشاركة مع المحاسب أو حفظها في ملفاتك.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="arabic-text text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition-colors">
                <FileText className="w-5 h-5" />
                <span className="arabic-text">شوف نموذج التقرير</span>
              </button>
            </div>
          </div>

          {/* PDF Preview */}
          <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-3xl scale-110" />
              
              {/* PDF Preview Card */}
              <div className="relative bg-white rounded-2xl shadow-float p-6 w-[300px] sm:w-[360px]">
                {/* PDF Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold">Shiftaty Report</p>
                      <p className="text-slate-400 text-sm">Monthly Report</p>
                    </div>
                  </div>
                  <span className="text-purple-500 text-sm font-medium">PDF</span>
                </div>

                {/* PDF Preview Image */}
                <div className="rounded-xl overflow-hidden border border-slate-100">
                  <img
                    src="/screenshots/screenshot-7.png"
                    alt="PDF Report Preview"
                    className="w-full h-auto"
                  />
                </div>

                {/* PDF Actions */}
                <div className="flex gap-3 mt-6">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-3 rounded-xl hover:bg-slate-200 transition-colors">
                    <Download className="w-4 h-4" />
                    <span className="arabic-text text-sm">تحميل</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-3 rounded-xl hover:bg-slate-200 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="arabic-text text-sm">مشاركة</span>
                  </button>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-4 -top-4 bg-brand-green text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg arabic-text">
                جاهز للطباعة
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDFReports;
