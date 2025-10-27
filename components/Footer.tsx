import React, { useState } from 'react';
import { Logo } from './Logo';
import { content } from '../data/content';
import { FacebookIcon, InstagramIcon } from './icons';

interface FooterProps {
  onLogoClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLogoClick }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleLogoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      onLogoClick();
      setClickCount(0); // Reset after activation
    }
  };

  return (
    <footer className="py-8 bg-brand-black border-t border-brand-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div className="cursor-pointer" onClick={handleLogoClick} title="Click 5 times to open theme tester">
            <Logo className="h-48 mx-auto md:mx-0" textColor="text-white"/>
             <p className="text-white/70 text-sm mt-2">
               &copy; {new Date().getFullYear()} {content.company.name}. All Rights Reserved.
             </p>
             <p className="text-white/70 text-xs mt-1">
              <a href="https://victoryfinancialmarketing.geotapmedia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>Powered by Victory Financial Marketing</a>
             </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="italic text-sm text-white/80 max-w-xs">
              Your trusted partner for a clear and confident financial journey.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/financial_flight_llc" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors">
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;