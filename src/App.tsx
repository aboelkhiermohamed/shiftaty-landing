import './App.css';
import { Send, MessageCircle } from 'lucide-react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Features from './sections/Features';
import DashboardPreview from './sections/DashboardPreview';
import DarkMode from './sections/DarkMode';
import PDFReports from './sections/PDFReports';
import DownloadCTA from './sections/DownloadCTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <Stats />

        {/* Features Section */}
        <Features />

        {/* Dashboard Preview */}
        <DashboardPreview />

        {/* Dark Mode Showcase */}
        <DarkMode />

        {/* PDF Reports */}
        <PDFReports />

        {/* Download CTA */}
        <DownloadCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Channel Button */}
        <a
          href="https://t.me/shiftaty"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#2AABEE] p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:rotate-12 border-2 border-[#2AABEE] flex items-center justify-center"
          aria-label="قناة التطبيق تليجرام"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Contact Button */}
        <a
          href="https://t.me/M7MED1573"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2AABEE] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:rotate-12 flex items-center justify-center"
          aria-label="تواصل معنا تليجرام"
        >
          <Send className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default App;
