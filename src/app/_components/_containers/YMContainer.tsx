/* src/app/_components/_containers/YMContainer.tsx */

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function YMContainer({ children }: Props) {
  return <div className="mt-20 xl:mt-40">{children}</div>;
}
