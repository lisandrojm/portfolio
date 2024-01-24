/* src/app/_components/_pages/_layouts/_home/Contact.tsx */

'use client';

import Link from 'next/link';
import { Button, FloatingLabelInput, FloatingLabelTextarea } from '@/_components/_ui';
import Icon from '@/_components/_icons/Icons';
import StickyHeader from '@/_components/_shared/StickyHeader';
import XContainer from '@/_components/_containers/XContainer';
import YMContainer from '@/_components/_containers/YMContainer';

export default function Contact() {
  return (
    <YMContainer>
      <section id="contact" className="bg-black_a">
        <StickyHeader customTextLeft="contact" customIcon="contact" />
        <XContainer>
          <div className="flex h-[calc(100svh_-77px)] md:justify-center">
            <div className="flex h-full w-full flex-col justify-center lg:w-1/2">
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
              <form action="#" method="POST">
                <div className="grid grid-cols-1 gap-y-4">
                  <div className="sm:col-span-3">
                    <div className="bg-black_a">
                      <FloatingLabelInput id="name" label="Name" type="text" name="name" autoComplete="name" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="bg-black_a">
                      <FloatingLabelInput id="email" label="Email" type="email" name="email" autoComplete="email" required />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="bg-black_a">
                      <FloatingLabelTextarea id="message" label="Message" name="message" autoComplete="message" rows={4} defaultValue={''} />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-start">
                    <Button type="submit">Send</Button>
                  </div>
                  <Link href="mailto:lisandrojm@gmail.com">
                    <p className="text-serif flex items-center text-sm italic text-white">
                      I
                      <span className="px-2 text-orange">
                        <Icon kind="heart" />
                      </span>
                      the challenges...
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </XContainer>
      </section>
    </YMContainer>
  );
}