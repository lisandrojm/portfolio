/* src/app/(routes)/page.tsx */
'use client';

import React, { useState } from 'react';
import LayoutWrapper from '@/_components/_containers/LayoutWrapper';
import Hero from '@/_components/_pages/_layouts/_home/Hero';
import Works from '@/_components/_pages/_layouts/_home/Works';
import Skills from '@/_components/_pages/_layouts/_home/Skills';
import About from '@/_components/_pages/_layouts/_home/About';
import Contact from '@/_components/_pages/_layouts/_home/Contact';
import RootLoading from '@/(routes)/loading';

const RootHome = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return loading ? (
    <RootLoading onLoadingComplete={handleLoadingComplete} />
  ) : (
    <LayoutWrapper>
      <Hero />
      <Works />
      <Skills />
      <About />
      <Contact />
    </LayoutWrapper>
  );
};

export default RootHome;
