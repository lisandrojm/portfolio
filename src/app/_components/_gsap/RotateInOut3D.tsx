/* src/app/_components/_gsap/RotateInOut3D.tsx */

'use client';

import gsap from 'gsap';
import { useRef, FC, ReactNode } from 'react';
import useIsomorphicLayoutEffect from '@/_hooks/useIsomorphicLayoutEffect';
import { useTransitionContext } from '@/_context/TransitionContextProvider';
import { randomNumber } from '@/_utils/number';

interface RotateInOut3DProps {
  children: ReactNode;
  durationIn?: number;
  durationOut?: number;
  delay?: number;
  delayOut?: number;
  ease?: string;
  easeOut?: string;
  x?: number;
  y?: number | string;
  skipOutro?: boolean;
  watch?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean;
  markers?: boolean;
}

const RotateInOut3D: FC<RotateInOut3DProps> = ({ children, durationIn = 0.5, durationOut = 0.25, delay = 0, delayOut = 0, ease = 'power4.inOut', easeOut = 'power4.out', x = 0, y = 0, skipOutro, watch = false, start = 'top bottom', end = 'bottom top', scrub = false, markers }) => {
  const { timeline } = useTransitionContext();
  const element = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const scrollTrigger = watch
      ? {
          scrollTrigger: {
            trigger: element.current!,
            start,
            end,
            scrub,
            markers,
          },
        }
      : {};

    const ctx = gsap.context(() => {
      /* Intro animation */
      gsap.fromTo(
        element.current,
        {
          x,
          y,
          rotationX: randomNumber(-80, 80),
          rotationY: randomNumber(-40, 40),
          rotationZ: randomNumber(-10, 10),
          scale: 0.8,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scale: 1,
          opacity: 1,
          ease,
          delay,
          duration: durationIn,
          ...scrollTrigger,
        }
      );

      /* Outro animation */
      if (!skipOutro) {
        const outroTimeline = gsap.to(element.current, {
          x,
          y,
          rotationX: randomNumber(-80, 80),
          rotationY: randomNumber(-40, 40),
          rotationZ: randomNumber(-10, 10),
          opacity: 0,
          ease: easeOut,
          delay: delayOut,
          duration: durationOut,
        });

        timeline.add(outroTimeline, 0);
      }
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={element} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default RotateInOut3D;
