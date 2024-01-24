// components/ScrollIndicator.tsx
'use client';
import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handler = () => {
      const documentElement = document.documentElement;
      // get the scroll top position
      const scrolled = documentElement.scrollTop;

      // calculate the max height of the document
      const maxHeight = documentElement.scrollHeight - documentElement.clientHeight;

      // calculate the percentage
      const scrollPercent = (scrolled / maxHeight) * 100;

      // update state
      setScroll(scrollPercent);
    };
    // add event listener
    window.addEventListener('scroll', handler);

    // remove event listener on unmount
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="fixed z-50 h-1 w-screen bg-white">
      <div className="h-full bg-orange" style={{ width: scroll + '%' }}></div>
    </div>
  );
};
export default ScrollIndicator;
