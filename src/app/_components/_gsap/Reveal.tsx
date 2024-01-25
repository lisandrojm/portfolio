import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, className }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elem = container.current;

    if (!elem) return;

    const animateFrom = (direction: number) => {
      direction = direction || 1;
      let x = 0,
        y = direction * 100;
      let duration = 1.5;

      if (elem.classList.contains('gs_reveal_fromLeft')) {
        x = -100;
        y = 0;
        duration = 1.5;
      } else if (elem.classList.contains('gs_reveal_fromRight')) {
        x = 100;
        y = 0;
        duration = 1.5;
      } else if (elem.classList.contains('gs_reveal_fromBottom')) {
        x = 0;
        y = 100;
        duration = 1.5;
      } else if (elem.classList.contains('gs_reveal_fromTop')) {
        x = 0;
        y = -100;
        duration = 1.5;
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
  }, []); // Empty dependency array ensures that the effect runs only once after mount

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
