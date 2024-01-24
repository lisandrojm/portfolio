/* src/app/_components/_shared/ScrollUp.tsx */

'use client';

import React, { useEffect, useState } from 'react';
import Icon from '@/_components/_icons/Icons';

const ScrollUp: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY >= 700);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  return (
    <span className={`fixed bottom-10 right-0 z-40 flex cursor-pointer items-center justify-center border-solid pb-1 transition-all duration-300 ease-out ${showButton ? 'right-10' : 'translate-x-full'}`} onClick={scrollToTop}>
      <button className="animate-bounce p-1 text-3xl text-white md:text-4xl">
        <Icon kind="arrowUpCg" />
      </button>
    </span>
  );
};

export default ScrollUp;
