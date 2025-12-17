
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Directions } from './components/Directions';
import { Benefits } from './components/Benefits';
import { Timeline } from './components/Timeline';
import { Portfolio } from './components/Portfolio';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Mission />
          <Directions />
          <Benefits />
          <Timeline />
          <Portfolio />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
