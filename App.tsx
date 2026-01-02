import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkStack } from './components/WorkStack';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Career } from './components/Career';
import { Skills } from './components/Skills';
import { AnimatedBackground } from './components/ui/AnimatedBackground';

function App() {
  
  return (
    <div className="relative w-full min-h-screen">
      <AnimatedBackground />
      
      <Header />
      
      <main className="flex flex-col w-full">
        <Hero />
        <Services />
        <WorkStack />
        <Career />
        <Skills />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default App;