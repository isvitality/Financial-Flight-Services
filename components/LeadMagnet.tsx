import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import SeasonalAccentImage from './SeasonalAccentImage';

const LeadMagnet: React.FC = () => {
  const formLink = "https://53e4f5eb.sibforms.com/serve/MUIFAJewVEANrW9I7T8F14FcRuggwSIrCnSyia7c-rafnMFQY3mzsuNW-6Onrg6luffuucY12BDBLSAAK1DLIsZ_yS74TNn3LqSH2i6NKxojTEwCylmdkr4ibl_tCH1tGKxxdzr3ijZVGrkL6vlTT1uVGvbqqhb4fDbDnCuTeH1auCuo0-Bzy3Kiaute2Ve3M7E6t7Y8SbT26IxLfA==";

  return (
    <section id="magnet" className="py-20 bg-brand-black relative z-10 overflow-hidden">
      <SeasonalAccentImage />
      <div 
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:32px_32px] opacity-50" 
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl shadow-brand-gold/15 hover:shadow-brand-gold/30 transition-shadow duration-300 overflow-hidden max-w-3xl mx-auto">
          <motion.div
            className="w-full h-64"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src={content.magnet.image} 
              alt="Get your free financial prep checklist" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
          <motion.div 
            className="p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 text-center">{content.magnet.title}</h2>
            <p className="mt-4 text-lg text-gray-600 text-center">{content.magnet.subhead}</p>
            
            <div className="mt-8 text-center">
              <a 
                href={formLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-brand-gold text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:bg-brand-gold-muted transition-all duration-300 transform hover:-translate-y-1 btn-shine btn-glow text-shadow-dark"
              >
                Download Your Free Checklist
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;