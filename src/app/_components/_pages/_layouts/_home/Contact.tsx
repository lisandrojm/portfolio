/* src/app/_components/_pages/_layouts/_home/Contact.tsx */

'use client';

import Link from 'next/link';
import { Button, FloatingLabelInput, FloatingLabelTextarea } from '@/_components/_ui';
import Icon from '@/_components/_icons/Icons';
import StickyHeader from '@/_components/_shared/StickyHeader';
import XContainer from '@/_components/_containers/XContainer';
import YMContainer from '@/_components/_containers/YMContainer';
import TranslateInOut from '@/_components/_gsap/TranslateInOut';
import ScaleInOut from '@/_components/_gsap/ScaleInOut';

export default function Contact() {
  return (
    <YMContainer>
      <section id="contact" className="bg-black_a">
        <StickyHeader customTextLeft="contact" customIcon="contact" />
        <XContainer>
          <div className="flex h-[calc(100svh_-77px)] md:justify-center">
            <div className="flex h-full w-full flex-col justify-center lg:w-1/2">
              <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                <Link href="mailto:lisandrojm@gmail.com">
                  <div className="mb-3 flex text-2xl text-orange md:text-3xl">
                    <span className="me-2 text-3xl">
                      <Icon kind="lightbulb" />
                    </span>
                    <h2 className="font-regular text-3xl uppercase italic text-orange md:text-4xl">
                      Are you minding
                      <br />a proyect?
                    </h2>
                  </div>
                </Link>
              </TranslateInOut>
              <form action="#" method="POST">
                <div className="grid grid-cols-1 gap-y-4">
                  <div className="sm:col-span-3">
                    <div className="bg-black_a">
                      <TranslateInOut overflowHidden delay={0.3} y={100} start="-100% bottom" end="top top" watch>
                        <FloatingLabelInput id="name" label="Name" type="text" name="name" autoComplete="name" />
                      </TranslateInOut>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="bg-black_a">
                      <TranslateInOut overflowHidden delay={0.4} y={100} start="-100% bottom" end="top top" watch>
                        <FloatingLabelInput id="email" label="Email" type="email" name="email" autoComplete="email" required />
                      </TranslateInOut>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="bg-black_a">
                      <TranslateInOut overflowHidden delay={0.5} y={100} start="-100% bottom" end="top top" watch>
                        <FloatingLabelTextarea id="message" label="Message" name="message" autoComplete="message" rows={4} defaultValue={''} />
                      </TranslateInOut>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <ScaleInOut delay={0.6} ease="elastic.out" watch>
                    <div className="text-start">
                      <Button type="submit">Send</Button>
                    </div>
                  </ScaleInOut>
                  <TranslateInOut overflowHidden delay={0.6} y={100} start="-100% bottom" end="top top" watch>
                    <Link href="mailto:lisandrojm@gmail.com">
                      <p className="text-serif flex items-center text-sm italic text-white">
                        I
                        <span className="px-2 text-orange">
                          <Icon kind="heart" />
                        </span>
                        the challenges...
                      </p>
                    </Link>
                  </TranslateInOut>
                </div>
              </form>
            </div>
          </div>
        </XContainer>
      </section>
    </YMContainer>
  );
}
