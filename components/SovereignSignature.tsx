import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SovereignSignature: React.FC = () => {
  // Build ID: 01001001 01010011 01010110 01010010 (Binary for IS-VT)
  const baseBuildId = "01001001 01010011 01010110 01010010";
  const [displayId, setDisplayId] = useState(baseBuildId);

  useEffect(() => {
    const interval = setInterval(() => {
      // 15% probability of bit flip on every 60ms tick
      if (Math.random() < 0.15) {
        const chars = baseBuildId.split('');
        const newChars = chars.map((char) => {
          if (char === ' ' ) return char;
          // Randomly flip a bit for a single tick duration
          return Math.random() < 0.05 ? (char === '0' ? '1' : '0') : char;
        });
        setDisplayId(newChars.join(''));
        
        // Return to base quickly for high-frequency shimmer effect
        setTimeout(() => setDisplayId(baseBuildId), 30);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-4 select-none pointer-events-none">
      <motion.div 
        className="font-mono text-[9px] tracking-tighter text-brand-gold-light/15 uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <span>BUILD ID: {displayId}</span>
      </motion.div>
    </div>
  );
};

export default SovereignSignature;