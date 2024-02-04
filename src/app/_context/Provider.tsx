/* src/app/_context/Provider.tsx */

'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect, ReactNode } from 'react';
/* import Cursor from '@/_components/_gsap/Cursor'; */

type Props = {
  children: ReactNode;
};

const Provider: React.FC<Props> = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider enableSystem={false} attribute="data-theme" defaultTheme="dark">
      <ProgressBar height="4px" color="#ff9e63" options={{ showSpinner: false }} />
      {children}
      {/*       <Cursor /> */}
    </ThemeProvider>
  );
};

export default Provider;
