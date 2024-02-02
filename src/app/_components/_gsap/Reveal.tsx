// src/app/_components/_gsap/Reveal.tsx

import React, { ReactNode, useEffect, useRef } from 'react';
import classNames from 'classnames';
import AnimateInOut from './AnimateInOut';
import { gsap, ScrollTrigger } from 'gsap/all';

interface RevealProps {
  children: ReactNode;
  overflowHidden?: boolean;
  fade?: boolean;
  durationIn?: number;
  durationOut?: number;
  delay?: number;
  delayOut?: number;
  ease?: string;
  x?: number;
  y?: number;
  skipOutro?: boolean;
  watch?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean;
  markers?: boolean;
  className?: string; // Para la clase del scroll trigger
}

const Reveal: React.FC<RevealProps> = ({ children, overflowHidden, fade = true, durationIn = 1.5, durationOut = 0.5, delay = 0, delayOut = 0, ease = 'power4.out', x = 0, y = 0, skipOutro, watch, start = 'top bottom', end = 'bottom top', scrub = false, markers, className }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elem = container.current;

    if (!elem) return;

    const animateFrom = (direction: number) => {
      direction = direction || 1;
      let translateX = 0,
        translateY = direction * 100;
      let duration = 1.5;

      if (elem.classList.contains('gs_reveal_fromLeft')) {
        translateX = -100;
        translateY = 0;
        duration = 1.5;
      } else if (elem.classList.contains('gs_reveal_fromRight')) {
        translateX = 100;
        translateY = 0;
        duration = 1.5;
      } else if (elem.classList.contains('gs_reveal_fromBottom')) {
        translateX = 0;
        translateY = 100;
        duration = 1.5;
      } else if (elem.classList.contains('gs_reveal_fromTop')) {
        translateX = 0;
        translateY = -100;
        duration = 1.5;
      }

      elem.style.transform = `translate(${translateX}px, ${translateY}px)`;
      elem.style.opacity = '0';

      gsap.fromTo(
        elem,
        { x: translateX, y: translateY, autoAlpha: 0 },
        {
          duration: duration,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: 'expo',
          overwrite: 'auto',
        }
      );
    };

    const onEnter = () => {
      animateFrom(1);
    };

    const onEnterBack = () => {
      animateFrom(-1);
    };

    const onLeave = () => {
      gsap.to(elem, {
        autoAlpha: 0,
        duration: durationOut,
        delay: delayOut,
        ease: 'expo',
        overwrite: 'auto',
      });
    };

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: elem,
      onEnter,
      onEnterBack,
      onLeave,
    });
  }, [delayOut, durationOut]);

  return (
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
        x: 0,
        y: 0,
      }}
      skipOutro={skipOutro}
      watch={watch}
      start={start}
      end={end}
      scrub={scrub}
      markers={markers}
    >
      <div ref={container} className={classNames({ 'overflow-hidden': overflowHidden, [className!]: className })}>
        {children}
      </div>
    </AnimateInOut>
  );
};

export default Reveal;
