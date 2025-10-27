import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Recruitment from './components/Recruitment';
import Support from './components/Support';
import LeadMagnet from './components/LeadMagnet';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeTester from './components/ThemeTester';
import HolidayBanner from './components/HolidayBanner';
import MonthlyGreeting from './components/MonthlyGreeting';
import CalendlyPopup from './components/CalendlyPopup';
import AbundanceQuote from './components/AbundanceQuote';

const App: React.FC = () => {
  const [isTesterVisible, setIsTesterVisible] = useState(false);

  return (
    <div className="text-brand-dark bg-white">
      <HolidayBanner />
      <Header />
      <main>
        <Hero />
        <About />
        <MonthlyGreeting />
        <Services />
        <AbundanceQuote />
        <Recruitment />
        <Support />
        <LeadMagnet />
        <FAQ />
        <Contact />
      </main>
      <Footer onLogoClick={() => setIsTesterVisible(true)} />
      <ThemeTester isVisible={isTesterVisible} onClose={() => setIsTesterVisible(false)} />
      <CalendlyPopup />
    </div>
  );
};

export default App;