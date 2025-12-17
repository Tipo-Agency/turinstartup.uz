import React from 'react';
import { Section } from './ui/Section';
import { ICONS } from '../constants';
import { useLanguage } from '../LanguageContext';
import { ArrowRight } from 'lucide-react';

export const Directions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="directions" className="bg-gray-50/50">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">{t.directions.title}</h2>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
          {t.directions.subtitle}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.directions.items.map((item, index) => {
          const Icon = ICONS.directions[index];
          return (
            <div key={index} className="group relative bg-white rounded-[2rem] p-1 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="bg-white rounded-[1.8rem] p-7 h-full flex flex-col border border-gray-100 group-hover:border-blue-200 transition-colors duration-300">
                
                <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                        <Icon className="w-7 h-7" />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                        <ArrowRight className="w-5 h-5 text-blue-300" />
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                  {item.desc}
                </p>
                
                {/* mt-auto pushes this section to the bottom */}
                <div className="mt-auto pt-6 border-t border-gray-50">
                  <div className="flex flex-wrap gap-2">
                    {item.examples.map((ex, idx) => (
                      <span key={idx} className="inline-block px-3 py-1.5 bg-gray-50 text-gray-500 text-xs font-semibold rounded-lg border border-gray-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};