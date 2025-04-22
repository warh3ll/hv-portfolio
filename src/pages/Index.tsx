
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Expertise from '@/components/Expertise';
import Timeline from '@/components/Timeline';
import About from '@/components/About';
import Footer from '@/components/Footer';
import PersonalImageGallery from '@/components/PersonalImageGallery';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Expertise />
      <Projects />
      <Timeline />
      <About />
      <PersonalImageGallery />
      <Footer />
    </div>
  );
};

export default Index;
