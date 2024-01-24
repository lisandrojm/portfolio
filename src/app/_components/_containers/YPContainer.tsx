/* src/app/_components/_containers/YPContainer.tsx */

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function YPContainer({ children }: Props) {
  return <div className="pt-10 xl:pt-20">{children}</div>;
}
