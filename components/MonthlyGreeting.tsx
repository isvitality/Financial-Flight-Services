import React from 'react';
import { motion } from 'framer-motion';
import { useSimulatedDate } from '../hooks/useSimulatedDate';
import { useSeasonalTheme } from '../hooks/useSeasonalTheme';

const SectionAccent: React.FC<{ color?: string; className?: string; }> = ({ color = '#c7ae7e', className = '' }) => {
  return <div style={{ backgroundColor: color, height: '3px', width: '70px' }} className={className} />;
};

const getMonthlyMessage = (monthIndex: number, monthName: string): string => {
  const messages: { [key: number]: string[] } = {
    0: [
        `A new year begins! ${monthName} is the month for fresh starts. Let's make your financial resolutions a reality.`,
        `Welcome to ${monthName}! It's the perfect time to set your financial intentions for the year ahead.`
    ],
    1: [
        `With ${monthName}, love is in the air. It's the perfect time to show your family some financial love by securing their future.`,
        `As we celebrate ${monthName}, it's a great reminder to protect the ones we love with a secure financial plan.`
    ],
    2: [
        `Spring is here! As nature renews in ${monthName}, it's a great time to refresh your financial strategy.`,
        `Spring is just around the corner! This ${monthName}, let's plant the seeds for future financial growth.`
    ],
    3: [
        `Tax season is in full swing. This ${monthName}, let's navigate it together and turn stress into success.`,
        `With tax day approaching, ${monthName} is all about getting organized. We're here to make it stress-free.`
    ],
    4: [
        `The flowers are blooming in ${monthName}. It's time to let your financial plans blossom, too.`,
        `As the flowers bloom in ${monthName}, it's time to let your financial plans blossom too.`
    ],
    5: [
        `Hello, summer! As the days get longer in ${monthName}, let's extend your financial horizons.`,
        `Hello, summer! As the days get longer in ${monthName}, let's extend your financial horizons.`
    ],
    6: [
        `Celebrating freedom this ${monthName}! Let's work towards achieving your own financial independence.`,
        `This ${monthName}, while celebrating freedom, let's take a step toward your own financial independence.`
    ],
    7: [
        `The heat of ${monthName} is on. Let's fire up your financial plan and make things happen.`,
        `The heat of ${monthName} is on! Let's fire up your financial plan and make things happen before year-end.`
    ],
    8: [
        `Back to business in ${monthName}. It's a perfect time to get serious about your end-of-year financial goals.`,
        `Back to business in ${monthName}. It's a perfect time to get serious about your end-of-year financial goals.`
    ],
    9: [
        `The leaves are changing in ${monthName}. Let's bring some beautiful color to your financial outlook.`,
        `The leaves are changing in ${monthName}. Let's bring some beautiful color to your financial outlook.`
    ],
    10: [
        `As we give thanks in ${monthName}, let's be grateful for the opportunity to build a secure future.`,
        `As we give thanks in ${monthName}, let's be grateful for the opportunity to build a secure future.`
    ],
    11: [
        `Happy Holidays! This ${monthName}, let's make the season bright and prepare for a financially secure new year.`,
        `Happy Holidays! This ${monthName}, let's make the season bright and prepare for a financially secure new year.`
    ],
  };
  
  const messageArray = messages[monthIndex];
  if (messageArray) {
      return messageArray[Math.floor(Math.random() * messageArray.length)];
  }
  return `As we journey through ${monthName}, it's the perfect time to focus on your financial goals.`;
};


const MonthlyGreeting: React.FC = () => {
  const now = useSimulatedDate();
  const { theme } = useSeasonalTheme();
  
  const monthIndex = now.getMonth();
  const monthName = now.toLocaleString('default', { month: 'long' });

  const message = getMonthlyMessage(monthIndex, monthName);

  const isHalloween = theme === 'halloween';

  const sectionClasses = isHalloween
    ? 'py-16 bg-brand-dark relative overflow-hidden'
    : 'py-16 bg-white relative overflow-hidden';
  
  const textClasses = isHalloween
    ? 'font-serif italic text-2xl md:text-3xl text-white max-w-3xl mx-auto leading-relaxed'
    : 'font-serif italic text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto leading-relaxed';
  
  const accentColor = isHalloween ? '#ffffff' : '#c7ae7e';

  return (
    <section className={sectionClasses}>
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className={textClasses}>
          "{message}"
        </p>
        <SectionAccent color={accentColor} className="mt-6 mx-auto" />
      </motion.div>
    </section>
  );
};

export default MonthlyGreeting;