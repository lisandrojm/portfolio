/* src/app/_components/_pages/_layouts/_home/Hero.tsx */

'use client';

import Link from 'next/link';
import Icon from '@/_components/_icons/Icons';
import { Button, Props as ButtonProps } from '@/_components/_ui/Button';
import XContainer from '@/_components/_containers/XContainer';
import TranslateInOut from '@/_components/_gsap/TranslateInOut';
import ScaleInOut from '@/_components/_gsap/ScaleInOut';
export default function Hero() {
  return (
    <section>
      <XContainer>
        <div className="flex h-[calc(100svh_-77px)] flex-col items-end justify-center text-end">
          <div className="xs--title font-regular pe-2 font-bold uppercase italic">
            <ul className="flex flex-col items-end">
              <TranslateInOut overflowHidden delay={0.4} y={100}>
                <Link href="#works">
                  <div className="flex items-end">
                    <li className="xs--margin flex items-end text-7xl text-orange sm:text-[130px]">
                      Works
                      <div className="xs--hide mb-2 text-lg md:text-3xl">
                        <Icon kind="internalLink" />
                      </div>
                    </li>
                  </div>
                </Link>
              </TranslateInOut>
              <TranslateInOut overflowHidden delay={0.5} y={100}>
                <Link href="#skills">
                  <div className="flex items-end">
                    <li className="xs--margin flex items-end text-7xl text-orange sm:text-[130px]">
                      Skills
                      <div className="xs--hide mb-2 text-lg md:text-3xl">
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
                  Hi, my name is Lisandro. <br /> I am a Full Stack developer <br />
                  based in Argentina.
                </p>
              </div>
            </TranslateInOut>
            <ScaleInOut delay={0.7} durationIn={1} ease="elastic.out">
              <div className="pb-2 pt-4">
                <Link href="#contact" className="pb-2 pt-4" aria-label="Form">
                  <Button size="2xl" font="mono">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </ScaleInOut>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform">
          <Link href="#works">
            <button className="animate-bounce p-1 text-3xl text-white md:text-4xl">
              <Icon kind="arrowDownChevron" />
            </button>
          </Link>
        </div>
      </XContainer>
    </section>
  );
}
