/* src/app/_components/_gsap/TranslateInOut.tsx */

import React, { ReactNode } from 'react';
import classNames from 'classnames';
import AnimateInOut from '@/_components/_gsap/AnimateInOut';

interface TranslateInOutProps {
  children: ReactNode;
  overflowHidden?: boolean;
  fade?: boolean;
  durationIn?: number;
  durationOut?: number;
  delay?: number;
  delayOut?: number;
  ease?: string;
  x?: number;
  y?: number | string;
  xTo?: number;
  yTo?: number;
  skipOutro?: boolean;
  watch?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean;
  markers?: any; // Replace 'any' with the correct type for markers
}

const TranslateInOut: React.FC<TranslateInOutProps> = ({ children, overflowHidden, fade = true, durationIn = 1, durationOut = 0.25, delay = 0, delayOut = 0, ease = 'power4.out', x = 0, y = 0, xTo = 0, yTo = 0, skipOutro, watch, start = 'top bottom', end = 'bottom top', scrub = false, markers }) => {
  return (
    <div className={classNames({ 'overflow-hidden': overflowHidden })}>
      <AnimateInOut
        durationIn={durationIn}
        durationOut={durationOut}
        delay={delay}
        delayOut={delayOut}
        from={{
          opacity: fade ? 0 : 1,
          transform: `translate(${x}px, ${y}px)`,
        }}
        to={{
          ease,
          opacity: 1,
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

export default TranslateInOut;
