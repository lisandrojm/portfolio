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
import FadeOut from '@/_components/_gsap/FadeOut'; // Importar el componente FadeOut

interface RootLoadingProps {
  onLoadingComplete: () => void;
}

const RootLoading: React.FC<RootLoadingProps> = ({ onLoadingComplete }) => {
  useEffect(() => {
    // Esperar a que la página se cargue completamente
    window.onload = () => {
      // Después de que la página se haya cargado completamente, esperar 1 segundo adicional antes de ocultar el componente de carga
      setTimeout(() => {
        onLoadingComplete();
      }, 4000);
    };

    return () => {
      // Limpiar el evento onload cuando el componente se desmonte para evitar problemas de memoria
      window.onload = null;
    };
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
