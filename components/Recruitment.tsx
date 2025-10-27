import React from 'react';
import { motion } from 'framer-motion';
import { usePopupContext } from '../contexts/PopupContext';
import { CheckIcon } from './icons';

const Recruitment: React.FC = () => {
    const { openCalendly } = usePopupContext();

    const handleRegisterClick = () => {
        openCalendly();
    };

    const listItems = [
        "Comprehensive Tax Training",
        "Marketing & Client Support",
        "Professional Tax Software",
        "Bank Product Integration"
    ];

    return (
        <section id="recruitment" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Text Column */}
                    <motion.div
                        className="order-2 md:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-800">Join Our Professional Team</h2>
                        <div className="mt-4 inline-block bg-gradient-to-r from-white via-white to-brand-gold-light/30 font-bold px-4 py-2 rounded-md shadow-md border border-gray-200">
                            <h3 className="text-xl tracking-wide uppercase text-brand-dark">Begin Your Career as a Tax Professional</h3>
                        </div>
                        
                        <p className="mt-8 text-xl font-bold text-gray-700">OUR PROGRAM INCLUDES:</p>
                        <ul className="mt-4 space-y-4">
                            {listItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                >
                                    <CheckIcon className="w-6 h-6 text-brand-gold flex-shrink-0" />
                                    <span className="text-lg text-gray-600">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.button
                            onClick={handleRegisterClick}
                            className="mt-10 inline-block bg-brand-gold text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:bg-brand-gold-muted transition-all duration-300 transform hover:-translate-y-1 btn-shine text-shadow-dark"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Apply to Learn More
                        </motion.button>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div
                        className="order-1 md:order-2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-lg overflow-hidden shadow-2xl group">
                                <img 
                                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="A professional team collaborating in a modern office" 
                                    className="w-full h-full object-cover aspect-[16/9] transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="h-48 rounded-lg overflow-hidden shadow-xl group">
                                <img 
                                    src="https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="A person receiving professional training" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="h-48 rounded-lg overflow-hidden shadow-xl group">
                                <img 
                                    src="https://images.pexels.com/photos/5668887/pexels-photo-5668887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="A successful tax professional working remotely" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Recruitment;