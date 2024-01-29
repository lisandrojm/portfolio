/* src/app/_components/_gsap/RotateInOut.tsx */

import React, { ReactNode } from 'react';
import classNames from 'classnames';
import AnimateInOut from '@/_components/_gsap/AnimateInOut';

interface RotateInOutProps {
  children: ReactNode;
  overflowHidden?: boolean;
  fade?: boolean;
  durationIn?: number;
  durationOut?: number;
  delay?: number;
  delayOut?: number;
  ease?: string;
  rotate?: number;
  rotateTo?: number;
  x?: number;
  y?: number;
  xTo?: number;
  yTo?: number;
  skipOutro?: boolean;
  watch?: any; // Reemplaza "any" con el tipo correcto según tus necesidades
  start?: string;
  end?: string;
  scrub?: boolean;
  markers?: boolean;
}

const RotateInOut: React.FC<RotateInOutProps> = ({ children, overflowHidden, fade = true, durationIn = 0.5, durationOut = 0.25, delay = 0, delayOut = 0, ease = 'power1.out', rotate = 0, rotateTo = 0, x = 0, y = 0, xTo = 0, yTo = 0, skipOutro, watch, start = 'top bottom', end = 'bottom top', scrub = false, markers }) => {
  return (
    <div
      className={classNames({
        'overflow-hidden': overflowHidden,
      })}
    >
      <AnimateInOut
        durationIn={durationIn}
        durationOut={durationOut}
        delay={delay}
        delayOut={delayOut}
        from={{
          opacity: fade ? 0 : 1,
          transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
        }}
        to={{
          ease,
          opacity: 1,
          rotate: -rotateTo, // Invertir la rotación final
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

export default RotateInOut;
