import React from 'react';
import { Section } from './ui/Section';
import { useLanguage } from '../LanguageContext';

export const Timeline: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="timeline" className="bg-white">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.timeline.title}</h2>
        <p className="text-xl text-gray-500">{t.timeline.subtitle}</p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-100 via-brand to-blue-100"></div>

        <div className="space-y-12">
          {t.timeline.steps.map((step, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Center Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-brand border-4 border-white shadow-lg flex items-center justify-center z-10 ring-4 ring-blue-50">
              </div>

              {/* Content Box */}
              <div className="w-full pl-12 md:pl-0 md:w-5/12">
                <div className={`p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 group-hover:bg-blue-50"></div>
                  <span className="relative z-10 inline-block text-5xl font-bold text-gray-100 mb-4 group-hover:text-blue-100 transition-colors">
                    0{index + 1}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
