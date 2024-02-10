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

/* src/app/(routes)/loading.tsx */

import React, { useEffect, useState } from 'react';
import Provider from '@/_context/Provider';
import { TransitionContextProvider } from '@/_context/TransitionContextProvider';
import TransitionLayout from '@/_components/_shared/TransitionLayout';
import FadeOut from '@/_components/_gsap/FadeOut'; // Importar el componente FadeOut

interface RootLoadingProps {
  onLoadingComplete: () => void;
}

const RootLoading: React.FC<RootLoadingProps> = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoadingComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <Provider>
      <TransitionContextProvider>
        <TransitionLayout>
          <div className="flex h-svh flex-col items-center justify-center">
            <h1 className="flex items-center">
              <FadeOut durationOut={1} delayOut={0.1} onComplete={onLoadingComplete}>
                <span className="gs_reveal_fromBottom text-md font-mono text-xl text-orange">lisandrojm</span>
                <span className="gs_reveal_fromBottom text-md px-2 font-mono text-xl text-white">|</span>
                <span className="font-serif text-2xl">Portfolio</span>
              </FadeOut>
            </h1>
          </div>
        </TransitionLayout>
      </TransitionContextProvider>
    </Provider>
  );
};

export default RootLoading;
