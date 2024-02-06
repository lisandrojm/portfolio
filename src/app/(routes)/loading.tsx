/* src/app/(routes)/loading.tsx */

/* export default function RootLoading() {
  return (
    <div className="flex h-svh flex-col items-center justify-center">
      <h1>
        <span className="text-md font-mono text-xl text-orange">lisandrojm </span>
        <span className="font-serif text-2xl">Portfolio</span>
      </h1>
    </div>
  );
} */
'use client';

import React, { useEffect, useState } from 'react';
import Provider from '@/_context/Provider';
import { TransitionContextProvider } from '@/_context/TransitionContextProvider';
import TransitionLayout from '@/_components/_shared/TransitionLayout';

interface RootLoadingProps {
  onLoadingComplete: () => void;
}

const RootLoading: React.FC<RootLoadingProps> = ({ onLoadingComplete }) => {
  useEffect(() => {
    const loadStart = window.performance.timing.responseStart;
    const loadEnd = window.performance.timing.loadEventEnd;

    const loadTime = loadEnd - loadStart;

    const timeout = setTimeout(
      () => {
        onLoadingComplete();
      },
      Math.max(1000, loadTime)
    );

    return () => clearTimeout(timeout);
  }, [onLoadingComplete]);

  return (
    <Provider>
      <TransitionContextProvider>
        <TransitionLayout>
          <div className="flex h-svh flex-col items-center justify-center">
            <h1>
              <span className="gs_reveal_fromBottom text-md font-mono text-xl text-orange">lisandrojm </span>
              <span className="font-serif text-2xl">Portfolio</span>
            </h1>
          </div>
        </TransitionLayout>
      </TransitionContextProvider>
    </Provider>
  );
};

export default RootLoading;
