import { MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'المميزات', href: '#features' },
    { label: 'الخصوصية', href: '#download' },
    { label: 'التحميل', href: '#download' },
  ];

  return (
    <footer className="relative w-full bg-navy-900 text-white overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-brand" />

      <div className="section-container py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <img src="/logo.png" alt="Shiftaty Logo" className="w-12 h-12 rounded-xl object-contain" />
              <div>
                <h3 className="arabic-text text-2xl font-bold">Shiftaty</h3>
                <p className="arabic-text text-slate-400 text-sm">شفتاتي</p>
              </div>
            </div>
            <p className="arabic-text text-slate-400 text-sm max-w-xs">
              نظّم شفتاتك… واحسب دخلك بذكاء
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="arabic-text text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://t.me/shiftaty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-brand-blue transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>القناة</span>
            </a>
            <a
              href="https://t.me/M7MED1573"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-brand-blue transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>تواصل</span>
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-slate-400 text-sm">
          <span>© {currentYear} Shiftaty.</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-1 arabic-text">
            صُنع بـ <Heart className="w-4 h-4 text-red-500 fill-red-500" /> للكادر الطبي
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
