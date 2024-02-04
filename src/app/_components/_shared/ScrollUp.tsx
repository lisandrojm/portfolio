/* src/app/_components/_shared/ScrollUp.tsx */

'use client';

import React, { useEffect, useState } from 'react';
import Icon from '@/_components/_icons/Icons';
import ThemeSwitcher from '@/_components/_shared/ThemeSwitcher';

const ScrollUp: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.stopPropagation();
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
    <span className={`fixed bottom-[61px] right-0 z-40 flex cursor-pointer items-center justify-center border-solid py-2 pb-1 transition-all duration-300 ease-out ${showButton ? 'right-[30px]' : 'translate-x-full'} flex flex-col`} onClick={scrollToTop}>
      <button className="cursor-scale small animate-bounce p-1 text-3xl text-white md:text-3xl">
        <Icon kind="arrowUpCg" />
      </button>
      <div className="border-t border-solid border-orange pt-3" onClick={(e) => e.stopPropagation()}>
        <ThemeSwitcher />
      </div>
    </span>
  );
};

export default ScrollUp;
