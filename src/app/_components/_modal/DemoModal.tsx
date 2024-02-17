/* src/app/_components/_modal/DemoModal.tsx */

import Image from 'next/image';
import XContainer from '@/_components/_containers/XContainer';
import Link from 'next/link';
import gsap from 'gsap';
import { useState, useCallback, useMemo, useRef, FC, ReactNode, SetStateAction, Dispatch } from 'react';
import useLockedScroll from '@/_hooks/useLockedScroll';
import useIsomorphicLayoutEffect from '@/_hooks/useIsomorphicLayoutEffect';
import Modal from '@/_components/_modal/Modal';
import Icon from '@/_components/_icons/Icons';
import TranslateInOut from '@/_components/_gsap/TranslateInOut';
import Cursor from '@/_components/_gsap/Cursor';

interface DemoModalProps {
  title: string;
  content: ReactNode;
  hrefDemo: string;
  stack: ReactNode;
  hrefCode: string;
  showDemoModal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  src: string;
  isPrivate?: boolean;
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
    ({ title, content, stack, hrefDemo, hrefCode, src, isPrivate }) => {
      return <DemoModal title={title} content={content} stack={stack} hrefDemo={hrefDemo} hrefCode={hrefCode} src={src} showDemoModal={showDemoModal} setModal={setModal} isPrivate={isPrivate} />;
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

const DemoModal: FC<DemoModalProps> = ({ title, content, stack, showDemoModal, setModal, hrefDemo, hrefCode, src, isPrivate }) => {
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
          duration: 0.1,
        })
        .to('[data-modal]', {
          opacity: 1,
          x: 1,
          duration: 0,
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
      <Cursor />
      <div className={`flex h-full w-full justify-center transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-modal onClick={handleClick}>
        <XContainer>
          <div className="flex h-svh flex-col justify-between">
            <TranslateInOut overflowHidden delay={0.2} y={100}>
              <button className="small flex w-full justify-end pt-4 text-3xl text-white" onClick={() => setModal(false)} data-modal-close>
                <div className="cursor-scale small">
                  <Icon kind="arrowLeft" />
                </div>
              </button>
            </TranslateInOut>
            <TranslateInOut overflowHidden delay={0.3} y={100}>
              <div data-modal-content className="flex flex-col items-start justify-between gap-5 md:items-center">
                <Link href={hrefDemo} aria-label="Open Project Modal" className="flex w-full justify-center" target="_blank">
                  <Image src={src} width={1200} height={566} alt="Picture of the author" priority className="cursor-scale scale-hover md:w-3/4" />
                </Link>
                <div className="flex flex-col md:w-3/4">
                  <TranslateInOut overflowHidden delay={0.4} y={100}>
                    <Link href={hrefDemo} aria-label="Proyect" target="_blank">
                      <div className="font-flex cursor-scale small inline text-2xl font-bold text-white md:text-3xl">
                        <h2 className="underline-hover inline">{title}</h2>
                      </div>
                    </Link>
                  </TranslateInOut>
                  <TranslateInOut overflowHidden delay={0.5} y={100}>
                    <div className="text-base text-orange">
                      <p>{content}</p>
                    </div>
                  </TranslateInOut>
                </div>
              </div>
            </TranslateInOut>
            <TranslateInOut overflowHidden delay={0.6} y={100}>
              <div className="flex flex-col items-start justify-between gap-4 border-t border-white px-3 pb-6 pt-4 md:flex-row md:items-center">
                <div className="flex items-center justify-center">
                  <h6 className="xs--hide text-md text-orange">
                    stack<span className="px-2">|</span>
                  </h6>
                  {stack}
                </div>
                <div>
                  <div className="flex justify-between gap-3">
                    <div className="me-5 flex items-center">
                      <Link href={hrefDemo} aria-label="Proyect" target="_blank">
                        <div className="cursor-scale small flex items-center text-white">
                          <div className="text-2xl ">
                            <Icon kind="web" />
                          </div>
                          <div className=" flex items-center">
                            <div className="text-md cursor-scale small me-1 ms-1 font-serif italic">
                              <p className="underline-hover">demo</p>
                            </div>
                            <span className="text-sm">
                              <Icon kind="externalLink" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    {isPrivate ? (
                      <div className="small flex items-center text-white_a">
                        <div className="text-xl">
                          <Icon kind="lockCode" />
                        </div>
                        <div className=" flex items-center">
                          <div className="text-md me-1 ms-1 font-serif italic text-white_a">
                            <p>private code</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Link href={hrefCode} aria-label="Proyect" target="_blank">
                          <div className="cursor-scale small flex items-center text-white">
                            <div className="text-xl">
                              <Icon kind="github" />
                            </div>
                            <div className=" flex items-center">
                              <div className="text-md me-1 ms-1 font-serif italic text-white">
                                <p className="underline-hover">code</p>
                              </div>
                              <span className="text-sm">
                                <Icon kind="externalLink" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TranslateInOut>
          </div>
        </XContainer>
      </div>
    </Modal>
  );
};
