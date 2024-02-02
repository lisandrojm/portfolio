/* src/app/(routes)/loading.tsx */

'use client';

import React, { useEffect, useState } from 'react';

interface RootLoadingProps {
  onLoadingComplete: () => void;
}

const RootLoading: React.FC<RootLoadingProps> = ({ onLoadingComplete }) => {
  useEffect(() => {
    const loadStart = window.performance.timing.responseStart;
    const loadEnd = window.performance.timing.loadEventEnd;

    const loadTime = loadEnd - loadStart;

    const timeout = setTimeout(
      () => {
        onLoadingComplete();
      },
      Math.max(1000, loadTime)
    );

    return () => clearTimeout(timeout);
  }, [onLoadingComplete]);

  return (
    <div className="flex h-svh flex-col items-center justify-center">
      <h1>
        <span className="text-md font-mono text-xl text-orange">lisandrojm </span>
        <span className="font-serif text-2xl">Portfolio</span>
      </h1>
    </div>
  );
};

export default RootLoading;
