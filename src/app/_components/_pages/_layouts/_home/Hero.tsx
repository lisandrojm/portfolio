/* src/app/_components/_pages/_layouts/_home/Hero.tsx */

'use client';
import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/_components/_icons/Icons';
import { Button, Props as ButtonProps } from '@/_components/_ui/Button';
import XContainer from '@/_components/_containers/XContainer';
import TranslateInOut from '@/_components/_gsap/TranslateInOut';
import DateDisplay from '@/_components/_shared/DateDisplay';

export default function Hero() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleButtonClick = () => {
    setIsContentVisible(!isContentVisible);
  };
  return (
    <section>
      <XContainer>
        <div className="relative flex h-[calc(100svh_-77px)] flex-col items-end justify-center text-end">
          <div className="group">
            <div className="absolute left-0 top-0 flex justify-center text-start md:flex-col">
              <button onClick={handleButtonClick}>
                <DateDisplay />
              </button>
              {isContentVisible && (
                <div className="ms-5 pt-5 opacity-100 transition-opacity duration-500 ease-out md:ms-0 md:pt-1">
                  <div className="text-xs text-white">
                    <div className="font-flex flex">
                      <div className="me-2 text-base">
                        <Icon kind="sunglassesEmoji" />
                      </div>
                      <p>Its a fake availability.</p>
                    </div>
                    <div className="font-flex mt-1">
                      <p>
                        <Link href="#contact" className="cursor-scale small underline-hover me-2 font-bold uppercase italic text-orange">
                          Contact me
                        </Link>
                        to check my actual status
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="xs--title font-regular pe-2 font-bold uppercase italic">
            <ul className="flex flex-col items-end">
              <TranslateInOut overflowHidden delay={0.4} y={100}>
                <Link href="#works">
                  <div className="flex items-end">
                    <li className="xs--margin cursor-scale flex items-end text-7xl text-orange sm:text-[130px]">
                      <span className="underline-hover">Works</span>
                      <div className="xs--hide mb-2 text-base md:text-2xl">
                        <Icon kind="internalLink" />
                      </div>
                    </li>
                  </div>
                </Link>
              </TranslateInOut>
              <TranslateInOut overflowHidden delay={0.5} y={100}>
                <Link href="#skills">
                  <div className="flex items-end">
                    <li className="xs--margin cursor-scale flex items-end text-7xl text-orange sm:text-[130px]">
                      <span className="underline-hover">Skills</span>
                      <div className="xs--hide mb-2 text-base md:text-2xl">
                        <Icon kind="internalLink" />
                      </div>
                    </li>
                  </div>
                </Link>
              </TranslateInOut>
            </ul>
          </div>
          <div>
            <TranslateInOut overflowHidden delay={0.6} y={100}>
              <div className="pe-1 pt-2 font-serif italic">
                <p className=" text-xl">
                  Hi, my name is Lisandro. <br /> I am a Front End developer <br />
                  based in Argentina.Testin 8seg
                </p>
              </div>
            </TranslateInOut>
            <TranslateInOut overflowHidden delay={0.7} y={100}>
              <div className="pb-2 pt-4">
                <Link href="#contact" className="pb-2 pt-4" aria-label="Form">
                  <Button size="2xl" font="mono">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </TranslateInOut>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform">
          <Link href="#works">
            <button className="cursor-scale small animate-bounce p-1 text-3xl text-white md:text-4xl">
              <Icon kind="arrowDownChevron" />
            </button>
          </Link>
        </div>
      </XContainer>
    </section>
  );
}
