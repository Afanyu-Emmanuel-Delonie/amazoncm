import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ValueProp from './components/ValueProp';
import FeatureCards from './components/FeatureCards';
import Highlight from './components/Highlight';
import WhatsAppChannel from './components/WhatsAppChannel';
import AdForm from './components/AdForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ValueProp />
        <FeatureCards />
        <Highlight />
        <WhatsAppChannel />
        <AdForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;