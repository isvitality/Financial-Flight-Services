import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import SeasonalAccentImage from './SeasonalAccentImage';

const LeadMagnet: React.FC = () => {
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
            
            <div className="mt-8 h-[500px]">
              <iframe
                  src="https://api.leadconnectorhq.com/widget/form/f0GncOitDJTGWd54Bw1Z"
                  style={{width: '100%', height: '100%', border: 'none', borderRadius: '3px'}}
                  id="inline-f0GncOitDJTGWd54Bw1Z" 
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Lead Magnet Form New"
                  data-height="500"
                  data-layout-iframe-id="inline-f0GncOitDJTGWd54Bw1Z"
                  data-form-id="f0GncOitDJTGWd54Bw1Z"
                  title="Lead Magnet Form New"
              >
              </iframe>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;