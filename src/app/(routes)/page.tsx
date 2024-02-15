/* src/app/(routes)/page.tsx */

import LayoutWrapper from '@/_components/_containers/LayoutWrapper';
import Hero from '@/_components/_pages/_layouts/_home/Hero';
import Works from '@/_components/_pages/_layouts/_home/Works';
import Skills from '@/_components/_pages/_layouts/_home/Skills';
import About from '@/_components/_pages/_layouts/_home/About';
import Contact from '@/_components/_pages/_layouts/_home/Contact';

export default function RootHome() {
  return (
    <LayoutWrapper>
      <Hero />
      <About />
      <Works />
      <Skills />
      <Contact />
    </LayoutWrapper>
  );
}
