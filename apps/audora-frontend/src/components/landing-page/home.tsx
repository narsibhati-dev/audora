import React from 'react';
import HeroSection from './hero-section';
import TrustedSection from './trusted-section';
import GoLiveSection from './go-live-section';
import RecordSection from './record-section';
import EditSection from './edit-section';
import CtaSection from './cta-section';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <RecordSection />
      <EditSection />
      <GoLiveSection />
      <TrustedSection />
      <CtaSection />
    </main>
  );
};

export default HomePage;
