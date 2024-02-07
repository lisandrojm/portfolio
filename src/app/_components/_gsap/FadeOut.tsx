/* src/app/_components/_gsap/FadeOut.tsx */

import React, { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CSSProperties } from 'react';
import useIsomorphicLayoutEffect from '@/_hooks/useIsomorphicLayoutEffect';

interface FadeOutProps {
  children: ReactNode;
  durationOut?: number;
  delayOut?: number;
  onComplete?: () => void;
}

const FadeOut: React.FC<FadeOutProps> = ({ children, durationOut = 0.25, delayOut = 0, onComplete }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const tl = gsap.timeline();
    tl.to(element, {
      opacity: 0,
      duration: durationOut,
      delay: delayOut,
      onComplete,
    });

    return () => {
      tl.kill(); // Detener la animación si el componente se desmonta antes de completarse
    };
  }, [durationOut, delayOut, onComplete]);

  return <div ref={elementRef}>{children}</div>;
};

export default FadeOut;
