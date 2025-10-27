import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { 
    BriefcaseIcon, 
    DocumentIcon, 
    FinanceIcon,
    CalendarIcon,
    UserIcon,
    LightbulbIcon,
    TrendingUpIcon,
} from './icons';
import { usePopupContext } from '../contexts/PopupContext';
import SeasonalAccentImage from './SeasonalAccentImage';

const commitmentItems = [
    {
        icon: UserIcon,
        title: "Personalized Guidance",
        description: "We tailor our strategies to your unique financial situation, ensuring the advice you receive is always relevant and effective."
    },
    {
        icon: CalendarIcon,
        title: "Year-Round Support",
        description: "Our partnership doesn't end on tax day. We're available throughout the year to help you navigate financial decisions and plan ahead."
    },
    {
        icon: LightbulbIcon,
        title: "Absolute Clarity",
        description: "We demystify complex tax laws, empowering you with the clear understanding needed to make confident choices."
    },
    {
        icon: TrendingUpIcon,
        title: "Proactive Strategy",
        description: "We focus on forward-thinking strategies to not only ensure compliance but also to identify opportunities for financial growth."
    }
];


const About: React.FC = () => {
    const { openCalendly } = usePopupContext();

    const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        openCalendly();
    };

    return (
        <section id="about">
            {/* Part 1: Meet The Expert (now first) */}
            <div className="py-20 bg-gray-50 relative z-10 overflow-hidden">
                <SeasonalAccentImage />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-3 gap-12 lg:gap-16 items-center">
                        
                        {/* Text column (now on the left) */}
                        <motion.div
                            className="relative md:col-span-2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            <span className="text-brand-gold font-bold tracking-wider uppercase">Meet Your Expert</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-dark mt-2">{content.expert.title}</h2>
                            
                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                {content.expert.bio}
                            </p>
                            
                            <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
                                <div>
                                    <p className="font-serif italic text-5xl text-gray-700">{content.expert.name}</p>
                                </div>

                                <a
                                    href="#booking"
                                    onClick={handleBookClick}
                                    className="inline-block bg-brand-gold text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:bg-brand-gold-muted transition-all duration-300 transform hover:-translate-y-1 hover:shadow-brand-gold/50 btn-shine btn-glow text-shadow-dark"
                                >
                                    {content.expert.cta}
                                </a>
                            </div>
                        </motion.div>

                        {/* Image column (now on the right) */}
                        <motion.div
                            className="md:col-span-1 flex justify-center"
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="relative">
                                <motion.div
                                    className="absolute -top-4 -left-4 w-full h-full bg-brand-gold rounded-full -z-10"
                                    aria-hidden="true"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                                />

                                <motion.div
                                    className="absolute top-4 left-12 text-brand-gold-light z-10"
                                    aria-hidden="true"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    <FinanceIcon className="w-16 h-16" />
                                </motion.div>
                                
                                <motion.div
                                    className="absolute bottom-12 right-0 text-brand-gold-light z-10"
                                    aria-hidden="true"
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                >
                                    <DocumentIcon className="w-12 h-12" />
                                </motion.div>
                                
                                <motion.div
                                    className="absolute bottom-2 left-16 text-brand-gold-light z-10"
                                    aria-hidden="true"
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                >
                                    <BriefcaseIcon className="w-10 h-10" />
                                </motion.div>

                                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full shadow-xl shadow-brand-gold/25 overflow-hidden">
                                    <img
                                        src={content.expert.image}
                                        alt={`Portrait of ${content.expert.name}`}
                                        className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            
            {/* Our Commitment Section */}
            <div className="py-20 bg-brand-black text-white">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-serif">Our Commitment To You</h2>
                        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                            Built on a foundation of trust, transparency, and a genuine dedication to your financial well-being.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.15 }}
                    >
                        {commitmentItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div 
                                    key={index}
                                    className="text-center"
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                                    }}
                                >
                                    <div className="flex items-center justify-center w-20 h-20 bg-brand-gold-light/20 text-brand-gold-muted rounded-full mb-6 mx-auto transition-all duration-300 hover:bg-brand-gold-light/30 hover:scale-110">
                                        <Icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-xl font-bold font-serif mb-3 text-white">{item.title}</h3>
                                    <p className="text-white/70">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>


            {/* Part 2: Company Description */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div 
                        className="mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-brand-gold font-semibold tracking-wider uppercase">About our company</p>
                        <div className="mt-2 h-1 bg-brand-gold w-24" />
                    </motion.div>

                    <motion.div
                        className="text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-dark">
                            {content.about.title}
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl">
                            {content.about.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;