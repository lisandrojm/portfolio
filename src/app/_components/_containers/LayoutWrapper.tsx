/* src/app/_components/_containers/LayoutWrapper.tsx */

'use client';

import { ReactNode, useEffect } from 'react';
import TransitionLayout from '@/_components/_shared/TransitionLayout';
import Provider from '@/_context/Provider';
import Background from '@/_components/_shared/Background';
import Header from '@/_components/_pages/_main/_header/Header';
import Footer from '@/_components/_pages/_main/_footer/Footer';
import ScrollUp from '@/_components/_shared/ScrollUp';
import ScrollIndicator from '@/_components/_shared/ScrollIndicator';
import { TransitionContextProvider } from '@/_context/TransitionContextProvider';
import Cursor from '@/_components/_gsap/Cursor';

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  useEffect(() => {
    console.log('👋 Hello Developers!');
  });

  return (
    <Provider>
      <TransitionContextProvider>
        <Background />
        <TransitionLayout>
          <div id="top" className="flex h-svh flex-col justify-between">
            <ScrollIndicator />
            <Cursor />
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </TransitionLayout>
      </TransitionContextProvider>
      <ScrollUp />
    </Provider>
  );
};

export default LayoutWrapper;
