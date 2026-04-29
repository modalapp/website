import { FEATURES, FEATURES_TEXT } from '../constants';

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">
            {FEATURES_TEXT.subtitle}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {FEATURES_TEXT.title}
          </h3>
          <p className="text-slate-600 text-lg">
            {FEATURES_TEXT.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-sm font-medium text-brand-600 mb-3 font-mono opacity-75">{feature.titleHindi}</p>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
