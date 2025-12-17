
import React from 'react';
import { Section } from './ui/Section';
import { PROJECTS } from '../constants';
import { useLanguage } from '../LanguageContext';
import { ExternalLink } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="portfolio" className="bg-[#0b1121] relative overflow-hidden" dark>
       {/* Background Effects */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t.portfolio.title}</h2>
        <p className="text-xl text-blue-200/60 max-w-2xl mx-auto font-light">
          {t.portfolio.subtitle}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {PROJECTS.map((project, index) => {
          const FallbackIcon = project.fallbackIcon;
          
          return (
            <a 
              key={index} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative h-64 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/0 via-blue-600/0 to-blue-400/0 group-hover:from-blue-600/10 group-hover:to-blue-400/10 transition-all duration-500"></div>

              {/* Icon Top Right */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
                    <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Logo / Content */}
              <div className="relative z-10 p-8 w-full flex flex-col items-center">
                {project.logoUrl ? (
                   // Logo Image
                   <div className="w-full h-24 flex items-center justify-center">
                      <img 
                        src={project.logoUrl} 
                        alt={project.name} 
                        className="max-h-full max-w-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 filter" 
                      />
                   </div>
                ) : (
                   // Fallback Typography
                   <div className="flex flex-col items-center gap-4">
                      {FallbackIcon && (
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:border-blue-500/30 transition-all duration-500 text-gray-400">
                              <FallbackIcon className="w-10 h-10" />
                          </div>
                      )}
                      <span className="text-2xl font-bold text-white tracking-wide group-hover:text-blue-200 transition-colors">
                        {project.name}
                      </span>
                   </div>
                )}
              </div>
              
              {/* Text Link at Bottom (Optional, appears on hover) */}
              <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-xs font-semibold uppercase tracking-widest text-blue-300">
                {t.portfolio.visit}
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
};
