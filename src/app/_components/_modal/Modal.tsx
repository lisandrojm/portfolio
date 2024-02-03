/* src/app/_components/_modal/Modal.tsx */

import { forwardRef, useCallback, useEffect, Ref } from 'react';

interface ModalProps {
  children: React.ReactNode;
  showModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ children, showModal, setModal }: ModalProps, ref: Ref<HTMLDivElement>) {
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) {
        setModal(false);
      }
    },
    [showModal, setModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <>
      {showModal && (
        <section className="pointer-events-none fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black_a opacity-0 backdrop-blur transition-opacity" ref={ref}>
          <div className="absolute left-0 top-0 h-full w-full" onClick={() => setModal(false)} />
          {children}
        </section>
      )}
    </>
  );
}

export default forwardRef<HTMLDivElement, ModalProps>(Modal);
