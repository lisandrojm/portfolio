/* src/app/(routes)/not-found.tsx */

'use client';

import Link from 'next/link';
import Cursor from '@/_components/_gsap/Cursor';
import Background from '@/_components/_shared/Background';

export default function RootNotFound() {
  return (
    <div className="flex h-svh flex-col items-center justify-center">
      <Background />
      <Cursor />
      <div>
        <div>
          <h2 className="uppercase text-red">Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/" className="cursor-scale small">
            Return <span className="underline-hover text-orange">HOME</span>
          </Link>
        </div>
        <Link href="/" className="cursor-scale small">
          <h1 className="underline-hover inline-flex items-center">
            <span className="gs_reveal_fromBottom font-mono text-orange">lisandrojm</span>
            <span className="gs_reveal_fromBottom px-2 font-mono text-white">|</span>
            <span className="font-serif text-white">Portfolio</span>
          </h1>
        </Link>
      </div>
    </div>
  );
}
