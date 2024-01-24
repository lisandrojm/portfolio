/* src/app/_components/_accordion/AccordionItem.tsx */
'use client';

import styles from '@/_styles/_components/AccordionItem.module.css';
import gsap from 'gsap';
import { useId } from 'react';
import useAccordionItem from '@/_context/AccordionContext';
import useIsomorphicLayoutEffect from '@/_hooks/useIsomorphicLayoutEffect';
import { useTransitionContext } from '@/_context/TransitionContextProvider';
import { slugify } from '@/_utils/string';
import Chevron from '@/_components/_svgs/Chevron';
import classNames from 'classnames';
import React from 'react';

interface AccordionItemProps {
  children: React.ReactNode;
  header: string;
  headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  headingClassName?: string;
  id: string;
  initialExpanded?: boolean;
  durationIn?: number;
  durationOut?: number;
  delay?: number;
  delayOut?: number;
  ease?: string;
  skipOutro?: boolean;
  watch?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean;
  markers?: boolean;
  toggle: (expanded: boolean) => void;
}

export default function AccordionItem({ children, header, headingTag = 'h3', headingClassName = '', id, initialExpanded, durationIn = 0.5, durationOut = 0.25, delay = 0, delayOut = 0, ease = 'sine.out', skipOutro, watch, start = 'top bottom', end = 'bottom top', scrub = false, markers }: AccordionItemProps) {
  const element = React.useRef<HTMLLIElement>(null);
  const container = React.useRef<HTMLDivElement>(null);
  const content = React.useRef<HTMLDivElement>(null);
  const { expanded, toggle } = useAccordionItem({ id, initialExpanded, container, content });
  const buttonId = `${slugify(header)}-${useId()}`;
  const panelId = `${slugify(header)}-${useId()}`;
  const { timeline } = useTransitionContext();
  const from = {
    opacity: 0,
    transform: `translate(0, 100%)`,
  };

  useIsomorphicLayoutEffect(() => {
    const scrollTrigger = watch
      ? {
          scrollTrigger: {
            trigger: element.current,
            start,
            end,
            scrub,
            markers: markers,
          },
        }
      : {};

    const ctx = gsap.context(() => {
      /* Intro animation */
      gsap.to(element.current, {
        ease,
        opacity: 1,
        x: 0,
        y: 0,
        delay,
        duration: durationIn,
        ...scrollTrigger,
      });

      /* Outro animation */
      if (!skipOutro) {
        timeline.add(
          gsap.to(element.current, {
            ...from,
            delay: delayOut,
            duration: durationOut,
          }),
          0
        );
      }
    }, element);
    return () => ctx.revert();
  }, []);

  return (
    <li ref={element} className={styles['c-accordions__item']} style={{ ...from }}>
      <HeadingComponent header={header} headingTag={headingTag} headingClassName={headingClassName} id={id} buttonId={buttonId} panelId={panelId} expanded={expanded} toggle={toggle} />
      <div className={styles['c-accordions__item__container']} id={panelId} aria-labelledby={buttonId} ref={container}>
        <div className={styles['c-accordions__item__container--content']} ref={content}>
          {children}
        </div>
      </div>
    </li>
  );
}

interface HeadingProps {
  header: string;
  headingTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  headingClassName: string;
  buttonId: string;
  panelId: string;
  expanded: boolean;
  id: string;
  toggle: (expanded: boolean) => void; // Agregar el argumento 'expanded'
}

function HeadingComponent({ header, headingTag, headingClassName, buttonId, panelId, expanded, toggle }: HeadingProps) {
  const validHeadingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const safeHeading = headingTag ? headingTag.toLowerCase() : '';
  const Heading = validHeadingTags.includes(safeHeading) ? safeHeading : 'h3';

  return (
    <button
      type="button"
      id={buttonId}
      aria-controls={panelId}
      aria-expanded={expanded}
      onClick={() => toggle(!expanded)} // Llama a toggle con el valor opuesto de 'expanded'
      className={classNames(
        styles['c-accordions__item__button'],
        {
          [styles['is-expanded']]: expanded,
        },
        headingClassName
      )}
    >
      {header}
      <Chevron />
    </button>
  );
}
