import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SovereignRegistry: React.FC = () => {
  const baseBinary = "01001001010100110100000101001010";
  const nodeInfo = "(Vibrational Node: IS-FF)";
  
  // State to handle the "live" diagnostic feel
  const [binary, setBinary] = useState(baseBinary);

  useEffect(() => {
    const interval = setInterval(() => {
      // Occasionally flip a random bit to simulate processing
      if (Math.random() > 0.7) {
        const bits = baseBinary.split('');
        const randomIndex = Math.floor(Math.random() * bits.length);
        bits[randomIndex] = Math.random() > 0.5 ? '1' : '0';
        setBinary(bits.join(''));
        
        // Return to base after a short flicker
        setTimeout(() => setBinary(baseBinary), 150);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-6 select-none pointer-events-none">
      <motion.div 
        className="font-mono text-[8px] tracking-[0.2em] text-brand-gold-light/40 flex items-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }} // Extremely subtle "ghost-tier" opacity
        transition={{ duration: 2 }}
      >
        <span className="opacity-40">SYS_RECLAIM_ID:</span>
        <div className="flex">
          {binary.split('').map((bit, i) => (
            <motion.span
              key={i}
              initial={false}
              animate={{ 
                opacity: bit !== baseBinary[i] ? [0.2, 1, 0.4] : 0.4,
                color: bit !== baseBinary[i] ? "#ffffff" : "#e0cc9e"
              }}
              transition={{ duration: 0.3 }}
            >
              {bit}
            </motion.span>
          ))}
        </div>
        <span className="opacity-30 ml-2">{nodeInfo}</span>
      </motion.div>
    </div>
  );
};

export default SovereignRegistry;