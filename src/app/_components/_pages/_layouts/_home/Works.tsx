/* src/app/_components/_pages/_layouts/_home/Works.tsx */

'use client';

import LinkIcon from '@/_components/_icons/LinkIcons';
import Image from 'next/image';
import StickyHeader from '@/_components/_shared/StickyHeader';
import Icon from '@/_components/_icons/Icons';
import XContainer from '@/_components/_containers/XContainer';
import YMContainer from '@/_components/_containers/YMContainer';
import YPContainer from '@/_components/_containers/YPContainer';
import RotateInOut from '@/_components/_gsap/RotateInOut';
import RotateInOut3D from '@/_components/_gsap/RotateInOut3D';
import useDemoModal from '@/_components/_modal/DemoModal';
import { SetStateAction } from 'react';
import TranslateInOut from '@/_components/_gsap/TranslateInOut';

export default function Works() {
  const { DemoModal: DemoModal1, setModal: setModal1 } = useDemoModal();
  const { DemoModal: DemoModal2, setModal: setModal2 } = useDemoModal();
  const { DemoModal: DemoModal3, setModal: setModal3 } = useDemoModal();
  const { DemoModal: DemoModal4, setModal: setModal4 } = useDemoModal();

  return (
    <YMContainer>
      <section id="works" className="bg-black_a">
        <StickyHeader customTextLeft="works" customIcon="works" />
        <XContainer>
          <YPContainer>
            <div className="flex items-center justify-center pb-10 font-serif italic md:pb-20 ">
              <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                <div className="flex items-center ">
                  <div className="flex justify-center">
                    <div className="flex w-1/2 justify-center">
                      <RotateInOut fade={false} durationIn={0.6} rotateTo={360} start="botom bottom" end="top top" watch scrub>
                        <span className="text-4xl text-white md:text-5xl">
                          <Icon kind="star" />
                        </span>
                      </RotateInOut>
                    </div>
                  </div>
                  <div className="ms-3 text-2xl text-orange md:text-3xl">
                    <h2>Selected Projects</h2>
                  </div>
                </div>
              </TranslateInOut>
            </div>
            {/*Projects */}
            <div className="flex flex-col gap-14">
              {/*Project 1 */}
              <RotateInOut3D durationIn={0.5 + Math.random()} y="100px" start="-100px bottom" watch>
                <div className="w-full">
                  <div className="flex flex-col justify-start text-base md:flex-row-reverse md:items-center md:justify-end md:text-lg">
                    <button onClick={() => setModal1(true)} aria-label="Open Project Modal">
                      <div className="flex justify-start ">
                        <Image className="w-full" src="/_static/_img/proyect-img.webp" width={482} height={227} alt="Picture of the author" priority />
                      </div>
                    </button>
                    <div className="mt-2 md:mb-0">
                      <button onClick={() => setModal1(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project Modal">
                        <div className="flex items-end text-white">
                          <div className="font-flex text-2xl font-bold uppercase md:text-3xl">
                            <h2>Project1</h2>
                          </div>
                          <span className="text-sm">
                            <Icon kind="internalLink" />
                          </span>
                        </div>
                        <div className="font-flextext-base font-bold text-orange">
                          <p>Description1</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </RotateInOut3D>
              {/*Project 2 */}
              <RotateInOut3D durationIn={0.5 + Math.random()} y="100px" start="-100px bottom" watch>
                <div className="w-full">
                  <div className="flex flex-col justify-start text-base md:flex-row-reverse md:items-center md:text-lg">
                    <button onClick={() => setModal2(true)} aria-label="Open Project Modal">
                      <div className="flex justify-start md:justify-end lg:me-5">
                        <Image className="w-full" src="/_static/_img/proyect-img.webp" width={482} height={227} alt="Picture of the author" priority />
                      </div>
                    </button>
                    <div className="mt-2 md:mb-0">
                      <button onClick={() => setModal2(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project Modal">
                        <div className="flex justify-start gap-3">
                          <div className="flex items-end text-white">
                            <div className="font-flex text-2xl font-bold uppercase leading-8 md:text-3xl">
                              <h2>Project2</h2>
                            </div>
                            <span className="ms-1 text-sm">
                              <Icon kind="externalLink" />
                            </span>
                          </div>
                        </div>
                        <div className="text-base font-bold text-orange">
                          <p>Description2</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </RotateInOut3D>
              {/*Project 3 */}
              <RotateInOut3D durationIn={0.5 + Math.random()} y="100px" start="-100px bottom" watch>
                <div className="w-full">
                  <div className="flex flex-col justify-start text-base md:flex-row-reverse md:items-center md:justify-end md:text-lg">
                    <button onClick={() => setModal3(true)} aria-label="Open Project Modal">
                      <div className="flex justify-start">
                        <Image className="w-full" src="/_static/_img/proyect-img.webp" width={482} height={227} alt="Picture of the author" priority />
                      </div>
                    </button>
                    <div className="mt-2 md:mb-0">
                      <button onClick={() => setModal3(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project Modal">
                        <div className="flex items-end text-white">
                          <div className="font-flex text-2xl font-bold uppercase md:text-3xl">
                            <h2>Project3</h2>
                          </div>
                          <span className="text-sm">
                            <Icon kind="internalLink" />
                          </span>
                        </div>
                        <div className="font-flextext-base font-bold text-orange">
                          <p>Description3</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </RotateInOut3D>
              {/*Project 4 */}
              <RotateInOut3D durationIn={0.5 + Math.random()} y="100px" start="-100px bottom" watch>
                <div className="w-full">
                  <div className="flex flex-col justify-start text-base md:flex-row-reverse md:items-center md:text-lg">
                    <button onClick={() => setModal4(true)} aria-label="Open Project Modal">
                      <div className="flex justify-start md:justify-end lg:me-5">
                        <Image className="w-full" src="/_static/_img/proyect-img.webp" width={482} height={227} alt="Picture of the author" priority />
                      </div>
                    </button>
                    <div className="mt-2 md:mb-0">
                      <button onClick={() => setModal4(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project Modal">
                        <div className="flex justify-start gap-3">
                          <div className="flex items-end text-white">
                            <div className="font-flex text-2xl font-bold uppercase leading-8 md:text-3xl">
                              <h2>Project4</h2>
                            </div>
                            <span className="ms-1 text-sm">
                              <Icon kind="externalLink" />
                            </span>
                          </div>
                        </div>
                        <div className="text-base font-bold text-orange">
                          <p>Description4</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </RotateInOut3D>
            </div>
            {/* Modal */}
            {/* Project-1 Modal */}
            <DemoModal1
              title="Proyect1"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa veniam, voluptatum labore qui hic illo in."
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="react" ariaLabel="Reactjs Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="nextjs" ariaLabel="Nextjs Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="tailwind" ariaLabel="Tailwindcss Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="vercel" ariaLabel="Vercel Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://github.com/lisandrojm"
              hrefCode="https://github.com/lisandrojm/portfolio"
              src="/_static/_img/proyect-img.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
            />
            {/* Project-2 Modal */}
            <DemoModal2
              title="Proyect2"
              content="Description2"
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="react" ariaLabel="Reactjs Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="nextjs" ariaLabel="Nextjs Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="tailwind" ariaLabel="Tailwindcss Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="vercel" ariaLabel="Vercel Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://github.com/lisandrojm"
              hrefCode="https://github.com/lisandrojm/portfolio"
              src="/_static/_img/proyect-img.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
            />
            {/* Project-3 Modal */}
            <DemoModal3
              title="Proyect3"
              content="Description3"
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="react" ariaLabel="Reactjs Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="nextjs" ariaLabel="Nextjs Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="tailwind" ariaLabel="Tailwindcss Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="vercel" ariaLabel="Vercel Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://github.com/lisandrojm"
              hrefCode="https://github.com/lisandrojm/portfolio"
              src="/_static/_img/proyect-img.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
            />
            {/* Project4- Modal */}
            <DemoModal4
              title="Proyect4"
              content="Description4"
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="react" ariaLabel="Reactjs Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="nextjs" ariaLabel="Nextjs Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="tailwind" ariaLabel="Tailwindcss Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="vercel" ariaLabel="Vercel Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://github.com/lisandrojm"
              hrefCode="https://github.com/lisandrojm/portfolio"
              src="/_static/_img/proyect-img.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
            />
            {/* Modal */}
          </YPContainer>
        </XContainer>
      </section>
    </YMContainer>
  );
}
