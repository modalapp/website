import { Download, FileCog } from 'lucide-react';
import { DOWNLOAD_LINK, VC_REDIST_LINK, HERO_TEXT } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-snug">
          {HERO_TEXT.headingPart1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">{HERO_TEXT.headingHighlight}</span>{HERO_TEXT.headingPart2}
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          {HERO_TEXT.subheading}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href={DOWNLOAD_LINK} className="group relative px-8 py-4 bg-brand-600 text-white font-bold rounded-full text-lg shadow-lg hover:bg-brand-700 hover:shadow-brand-500/30 transition-all duration-300 flex items-center gap-3 cursor-pointer min-w-[220px] justify-center">
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            {HERO_TEXT.btn1}
          </a>
          <a href={VC_REDIST_LINK} className="group relative px-8 py-4 bg-white text-slate-700 font-bold rounded-full text-lg shadow-md border border-slate-200 hover:bg-slate-50 hover:text-brand-600 hover:border-brand-200 transition-all duration-300 flex items-center gap-3 cursor-pointer min-w-[220px] justify-center">
            <FileCog className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            {HERO_TEXT.btn2}
          </a>
        </div>

        <div className="relative max-w-5xl mx-auto mt-12 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden bg-slate-900">
          <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="pt-8 pb-0 bg-slate-900">
            <img src="/dashboard.png" alt={HERO_TEXT.dashboardAlt} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
