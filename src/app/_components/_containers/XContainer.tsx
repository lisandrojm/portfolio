/* src/app/_components/_containers/XContainer.tsx */

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function XContainer({ children }: Props) {
  return <div className="container mx-auto px-4 xl:px-20 2xl:px-40">{children}</div>;
}
