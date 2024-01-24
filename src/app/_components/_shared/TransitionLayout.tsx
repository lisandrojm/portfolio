/* src/app/_components/_shared/T.tsx */

'use client';

import { useTransitionContext } from '@/_context/TransitionContextProvider';
import { useState, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import useIsomorphicLayoutEffect from '@/_hooks/useIsomorphicLayoutEffect';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

interface TransitionLayoutProps {
  children: ReactNode;
}

export default function TransitionLayout({ children }: TransitionLayoutProps) {
  const currentPathname = usePathname();
  const [currentPage, setCurrentPage] = useState({
    route: currentPathname,
    children,
  });
  const { timeline, resetTimeline } = useTransitionContext();

  useIsomorphicLayoutEffect(() => {
    if (currentPage.route !== currentPathname) {
      if (timeline.duration() === 0) {
        setCurrentPage({
          route: currentPathname,
          children,
        });
        ScrollTrigger.refresh();
        return;
      }

      timeline.play().then(() => {
        resetTimeline();
        setCurrentPage({
          route: currentPathname,
          children,
        });
        ScrollTrigger.refresh();
      });
    } else {
      ScrollTrigger.refresh();
    }
  }, [currentPathname]);

  return <div className="u-overflow--hidden">{currentPage.children}</div>;
}
