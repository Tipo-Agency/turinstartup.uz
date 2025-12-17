import React from 'react';
import { Section } from './ui/Section';
import { ICONS } from '../constants';
import { useLanguage } from '../LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export const Benefits: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="benefits" className="bg-[#0b1121] relative overflow-hidden" dark>
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                    {t.benefits.title}
                </h2>
                <p className="text-xl text-blue-200/80 font-light leading-relaxed">
                    {t.benefits.subtitle}
                </p>
            </div>
            {/* Decorative element */}
            <div className="hidden md:block h-px w-32 bg-gradient-to-r from-blue-500 to-transparent mb-8"></div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {t.benefits.items.map((benefit, index) => {
            const Icon = ICONS.benefits[index];
            // Make the first item span 2 cols on large screens to break the grid monotony
            const isFeatured = index === 0; 
            
            return (
              <div 
                key={index} 
                className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300 flex flex-col ${isFeatured ? 'md:col-span-2 md:bg-gradient-to-br md:from-blue-900/40 md:to-white/5' : ''}`}
              >
                 <div className="flex items-start justify-between mb-4">
                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${isFeatured ? 'bg-blue-600 shadow-blue-500/30' : 'bg-gray-800 border border-white/10 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors'}`}>
                        <Icon className="h-6 w-6" aria-hidden="true" />
                     </div>
                     <CheckCircle2 className={`w-5 h-5 ${isFeatured ? 'text-blue-400' : 'text-gray-600 group-hover:text-blue-400'} transition-colors`} />
                 </div>
                 
                 <div className="mt-auto">
                    <h3 className={`font-bold text-white mb-2 ${isFeatured ? 'text-2xl' : 'text-lg'}`}>
                        {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {benefit.desc}
                    </p>
                 </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};