/* src/app/_components/_containers/YPContainer.tsx */

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function YMSinglePageContainer({ children }: Props) {
  return <div className="py-5 xl:py-10">{children}</div>;
}
