/* src/app/_components/_shared/ScrollIndicator.tsx */

'use client';
import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handler = () => {
      const documentElement = document.documentElement;
      const scrolled = documentElement.scrollTop;

      const maxHeight = documentElement.scrollHeight - documentElement.clientHeight;

      const scrollPercent = (scrolled / maxHeight) * 100;

      setScroll(scrollPercent);
    };
    window.addEventListener('scroll', handler);

    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="fixed z-50 h-1 w-screen bg-white">
      <div className="h-full bg-orange" style={{ width: scroll + '%' }}></div>
    </div>
  );
};
export default ScrollIndicator;
