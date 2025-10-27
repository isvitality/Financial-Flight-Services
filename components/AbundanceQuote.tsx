import React from 'react';
import { motion } from 'framer-motion';
import { DoveIcon } from './icons/DoveIcon';

const AbundanceQuote: React.FC = () => {
  return (
    <section id="abundance" className="py-20 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,174,126,0.1)_0%,transparent_60%)]" aria-hidden="true"></div>
        <motion.div 
            className="container mx-auto px-4 text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex justify-center mb-6">
                <DoveIcon className="w-12 h-12 text-brand-gold" />
            </div>
            <blockquote className="font-serif italic text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed" style={{textShadow: '0 2px 10px rgba(0,0,0,0.2)'}}>
                “Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,” says the Lord Almighty, “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.”
            </blockquote>
            <cite className="block not-italic mt-6 text-base text-brand-gold-light opacity-80 tracking-wider font-sans">
                — Malachi 3:10
            </cite>
        </motion.div>
    </section>
  );
};

export default AbundanceQuote;