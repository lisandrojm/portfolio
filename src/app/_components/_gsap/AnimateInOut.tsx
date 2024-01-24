/* src/app/_components/_gsap/AnimateInOut.tsx */

'use client';

import gsap from 'gsap';
import React, { useRef, ReactNode, CSSProperties } from 'react';
import useIsomorphicLayoutEffect from '@/_hooks/useIsomorphicLayoutEffect';
import { useTransitionContext } from '@/_context/TransitionContextProvider';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimateInOutProps {
  children: React.ReactNode;
  durationIn?: number;
  durationOut?: number;
  delay?: number;
  delayOut?: number;
  from: CSSProperties;
  to: {
    ease?: string;
    opacity?: number;
    x?: number;
    y?: number | string;
    scale?: number; // Add the 'scale' property to the type definition
    rotate?: number; // Add the 'scale' property to the type definition
  };
  skipOutro?: boolean;
  watch?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean;
  markers?: any; // Replace 'any' with the correct type for markers
}

function AnimateInOut({
  children,
  durationIn = 1, // Añade valores por defecto o ajusta según sea necesario
  durationOut = 1,
  delay = 0,
  delayOut = 0,
  from,
  to,
  skipOutro = false,
  watch = false,
  start = 'top bottom',
  end = 'bottom top',
  scrub = false,
  markers,
}: AnimateInOutProps) {
  const { timeline } = useTransitionContext();
  const element = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const scrollTrigger = watch
      ? {
          scrollTrigger: {
            trigger: element.current,
            start,
            end,
            scrub,
            markers,
          },
        }
      : {};

    const ctx = gsap.context(() => {
      /* Intro animation */
      gsap.to(element.current, {
        ...to,
        delay,
        duration: durationIn,
        ...scrollTrigger,
      });

      /* Outro animation */
      if (!skipOutro) {
        timeline.add(
          gsap.to(element.current, {
            ...from,
            delay: delayOut,
            duration: durationOut,
          }),
          0
        );
      }
    }, element);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={element} style={from}>
      {children}
    </div>
  );
}

export default React.memo(AnimateInOut);
