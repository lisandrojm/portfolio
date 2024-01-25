// src/app/_components/_gsap/GsapScrollReveal.tsx

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface RevealProps {
  children: React.ReactNode;
  className: string;
}

const Reveal: React.FC<RevealProps> = ({ children, className }) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    (context, contextSafe) => {
      const elem = container.current;

      if (!elem) return;

      const animateFrom = (direction: number) => {
        direction = direction || 1;
        let x = 0,
          y = direction * 100;
        let duration = 1.25;

        if (elem.classList.contains('gs_reveal_fromLeft')) {
          x = -100;
          y = 0;
          duration = 1.25;
        } else if (elem.classList.contains('gs_reveal_fromRight')) {
          x = 100;
          y = 0;
          duration = 1.25;
        } else if (elem.classList.contains('gs_reveal_fromBottomF')) {
          x = 0;
          y = 100;
          duration = 1.25;
        } else if (elem.classList.contains('gs_reveal_fromBottomS')) {
          x = 0;
          y = 100;
          duration = 1.25;
        } else if (elem.classList.contains('gs_reveal_fromUp')) {
          x = 0;
          y = -100;
          duration = 1.25;
        }

        elem.style.transform = `translate(${x}px, ${y}px)`;
        elem.style.opacity = '0';

        gsap.fromTo(
          elem,
          { x: x, y: y, autoAlpha: 0 },
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
        // Removed hide() as it was not being used
      };

      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: elem,
        onEnter,
        onEnterBack,
        onLeave,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
