import React, { ReactNode } from 'react';
import classNames from 'classnames';
import AnimateInOut from './AnimateInOut';

interface FadeInOutProps {
  children: ReactNode;
  overflowHidden?: boolean;
  durationIn?: number;
  durationOut?: number;
  delay?: number;
  delayOut?: number;
  ease?: string;
  skipOutro?: boolean;
  watch?: any; // Puedes reemplazar "any" con el tipo de datos correcto según tu implementación
  start?: string;
  end?: string;
  scrub?: boolean;
  markers?: any[]; // Puedes reemplazar "any" con el tipo de datos correcto según tu implementación
}

export default function FadeInOut({ children, overflowHidden, durationIn = 0.5, durationOut = 0.25, delay = 0, delayOut = 0, ease = 'power4.out', skipOutro, watch, start = 'top bottom', end = 'bottom top', scrub = false, markers }: FadeInOutProps) {
  return (
    <div
      className={classNames({
        'u-overflow--hidden': overflowHidden,
      })}
    >
      <AnimateInOut
        durationIn={durationIn}
        durationOut={durationOut}
        delay={delay}
        delayOut={delayOut}
        from={{
          opacity: 0,
        }}
        to={{
          ease,
          opacity: 1,
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
}
