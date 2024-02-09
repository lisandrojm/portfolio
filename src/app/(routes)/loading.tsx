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

import React, { useEffect } from 'react';
import Provider from '@/_context/Provider';
import { TransitionContextProvider } from '@/_context/TransitionContextProvider';
import TransitionLayout from '@/_components/_shared/TransitionLayout';
import FadeOut from '@/_components/_gsap/FadeOut';

interface RootLoadingProps {
  onLoadingComplete: () => void;
}

const RootLoading: React.FC<RootLoadingProps> = ({ onLoadingComplete }) => {
  useEffect(() => {
    const navigationEntries = window.performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;

      const loadStart = navigationEntry.responseEnd;
      const loadEnd = navigationEntry.loadEventEnd;

      const loadTime = loadEnd - loadStart;

      const timeout = setTimeout(
        () => {
          onLoadingComplete();
        },
        Math.min(1000, loadTime) // Espera mínimo 1 segundo
      );

      // Lógica para agregar un setTimeout de 4 segundos después de la carga
      const additionalTimeout = setTimeout(() => {
        onLoadingComplete();
      }, 9000);

      // Limpiar los timeouts al desmontar el componente
      return () => {
        clearTimeout(timeout);
        clearTimeout(additionalTimeout);
      };
    }
  }, [onLoadingComplete]);

  return (
    <Provider>
      <TransitionContextProvider>
        <TransitionLayout>
          <div className="flex h-svh flex-col items-center justify-center">
            <h1 className="flex items-center">
              <FadeOut durationOut={1} delayOut={0.1} onComplete={onLoadingComplete}>
                <span className="gs_reveal_fromBottom text-md font-mono text-xl text-orange">lisandrojmx</span>
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
