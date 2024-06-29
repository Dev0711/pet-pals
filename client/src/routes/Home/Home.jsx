import AboutSection from '@/components/AboutSection/AboutSection';
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
    </>
  );
}
