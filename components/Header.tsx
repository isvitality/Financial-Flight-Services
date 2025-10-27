import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Logo } from './Logo';
import { usePopupContext } from '../contexts/PopupContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCalendly } = usePopupContext();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }, 100);
    }
  };

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    openCalendly();
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#recruitment', label: 'Join Us' },
    { href: '#magnet', label: 'Free Guide' },
    { href: '#contact', label: 'Contact' },
  ];
  
  const menuVariants: Variants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] } },
  };
  
  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const logoContainerVariants: Variants = {
    top: {
      position: 'absolute',
      top: '-3rem',
      left: '50%',
      translateX: '-50%',
    },
    scrolled: {
      position: 'absolute',
      top: '0.25rem',
      left: '1rem',
      translateX: '0%',
    }
  };

  const ctaText = "Book a Consultation";

  return (
    <header className="bg-brand-black sticky top-0 z-50 border-b border-brand-muted/50 h-36 md:h-24">
      <div className="container mx-auto px-4 h-full flex justify-between items-center relative">
        
        {/* Left Nav (Desktop) */}
        <motion.div 
          className="hidden md:flex flex-1 justify-start"
          animate={{ x: scrolled ? 160 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={handleLinkClick} 
                className="text-lg font-medium text-white hover:text-brand-gold transition nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
        
        {/* Logo Container for Desktop Animation */}
        <motion.div
          className="hidden md:block flex-shrink-0"
          variants={logoContainerVariants}
          animate={scrolled ? 'scrolled' : 'top'}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
           <motion.a 
            href="#hero" 
            aria-label="Back to top"
            onClick={handleLinkClick}
            initial={{ opacity: 0, y: -100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.2 }}
          >
            <motion.div
              animate={{ height: scrolled ? '5.5rem' : '12rem' }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              <Logo className="h-full w-auto" textColor="text-white" />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Logo for Mobile */}
        <div className="md:hidden">
          <a href="#hero" aria-label="Back to top" onClick={handleLinkClick}>
            <Logo className="h-32" textColor="text-white" />
          </a>
        </div>
        
        {/* Right CTA (Desktop) */}
        <div className="hidden md:flex flex-1 justify-end">
          <a 
            href="#booking" 
            onClick={handleBookClick} 
            className="bg-brand-gold text-white font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:shadow-brand-gold/40 hover:bg-brand-gold-muted transition-all duration-300 btn-shine btn-glow text-shadow-dark"
          >
            {ctaText}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 w-8 h-8 text-white"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="w-6 h-full flex flex-col items-center justify-center space-y-1.5"
            >
              <motion.span
                className="block w-full h-0.5 bg-current"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 4 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-full h-0.5 bg-current"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-full h-0.5 bg-current"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -4 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 bg-brand-black z-40 pt-24"
          >
            <motion.div 
              className="container mx-auto px-4 h-full flex flex-col items-center text-center space-y-8"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {navLinks.map((link) => (
                <motion.a 
                  key={link.href}
                  href={link.href} 
                  onClick={handleLinkClick} 
                  className="text-3xl font-serif text-white hover:text-brand-gold transition"
                  variants={navItemVariants}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div variants={navItemVariants}>
                <a 
                  href="#booking" 
                  onClick={handleBookClick} 
                  className="mt-8 inline-block bg-brand-gold text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-brand-gold-muted transition-all duration-300 transform hover:-translate-y-1 btn-shine btn-glow text-shadow-dark"
                >
                  {ctaText}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
