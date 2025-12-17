import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Facebook, Instagram, Send, Linkedin, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Send, href: "#", label: "Telegram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const links = [
    { label: t.nav.mission, href: "#mission" },
    { label: t.nav.directions, href: "#directions" },
    { label: t.nav.benefits, href: "#benefits" },
    { label: t.nav.timeline, href: "#timeline" },
    { label: t.nav.apply, href: "#apply" },
  ];

  return (
    <footer className="bg-[#002255] text-white pt-16 pb-8 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               {/* Using brightness-0 invert to make the blue logo white */}
               <img 
                 src={CONTACT_INFO.logoUrl} 
                 alt="Turin Startup Accelerator" 
                 className="h-10 w-auto brightness-0 invert opacity-90"
               />
               <span className="font-bold text-xl tracking-tight">TSA</span>
            </div>
            <p className="text-blue-200/80 text-sm leading-relaxed">
              {t.footer.aboutDesc}
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center hover:bg-brand hover:text-white transition-all text-blue-300 border border-white/5"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t.footer.links}</h4>
            <ul className="space-y-3">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="text-blue-200/70 hover:text-white hover:translate-x-1 transition-all inline-block text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t.footer.contacts}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-blue-200/70">
                <MapPin className="w-5 h-5 text-brand-light mt-0.5 shrink-0" />
                <span>{t.form.contactLabels.university}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-200/70">
                <Phone className="w-5 h-5 text-brand-light shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-200/70">
                <Mail className="w-5 h-5 text-brand-light shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

           {/* Column 4: University Link */}
           <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Founder</h4>
              <a 
                href="https://turin.uz" 
                target="_blank" 
                rel="noreferrer"
                className="group block bg-blue-900/20 p-5 rounded-2xl border border-blue-800/30 hover:border-blue-400/50 hover:bg-blue-900/30 transition-all duration-300"
              >
                  <div className="flex items-center justify-between mb-2">
                     <span className="text-xs font-bold text-blue-100 uppercase tracking-wide">University</span>
                     <ExternalLink className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="font-semibold text-white mb-1 group-hover:text-blue-100 transition-colors">
                    Turin Polytechnic
                  </div>
                  <div className="text-xs text-blue-300/70 truncate">
                    turin.uz
                  </div>
              </a>
           </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300/60">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
             <p>© {new Date().getFullYear()} TSA. {t.footer.rights}</p>
             
             {/* Developer Credit */}
             <a href="https://tipa.uz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-all hover:text-white group" title="Developed by Tipa">
                <span className="opacity-70">Developed by</span>
                <img 
                  src="https://tipa.uz/logo.svg" 
                  alt="Tipa" 
                  className="h-5 w-auto brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" 
                />
             </a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};