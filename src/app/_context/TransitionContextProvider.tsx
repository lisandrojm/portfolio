/* src/app/_components/_pages/_layout/TransitionContextProvider.tsx */

'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface TransitionContextProps {
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
  resetTimeline: () => void;
}

const TransitionContext = createContext<TransitionContextProps | undefined>(undefined);

export const TransitionContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const timelineRef = useRef<gsap.core.Timeline>(gsap.timeline());

  const [timeline, setTimeline] = useState(gsap.timeline({ paused: true }));

  const resetTimeline = () => {
    timeline.clear();
  };

  useEffect(() => {
    const currentTimeline = timelineRef.current;

    return () => {
      currentTimeline.kill();
    };
  }, []);

  return <TransitionContext.Provider value={{ timeline, setTimeline, resetTimeline }}>{children}</TransitionContext.Provider>;
};

export const useTransitionContext = (): TransitionContextProps => {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error('useTransitionContext must be used within a TransitionContextProvider');
  }

  return context;
};
