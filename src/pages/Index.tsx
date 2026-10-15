import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Expertise from '@/components/Expertise';
import Timeline from '@/components/Timeline';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  // Links from case pages (/#about) arrive before the sections exist, so scroll once they do
  useEffect(() => {
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Expertise />
        <Projects />
        <Timeline />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
