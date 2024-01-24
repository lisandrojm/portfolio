/* src/app/(routes)/not-found.tsx */

import Link from 'next/link';

export default function RootNotFound() {
  return (
    <div className="flex h-svh flex-col items-center justify-center">
      <div>
        <div>
          <h2 className="uppercase text-red">Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/">
            Return <span className="text-white underline">HOME</span>
          </Link>
        </div>
        <Link href="/">
          <h1 className="mt-3 border-t pb-2 pt-1 text-sm">
            <span className="font-mono text-orange">lisandrojm </span>
            <span className="font-serif text-white">Portfolio</span>
          </h1>
        </Link>
      </div>
    </div>
  );
}
