/* src/app/_components/_pages/_layouts/_home/Works.tsx */

'use client';

import Link from 'next/link';
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
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { useState } from 'react';

function AccordionIcon({ id, open }: { id: number; open: number }) {
  return (
    <div className="cursor-scale small">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </div>
  );
}
export default function Works() {
  const { DemoModal: DemoModal1, setModal: setModal1 } = useDemoModal();
  const { DemoModal: DemoModal2, setModal: setModal2 } = useDemoModal();
  const { DemoModal: DemoModal3, setModal: setModal3 } = useDemoModal();
  const { DemoModal: DemoModal4, setModal: setModal4 } = useDemoModal();
  const { DemoModal: DemoModal5, setModal: setModal5 } = useDemoModal();
  const { DemoModal: DemoModal6, setModal: setModal6 } = useDemoModal();

  const [open, setOpen] = useState<number>(0);

  const handleOpen = (panelId: number) => {
    setOpen((prevOpen) => (prevOpen === panelId ? 0 : panelId)); // Cambiado null a 0
  };

  return (
    <YMContainer>
      <section id="works" className="bg-black_a">
        <StickyHeader customTextLeft="works" customIcon="works" />
        <XContainer>
          <YPContainer>
            <div className="flex items-center justify-center pb-10 font-serif italic md:pb-20 ">
              <Link href={'#works'} className="cursor-scale small flex items-center text-center">
                <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                  <div className="flex items-center">
                    <div className="flex justify-center">
                      <div className="flex w-1/2 justify-center">
                        <RotateInOut fade={false} durationIn={0.6} rotateTo={360} start="botom bottom" end="top top" watch scrub>
                          <span className="mb-2 text-4xl text-white md:text-4xl">
                            <Icon kind="star" />
                          </span>
                        </RotateInOut>
                      </div>
                    </div>
                    <div className="underline-hover ms-3 pe-1 text-2xl font-bold text-orange md:text-3xl">
                      <h2>Selected Projects</h2>
                    </div>
                  </div>
                </TranslateInOut>
              </Link>
            </div>
            {/*Projects */}
            <div className="flex flex-col gap-14">
              {/*Project 1 */}
              <RotateInOut3D durationIn={0.5 + Math.random()} y="100px" start="-100px bottom" watch>
                <div className="w-full">
                  <div className="flex flex-col justify-start text-base md:flex-row-reverse md:items-center md:justify-end md:text-lg">
                    <button onClick={() => setModal1(true)} aria-label="Open Project Modal">
                      <div className="flex justify-start ">
                        <Image className="cursor-scale scale-hover w-full" src="/_static/_img/proyect-img.webp" width={482} height={227} alt="Picture of the author" priority />
                      </div>
                    </button>
                    <div className="mt-2 md:mb-0">
                      <button onClick={() => setModal1(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 1 Modal">
                        <div className="cursor-scale small cursor-scale small flex items-center text-white">
                          <div className="font-flex underline-hover text-2xl font-bold uppercase md:text-3xl">
                            <h2>Project1</h2>
                          </div>
                          <span className="ms-1 text-sm">
                            <Icon kind="internalLink" />
                          </span>
                        </div>
                      </button>
                      <div className="font-flextext-base cursor-scale small font-bold text-orange">
                        <p>Description1</p>
                      </div>
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
                        <Image className="cursor-scale scale-hover w-full" src="/_static/_img/proyect-img.webp" width={482} height={227} alt="Picture of the author" priority />
                      </div>
                    </button>
                    <div className="mt-2 md:mb-0">
                      <button onClick={() => setModal2(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 2 Modal">
                        <div className="flex justify-start gap-3">
                          <div className="cursor-scale small flex items-center text-white">
                            <div className="font-flex underline-hover text-2xl font-bold uppercase leading-8 md:text-3xl">
                              <h2>Project2</h2>
                            </div>
                            <span className="ms-1 text-sm">
                              <Icon kind="externalLink" />
                            </span>
                          </div>
                        </div>
                      </button>
                      <div className="cursor-scale small text-base font-bold text-orange">
                        <p>Description2</p>
                      </div>
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
                        <Image className="cursor-scale scale-hover w-full" src="/_static/_img/proyect-img.webp" width={482} height={227} alt="Picture of the author" priority />
                      </div>
                    </button>
                    <div className="mt-2 md:mb-0">
                      <button onClick={() => setModal3(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 3 Modal">
                        <div className="cursor-scale small flex items-center text-white">
                          <div className="font-flex underline-hover text-2xl font-bold uppercase md:text-3xl">
                            <h2>Project3</h2>
                          </div>
                          <span className="ms-1 text-sm">
                            <Icon kind="internalLink" />
                          </span>
                        </div>
                      </button>
                      <div className="font-flextext-base cursor-scale small font-bold text-orange">
                        <p>Description3</p>
                      </div>
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
                        <Image className="cursor-scale scale-hover w-full" src="/_static/_img/proyect-img.webp" width={482} height={227} alt="Picture of the author" priority />
                      </div>
                    </button>
                    <div className="mt-2 md:mb-0">
                      <button onClick={() => setModal4(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 4 Modal">
                        <div className="flex justify-start gap-3">
                          <div className="cursor-scale small flex items-center text-white">
                            <div className="font-flex underline-hover text-2xl font-bold uppercase leading-8 md:text-3xl">
                              <h2>Project4</h2>
                            </div>
                            <span className="ms-1 text-sm">
                              <Icon kind="externalLink" />
                            </span>
                          </div>
                        </div>
                      </button>
                      <div className="cursor-scale small text-base font-bold text-orange">
                        <p>Description4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RotateInOut3D>
            </div>
            {/* Accordion "Other projects*/}
            <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
              <div className="mt-20 border-t border-solid border-orange pt-2 lg:me-10 lg:w-1/3">
                <Accordion open={open === 1} icon={<AccordionIcon id={1} open={open} />} placeholder={''} className="pt-1 font-serif">
                  <AccordionHeader className="border-0 py-0" onClick={() => handleOpen(1)} placeholder={''}>
                    <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
                      <div className="cursor-scale small flex items-center">
                        <div className="me-2 text-3xl text-white">
                          <Icon kind="plus" />
                        </div>
                        <div>
                          <h3 className="underline-hover me-10 text-nowrap text-2xl italic text-orange md:text-3xl">Other projects</h3>
                        </div>
                      </div>
                    </TranslateInOut>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="font-flex mt-1 text-2xl text-white">
                      <ul>
                        {/*Project 5 */}
                        <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                          <li className="mb-1">
                            <button onClick={() => setModal5(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 5 Modal">
                              <div className="cursor-scale small flex items-center text-white">
                                <div className="font-flex underline-hover text-xl font-bold uppercase md:text-2xl">
                                  <h2>Project5</h2>
                                </div>
                                <span className="ms-1 text-sm text-orange">
                                  <Icon kind="internalLink" />
                                </span>
                              </div>
                            </button>
                          </li>
                        </TranslateInOut>
                        {/*Project 6 */}
                        <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                          <li className="mb-1">
                            <button onClick={() => setModal6(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 6 Modal">
                              <div className="cursor-scale small flex items-center text-white">
                                <div className="font-flex underline-hover text-xl font-bold uppercase md:text-2xl">
                                  <h2>Project6</h2>
                                </div>
                                <span className="ms-1 text-sm text-orange">
                                  <Icon kind="internalLink" />
                                </span>
                              </div>
                            </button>
                          </li>
                        </TranslateInOut>
                      </ul>
                    </div>
                  </AccordionBody>
                </Accordion>
              </div>
            </TranslateInOut>
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
            {/* Project5- Modal */}
            <DemoModal5
              title="Proyect5"
              content="Description5"
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
            {/* Project6- Modal */}
            <DemoModal6
              title="Proyect6"
              content="Description5"
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
            <DemoModal5
              title="Proyect5"
              content="Description5"
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
            <DemoModal5
              title="Proyect5"
              content="Description5"
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
          </YPContainer>
        </XContainer>
      </section>
    </YMContainer>
  );
}
