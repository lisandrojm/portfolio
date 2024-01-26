/* src/app/_components/_gsap/ScaleInOut.tsx */

import React, { ReactNode } from 'react';
import classNames from 'classnames';
import AnimateInOut from '@/_components/_gsap/AnimateInOut';

interface ScaleInOutProps {
  children: ReactNode;
  overflowHidden?: boolean;
  fade?: boolean;
  durationIn?: number;
  durationOut?: number;
  delay?: number;
  delayOut?: number;
  ease?: string;
  scale?: number;
  scaleTo?: number;
  x?: number;
  y?: number;
  xTo?: number;
  yTo?: number;
  skipOutro?: boolean;
  watch?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean;
  markers?: boolean;
}

const ScaleInOut: React.FC<ScaleInOutProps> = ({ children, overflowHidden, fade = true, durationIn = 1.5, durationOut = 0.5, delay = 0, delayOut = 0, ease = 'power4.out', scale = 0, scaleTo = 1, x = 0, y = 0, xTo = 0, yTo = 0, skipOutro, watch, start = 'top bottom', end = 'bottom top', scrub = false, markers }) => {
  return (
    <div className={classNames({ 'overflow-hidden': overflowHidden })}>
      <AnimateInOut
        durationIn={durationIn}
        durationOut={durationOut}
        delay={delay}
        delayOut={delayOut}
        from={{
          opacity: fade ? 0 : 1,
          transform: `translate(${x}px, ${y}px) scale(${scale})`,
        }}
        to={{
          ease,
          opacity: 1,
          scale: scaleTo,
          x: xTo,
          y: yTo,
        }}
        skipOutro={skipOutro}
        watch={watch}
        start={start}
        end={end}
        scrub={scrub}
        markers={markers}
      >
        {children}
      </AnimateInOut>
    </div>
  );
};

export default ScaleInOut;
