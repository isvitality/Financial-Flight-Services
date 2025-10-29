import React from 'react';
// FIX: Import Variants from framer-motion to explicitly type animation variants, resolving a TypeScript error.
import { motion, Variants } from 'framer-motion';
import { usePopupContext } from '../contexts/PopupContext';
import { CalendarIcon, ShieldIcon, DocumentIcon, CheckIcon } from './icons';

const processSteps = [
    {
        icon: CalendarIcon,
        title: "Book a Consultation",
        description: "Schedule a free, no-obligation call to discuss your unique needs and see how we can help you achieve your financial goals."
    },
    {
        icon: ShieldIcon,
        title: "Secure Document Upload",
        description: "Easily and safely upload your tax documents through our encrypted, user-friendly client portal."
    },
    {
        icon: DocumentIcon,
        title: "Expert Preparation",
        description: "Our dedicated team meticulously prepares your return, ensuring accuracy while maximizing every legal deduction."
    },
    {
        icon: CheckIcon,
        title: "Review & E-File",
        description: "We'll review the completed return with you for your final approval. Then, we securely e-file it on behalf of."
    }
];

const Recruitment: React.FC = () => {
    const { openCalendly } = usePopupContext();

    const handleBookClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        openCalendly();
    };
    
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // FIX: Explicitly type `itemVariants` as `Variants` to ensure the `ease` property is correctly typed, resolving an error.
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
    };

    return (
        <section id="process" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif">Our Simple & Secure Process</h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                        We make getting your taxes done easy and transparent. Here’s what to expect.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div 
                        aria-hidden="true" 
                        className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200"
                    ></div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="text-center flex flex-col items-center"
                                    variants={itemVariants}
                                >
                                    <div className="relative z-10 flex items-center justify-center w-24 h-24 bg-white">
                                       <div className="absolute w-full h-full bg-brand-gold-light/40 rounded-full scale-110"></div>
                                       <div className="relative flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md">
                                            <Icon className="w-10 h-10 text-brand-gold-muted" />
                                       </div>
                                    </div>
                                    <h3 className="text-xl font-bold font-serif mb-3 text-gray-900 mt-6">{`Step ${index + 1}: ${step.title}`}</h3>
                                    <p className="text-gray-600 flex-grow">{step.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>


                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <button
                        onClick={handleBookClick}
                        className="inline-block bg-brand-gold text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:bg-brand-gold-muted transition-all duration-300 transform hover:-translate-y-1 btn-shine btn-glow text-shadow-dark"
                    >
                        Get Started Today
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Recruitment;