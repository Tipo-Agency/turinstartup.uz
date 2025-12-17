import React from 'react';
import { Section } from './ui/Section';
import { Quote, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Mission: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Section id="mission" className="bg-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-cyan-50/50 rounded-full blur-3xl"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {t.mission.title}
            </h2>
            <div className="h-1.5 w-24 bg-brand rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            {t.mission.description1}
          </p>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-50 rounded-lg text-brand mt-1">
               <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-lg text-gray-500 leading-relaxed">
              {t.mission.description2}
            </p>
          </div>
        </div>
        
        <div className="relative pt-8 md:pt-0">
          <div className="relative bg-gradient-to-br from-white to-blue-50 p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-blue-100/50">
            {/* Quote Icon Background */}
            <div className="absolute -top-6 -left-6 bg-brand text-white p-4 rounded-2xl shadow-lg transform -rotate-6">
               <Quote className="w-8 h-8" />
            </div>

            <div className="relative z-10 pt-4">
              <p className="text-xl md:text-2xl text-gray-800 italic mb-8 font-medium leading-relaxed font-serif">
                "{t.mission.quote}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-blue-100 pt-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-brand font-bold">
                    UZ
                </div>
                <div>
                    <div className="text-sm text-brand font-bold tracking-widest uppercase mb-0.5">{t.mission.context}</div>
                    <div className="text-xs text-gray-400">Strategic Vision</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative dots grid behind */}
          <div className="absolute -bottom-6 -right-6 -z-10">
             <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                   <circle cx="2" cy="2" r="2" className="text-blue-100" fill="currentColor" />
                </pattern>
                <rect width="100" height="100" fill="url(#dots)" />
             </svg>
          </div>
        </div>
      </div>
    </Section>
  );
};