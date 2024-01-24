/* src/app/_components/_modal/DemoModal.tsx */

'use client';

import Image from 'next/image';
import XContainer from '@/_components/_containers/XContainer';
import Link from 'next/link';
import gsap from 'gsap';
import { useState, useCallback, useMemo, useRef, FC, ReactNode, SetStateAction, Dispatch } from 'react';
import useLockedScroll from '@/_hooks/useLockedScroll';
import useIsomorphicLayoutEffect from '@/_hooks/useIsomorphicLayoutEffect';
import Modal from '@/_components/_modal/Modal';
import Icon from '@/_components/_icons/Icons';

interface DemoModalProps {
  title: string;
  content: ReactNode;
  hrefDemo: string;
  stack: ReactNode;
  hrefCode: string;
  showDemoModal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  src: string;
}

interface DemoModalContext {
  setModal: Dispatch<SetStateAction<boolean>>;
  DemoModal: FC<DemoModalProps>;
}

export default function useDemoModal(): DemoModalContext {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [locked, setLocked] = useLockedScroll(false);

  const setModal: Dispatch<SetStateAction<boolean>> = useCallback(
    (state: SetStateAction<boolean>) => {
      setShowDemoModal((prevState) => {
        const newState = typeof state === 'function' ? state(prevState) : state;
        setLocked(newState);
        return newState;
      });
    },
    [setShowDemoModal, setLocked]
  );

  const DemoModalCallback: FC<DemoModalProps> = useCallback(
    ({ title, content, stack, hrefDemo, hrefCode, src }) => {
      return <DemoModal title={title} content={content} stack={stack} hrefDemo={hrefDemo} hrefCode={hrefCode} src={src} showDemoModal={showDemoModal} setModal={setModal} />;
    },
    [showDemoModal, setModal]
  );

  return useMemo(
    () => ({
      setModal,
      DemoModal: DemoModalCallback,
    }),
    [setModal, DemoModalCallback]
  );
}

const DemoModal: FC<DemoModalProps> = ({ title, content, stack, showDemoModal, setModal, hrefDemo, hrefCode, src }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!showDemoModal) {
      return;
    }

    const ctx = gsap.context(() => {
      timeline.current = gsap
        .timeline({
          defaults: {
            ease: 'power4.out',
          },
        })
        .to(modalRef.current, {
          opacity: 1,
          pointerEvents: 'all',
          duration: 0.5,
        })
        .to('[data-modal]', {
          opacity: 1,
          /*           scaleY: 0.01, */
          x: 1,
          duration: 0.35,
        })
        .to('[data-modal]', {
          /*           scaleY: 1, */
          duration: 0.35,
        })
        .to('[data-modal-content]', {
          opacity: 1,
          duration: 0.35,
        })
        .to('[data-modal-close]', {
          opacity: 1,
          scale: 1,
          duration: 0.2,
        })
        .reverse();
    }, modalRef);

    return () => ctx.revert();
  }, [showDemoModal]);

  useIsomorphicLayoutEffect(() => {
    timeline.current?.reversed(!showDemoModal);
  }, [showDemoModal]);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };
  return (
    <Modal showModal={showDemoModal} setModal={setModal} ref={modalRef}>
      <div className={`flex h-full w-full justify-center transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-modal onClick={handleClick}>
        <XContainer>
          <div className="flex h-svh flex-col justify-between">
            <button className="flex w-full justify-end pt-4 text-3xl text-white" onClick={() => setModal(false)} data-modal-close>
              <Icon kind="arrowLeft" />
            </button>
            <div data-modal-content className="flex flex-col items-start justify-between gap-5 md:items-center">
              <Link href={hrefDemo} aria-label="Open Project Modal" className="flex w-full justify-center" target="_blank">
                <Image src={src} width={600} height={283} alt="Picture of the author" priority className="md:w-3/4" />
              </Link>
              <div className="flex flex-col md:w-3/4">
                <div className="font-flex text-2xl font-bold uppercase md:text-3xl">
                  <h2>{title}</h2>
                </div>
                <div className="text-base font-bold text-orange">
                  <p>{content}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-4 border-t border-white px-3 pb-6 pt-4 md:flex-row md:items-center">
              <div className="flex items-center justify-center">
                <h6 className="xs--hide text-md text-orange">
                  site stack<span className="px-2">|</span>
                </h6>
                {stack}
              </div>
              <div>
                <div className="flex justify-between gap-3">
                  <div className="me-5 flex items-center">
                    <Link href={hrefDemo} aria-label="Proyect" target="_blank">
                      <div className="flex items-center text-white">
                        <div className="text-2xl ">
                          <Icon kind="web" />
                        </div>
                        <div className=" flex items-center">
                          <div className="text-md me-1 ms-1 font-serif italic">
                            <p>demo</p>
                          </div>
                          <span className="text-sm">
                            <Icon kind="externalLink" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link href={hrefCode} aria-label="Proyect" target="_blank">
                      <div className="flex items-center text-white">
                        <div className="text-xl">
                          <Icon kind="github" />
                        </div>
                        <div className=" flex items-center">
                          <div className="text-md me-1 ms-1 font-serif italic text-white">
                            <p>code</p>
                          </div>
                          <span className="text-sm">
                            <Icon kind="externalLink" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </XContainer>
      </div>
    </Modal>
  );
};