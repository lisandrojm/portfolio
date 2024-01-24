/* src/app/_components/_accordion/Accordion.tsx */

import React, { ReactNode } from 'react';
import { AccordionContextProvider } from '@/_context/AccordionContext';
import styles from '@/_styles/_components/AccordionItem.module.css';

interface AccordionProps {
  children: ReactNode;
  allowMultiple: boolean;
}

export default function Accordion({ children, allowMultiple }: AccordionProps) {
  return (
    <AccordionContextProvider allowMultiple={allowMultiple}>
      <ul className={styles['c-accordions']}>{children}</ul>
    </AccordionContextProvider>
  );
}
