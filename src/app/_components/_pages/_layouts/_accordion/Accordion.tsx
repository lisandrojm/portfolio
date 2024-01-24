/* src/app/_components/_pages/_proyect/Proyect.tsx */

'use client';

import XContainer from '@/_components/_containers/XContainer';
import YMSingleSectionContainer from '@/_components/_containers/YMSingleSectionContainer';
import React, { useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';

interface ProyectProps {}

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function Proyect() {
  const [open, setOpen] = useState<number>(1);

  const handleOpen = (value: number) => setOpen((prevOpen) => (prevOpen === value ? 0 : value));

  return (
    <YMSingleSectionContainer>
      <section className="bg-black_a">
        <XContainer>
          <div className="flex flex-col items-center">
            <div className="w-full lg:w-1/2">
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />} placeholder={''}>
                <AccordionHeader onClick={() => handleOpen(1)} placeholder={''}>
                  What is Material Tailwind?
                </AccordionHeader>
                <AccordionBody>We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express ourselves and actualize our dreams.</AccordionBody>
              </Accordion>
            </div>
          </div>
        </XContainer>
      </section>
    </YMSingleSectionContainer>
  );
}
