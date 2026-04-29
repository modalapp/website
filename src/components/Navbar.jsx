import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, DEMO_VIDEO_LINK, CONTACT_PHONE, Youtube, NAVBAR_TEXT } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const bodyTop = document.body.getBoundingClientRect().top;
      const targetTop = targetElement.getBoundingClientRect().top - bodyTop - 100;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="block group">
            <img src="/logo.png" alt={NAVBAR_TEXT.logoAlt} className="w-10 h-10 drop-shadow-md transition-transform group-hover:scale-105 object-contain" />
          </a>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-800'}`}>
            MODAL
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleSmoothScroll(e, link.href)} 
              className={`text-sm font-semibold hover:text-brand-600 transition-colors cursor-pointer ${isScrolled ? 'text-slate-600' : 'text-slate-700'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={DEMO_VIDEO_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`flex items-center gap-2 text-sm font-semibold hover:text-red-600 transition-colors cursor-pointer ${isScrolled ? 'text-slate-600' : 'text-slate-700'}`}
          >
            <Youtube size={20} className="text-red-600" />
            {NAVBAR_TEXT.demoBtn}
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, '#contact')} 
            className={`flex items-center gap-2 text-sm font-semibold hover:text-brand-600 transition-colors cursor-pointer ${isScrolled ? 'text-slate-600' : 'text-slate-700'}`}
          >
            <Phone size={18} className="text-brand-600" />
            {CONTACT_PHONE}
          </a>
        </div>

        <button 
          className="md:hidden text-slate-800" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleSmoothScroll(e, link.href)} 
              className="text-slate-800 font-medium py-2 border-b border-slate-50"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={DEMO_VIDEO_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-slate-800 font-medium py-2 border-b border-slate-50"
          >
            <Youtube size={18} className="text-red-600" />
            {NAVBAR_TEXT.demoBtn}
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, '#contact')} 
            className="flex items-center gap-2 text-slate-800 font-medium py-2 border-b border-slate-50"
          >
            <Phone size={18} className="text-brand-600" />
            {CONTACT_PHONE}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
