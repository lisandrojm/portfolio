/* src/app/_components/_gsap/Cursor.tsx */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    gsap.to(
      {},
      {
        duration: 0.016,
        repeat: -1,
        onRepeat: () => {
          // Verificar que cursorRef.current no sea nulo
          if (cursorRef.current) {
            gsap.set(cursorRef.current, {
              left: mouseX,
              top: mouseY,
            });
          }
        },
      }
    );

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLinkHover = (isSmall: boolean) => {
    // Verificar que cursorRef.current no sea nulo
    if (cursorRef.current) {
      cursorRef.current.classList.add('grow');

      if (isSmall) {
        cursorRef.current.classList.remove('grow');
        cursorRef.current.classList.add('grow-small');
      }
    }
  };

  const handleLinkLeave = () => {
    // Verificar que cursorRef.current no sea nulo
    if (cursorRef.current) {
      cursorRef.current.classList.remove('grow', 'grow-small');
    }
  };

  useEffect(() => {
    const cursorScaleElements = document.querySelectorAll('.cursor-scale');

    cursorScaleElements.forEach((link) => {
      link.addEventListener('mousemove', () => {
        handleLinkHover(link.classList.contains('small'));
      });
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      cursorScaleElements.forEach((link) => {
        link.removeEventListener('mousemove', () => {
          handleLinkHover(link.classList.contains('small'));
        });
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor transform-origin-center ease pointer-events-none fixed z-50 ml-[-15px] mt-[-15px] hidden h-8 w-8 rounded-full border-2 border-orange transition-transform duration-300 xl:block"></div>;
};

export default Cursor;
