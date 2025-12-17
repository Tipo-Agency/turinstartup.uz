import React from 'react';
import { Button } from './ui/Button';
import { useLanguage } from '../LanguageContext';
import { ArrowRight, Cpu, Zap, Rocket, Globe, Database, Cog } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[110vh] flex items-center pt-20 overflow-hidden bg-[#001530]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        
        {/* Perspective Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0">
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-blue-900/40 border border-blue-500/30 backdrop-blur-sm text-blue-200 text-xs sm:text-sm font-semibold mb-8 animate-fade-in-up hover:bg-blue-900/60 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {t.hero.badge}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-50 to-blue-200 drop-shadow-sm">
                Turin Startup
              </span>
              <br />
              <span className="text-blue-500 relative inline-block">
                Accelerator
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-500 opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <Button 
                variant="primary"
                onClick={() => scrollToSection('apply')}
                className="text-lg px-8 py-4 shadow-xl shadow-blue-600/20 hover:shadow-blue-500/40 transform hover:-translate-y-1"
              >
                {t.hero.cta_apply}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm"
                onClick={() => scrollToSection('contact')}
              >
                {t.hero.cta_partner}
              </Button>
            </div>

            {/* Stats or trust markers could go here */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-white/40 grayscale opacity-70">
                {/* Placeholder for partner logos or simple text stats */}
                <div className="text-xs tracking-widest uppercase font-semibold border-t border-white/10 pt-4 w-full">
                  Powered by Turin Polytechnic University
                </div>
            </div>
          </div>

          {/* New "Holographic Ecosystem" Infographic */}
          <div className="lg:w-1/2 relative hidden md:block w-full perspective-1000">
             <div className="relative w-full aspect-square max-w-[600px] mx-auto transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                
                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/10 rounded-full border border-blue-400/30 backdrop-blur-md flex items-center justify-center z-20 shadow-[0_0_60px_rgba(37,99,235,0.3)] animate-pulse-slow">
                   <div className="absolute inset-0 rounded-full border border-blue-300/20 animate-spin-slow-reverse border-dashed"></div>
                   <div className="w-32 h-32 bg-gradient-to-tr from-brand to-blue-500 rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
                      <Rocket className="w-16 h-16 text-white relative z-10" />
                   </div>
                </div>

                {/* Orbiting Planets (Nodes) */}
                {/* Node 1: Tech/CPU */}
                <div className="absolute top-[15%] right-[15%] animate-float-delayed-1 z-30">
                   <div className="bg-[#0a192f] p-4 rounded-2xl border border-blue-500/30 shadow-2xl flex items-center gap-3 backdrop-blur-xl">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Cpu className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <div className="h-1.5 w-12 bg-blue-500/40 rounded mb-1.5"></div>
                        <div className="h-1.5 w-8 bg-blue-500/20 rounded"></div>
                      </div>
                   </div>
                   {/* Connecting Line */}
                   <div className="absolute top-full left-1/2 w-0.5 h-24 bg-gradient-to-b from-blue-500/30 to-transparent -translate-x-1/2 origin-top -rotate-45 transform translate-y-2"></div>
                </div>

                 {/* Node 2: Energy */}
                 <div className="absolute bottom-[20%] left-[10%] animate-float-delayed-2 z-10">
                   <div className="bg-[#0a192f] p-4 rounded-2xl border border-cyan-500/30 shadow-2xl flex items-center gap-3 backdrop-blur-xl">
                      <div className="p-2 bg-cyan-500/20 rounded-lg">
                        <Zap className="w-6 h-6 text-cyan-300" />
                      </div>
                      <div className="flex flex-col gap-1">
                         <div className="text-[10px] text-cyan-200 font-mono uppercase">Energy</div>
                         <div className="h-1 w-12 bg-cyan-500/50 rounded-full">
                            <div className="h-full w-2/3 bg-cyan-400 rounded-full animate-pulse"></div>
                         </div>
                      </div>
                   </div>
                   <div className="absolute bottom-full left-1/2 w-0.5 h-20 bg-gradient-to-t from-cyan-500/30 to-transparent -translate-x-1/2 origin-bottom rotate-45 transform -translate-y-2"></div>
                </div>

                {/* Node 3: Global/Impact */}
                <div className="absolute top-[25%] left-[5%] animate-float-delayed-3 z-20">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg">
                       <Globe className="w-8 h-8 text-purple-300" />
                    </div>
                </div>

                {/* Node 4: Engineering/Gears */}
                <div className="absolute bottom-[15%] right-[5%] animate-float z-20">
                   <div className="bg-[#0a192f] px-5 py-3 rounded-full border border-indigo-500/30 shadow-2xl flex items-center gap-3 backdrop-blur-xl">
                      <Cog className="w-5 h-5 text-indigo-300 animate-spin-slow" />
                      <span className="text-xs text-indigo-100 font-bold tracking-wide">PROTOTYPING</span>
                   </div>
                </div>

                {/* Decorative Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-blue-500/10 rounded-full animate-spin-slow-reverse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-dashed border-white/5 rounded-full"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};