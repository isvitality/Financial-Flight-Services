import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import FAQItem from './FAQItem';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Have questions? We've got answers. Here are some of the most common inquiries we receive.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {content.faqs.map((faq, index) => (
            <FAQItem 
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;