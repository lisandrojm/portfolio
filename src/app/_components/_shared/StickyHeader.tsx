/* src/app/_components/_shared/StickyHeader.tsx */

import React from 'react';
import Link from 'next/link';
import Icon from '@/_components/_icons/Icons';
import components from '@/_components/_icons/Icons'; // Asegúrate de importar 'components' desde donde sea necesario
import XContainer from '@/_components/_containers/XContainer';
import TranslateInOut from '@/_components/_gsap/TranslateInOut';

interface StickyFooterProps {
  customTextLeft?: string;
  customIcon?: string;
}

const StickyHeader: React.FC<StickyFooterProps> = ({ customTextLeft, customIcon }) => {
  return (
    <div className="sticky top-0 z-10 w-full backdrop-blur">
      <XContainer>
        <div className="border-b border-white">
          <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
            <Link href={`#${customTextLeft}`} className="ms-2 inline-flex items-center pb-2 pt-4">
              <div className="md:text-1xl me-2 font-serif text-xl italic text-orange">{customIcon && <Icon kind={customIcon as keyof typeof components} />}</div>
              <div>{customTextLeft && <p className="font-serif text-2xl font-bold uppercase italic text-white md:text-3xl">{customTextLeft}</p>}</div>
            </Link>
          </TranslateInOut>
        </div>
      </XContainer>
    </div>
  );
};

export default StickyHeader;
