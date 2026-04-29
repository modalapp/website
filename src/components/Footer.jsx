import { Phone, MapPin } from 'lucide-react';
import { APP_NAME, APP_DESC, CONTACT_PHONE, YOUTUBE_LINK, Youtube, FOOTER_TEXT } from '../constants';

const Footer = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const bodyTop = document.body.getBoundingClientRect().top;
      const targetTop = targetElement.getBoundingClientRect().top - bodyTop - 100;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">{APP_NAME}</h3>
            <p className="mb-6 max-w-md leading-relaxed">
              {APP_DESC} designed to simplify your daily operations, fee collections and student communications.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">{FOOTER_TEXT.contactTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-500" />
                <span>{CONTACT_PHONE}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-500" />
                <span>{FOOTER_TEXT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Youtube size={16} className="text-red-500" />
                <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">
                  {FOOTER_TEXT.youtubeLinkText}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">{FOOTER_TEXT.linksTitle}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="hover:text-brand-400 transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')} className="hover:text-brand-400 transition-colors cursor-pointer">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleSmoothScroll(e, '#pricing')} className="hover:text-brand-400 transition-colors cursor-pointer">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 text-center text-sm">
          <p>{FOOTER_TEXT.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
