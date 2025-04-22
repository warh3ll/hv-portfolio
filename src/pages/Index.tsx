
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Expertise from '@/components/Expertise';
import Timeline from '@/components/Timeline';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Expertise />
      <Projects />
      <Timeline />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
