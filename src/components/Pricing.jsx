import { Check } from 'lucide-react';
import { PRICING_PLANS, SYSTEM_REQUIREMENTS, PRICING_TEXT } from '../constants';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">
            {PRICING_TEXT.subtitle}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {PRICING_TEXT.title}
          </h3>
          <p className="text-slate-300 text-lg">
            {PRICING_TEXT.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto mb-20">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-3xl border ${plan.recommended ? "border-brand-500 bg-slate-800/80 shadow-2xl shadow-brand-900/50" : "border-slate-700 bg-slate-800/40"} backdrop-blur-sm w-full lg:w-1/3 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/60`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-500 to-cyan-500 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                  {PRICING_TEXT.mostPopular}
                </div>
              )}
              
              <div className="mb-8 border-b border-slate-700/50 pb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-bold text-white">{plan.name}</h4>
                  {plan.discount && (
                    <span className="px-2.5 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-brand-500/20 shadow-sm">
                      {plan.discount}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  {plan.originalPrice && (
                    <span className="text-slate-500 text-lg line-through decoration-slate-600 decoration-1 mr-1">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{plan.price}</span>
                  <span className="text-slate-400 text-sm font-medium ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 rounded-full p-0.5 bg-brand-500/20 text-brand-400">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-slate-800/40 border border-slate-700 rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm">
          <h4 className="text-lg font-bold mb-6 flex items-center justify-center gap-2 text-white">
            <div className="p-1.5 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 20V4h-9v16z"></path>
                <path d="M4 20V4h5v16z"></path>
              </svg>
            </div>
            {PRICING_TEXT.systemRequirementsTitle}
          </h4>
          <ul className="flex flex-col md:flex-row flex-wrap justify-center items-start md:items-center gap-3 md:gap-8 text-slate-300 text-sm md:text-base">
            {SYSTEM_REQUIREMENTS.map((req, index) => (
              <li key={index} className="flex items-center gap-2.5 text-left shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0"></div>
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
