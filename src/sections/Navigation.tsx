import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'المميزات', id: 'features' },
    { label: 'التحميل', id: 'download' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2"
            >
              <img src="/logo.png" alt="Shiftaty Logo" className="w-10 h-10 rounded-xl object-contain" />
              <span className={`arabic-text font-bold text-lg transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                Shiftaty
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`arabic-text text-sm font-medium transition-colors hover:text-brand-blue ${isScrolled ? 'text-slate-700' : 'text-white/80'
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('download')}
                className="btn-gradient text-sm py-2 px-5 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span className="arabic-text">حمّل</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'hover:bg-slate-100' : 'hover:bg-white/10'
                }`}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-navy-900 transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="arabic-text text-2xl font-medium text-white hover:text-brand-blue transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('download')}
            className="btn-gradient text-lg py-4 px-8 flex items-center gap-2 mt-4"
          >
            <Download className="w-5 h-5" />
            <span className="arabic-text">حمّل الآن</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
