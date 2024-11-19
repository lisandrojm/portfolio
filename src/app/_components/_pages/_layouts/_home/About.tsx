/* src/app/_components/_pages/_layouts/_home/About.tsx */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import siteMetadata from '@/_data/siteMetadata';
import StickyHeader from '@/_components/_shared/StickyHeader';
import Icon from '@/_components/_icons/Icons';
import XContainer from '@/_components/_containers/XContainer';
import YMContainer from '@/_components/_containers/YMContainer';
import YPContainer from '@/_components/_containers/YPContainer';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { useState } from 'react';
import RotateInOut from '@/_components/_gsap/RotateInOut';
import TranslateInOut from '@/_components/_gsap/TranslateInOut';
import ScaleInOut from '@/_components/_gsap/ScaleInOut';

function AccordionIcon({ id, open }: { id: number; open: number }) {
  return (
    <div className="cursor-scale small">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </div>
  );
}

export default function About() {
  const [open, setOpen] = useState<number>(0);

  const handleOpen = (panelId: number) => {
    setOpen((prevOpen) => (prevOpen === panelId ? 0 : panelId)); // Cambiado null a 0
  };

  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleButtonClick = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <YMContainer>
      <section id="about me" className="bg-black_a">
        <StickyHeader customTextLeft="about me" customIcon="about" />
        <XContainer>
          <YPContainer>
            <div className="flex items-center justify-center pb-10 font-serif italic  md:pb-20 ">
              <ScaleInOut delay={0.3} ease="elastic.out" watch>
                <Link href={'#contact'} className="cursor-scale small">
                  <RotateInOut fade={false} durationIn={0.6} rotateTo={360} start="botom bottom" end="top top" watch scrub>
                    <div className="scale-hover relative flex items-center justify-center overflow-hidden rounded-full">
                      <div className="absolute inset-0 z-10 rounded-full bg-orange mix-blend-multiply"></div>
                      <div className="z-1 relative">
                        <Image src={'/_static/_img/profile-side.svg'} width={90} height={90} alt="Avatar" priority className="h-30 w-30 rounded-full xl:h-40 xl:w-40" />
                      </div>
                      <div className="absolute mb-5 ms-2 flex items-center text-sm text-white xl:mb-9 xl:ms-3">
                        <p className="text-base text-orange xl:text-3xl">{'<'}</p>
                        <div className="ps-1 text-base text-orange xl:text-3xl">
                          <Icon kind="skills" />
                        </div>
                        <p className="text-base text-orange xl:text-3xl">{'>'}</p>
                      </div>
                    </div>
                  </RotateInOut>
                </Link>
              </ScaleInOut>
            </div>
            <div className="bg-black_a font-serif italic">
              {/* About*/}
              <div className="flex flex-col items-start justify-center lg:flex-row">
                <div className="lg:me-10 lg:w-1/2">
                  <div className="inline-flex flex-col items-end">
                    <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
                      <p className="leading-0 m-0 p-0 text-lg text-white md:text-2xl">Hello. I&apos;m Lisandro. </p>
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                      <Link href={siteMetadata.linkedin} className="cursor-scale small flex items-center text-center text-2xl md:text-3xl ">
                        <p className="underline-hover text-xs text-orange md:text-base">Lisandro Martínez</p>
                      </Link>
                    </TranslateInOut>
                  </div>
                  <div>
                    <div className="text-lg text-white md:text-2xl">
                      <TranslateInOut overflowHidden delay={0.3} y={100} start="-100% bottom" end="top top" watch>
                        <p>I use my passion and skills to create digital experiences.</p>
                        <br />
                      </TranslateInOut>
                      <TranslateInOut overflowHidden delay={0.4} y={100} start="-100% bottom" end="top top" watch>
                        <p>National and international customers rely on me for implementation of their digital products.</p>
                      </TranslateInOut>
                      <br />
                      <TranslateInOut overflowHidden delay={0.5} y={100} start="-100% bottom" end="top top" watch>
                        <p>
                          As an independent, I work also with web agencies, companies, startups and individuals <br />
                          to create a blueprint for the digital business.
                        </p>
                      </TranslateInOut>
                    </div>
                  </div>
                  <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
                    <Link href="/_static/_img/cv.pdf" target="_blank" download>
                      <div className="mt-4 flex items-center font-bold uppercase not-italic text-orange">
                        <div>
                          <p className="cursor-scale small underline-hover me-1 text-base">cv</p>
                        </div>
                        <div className="cursor-scale small text-2xl text-orange">
                          <Icon kind="download" />
                        </div>
                      </div>
                    </Link>
                  </TranslateInOut>
                </div>
                {/* Accordion */}
                <div className="w-full lg:w-1/3">
                  <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
                    <div className="mt-10 border-t border-solid border-orange pt-2 lg:mt-0">
                      <Accordion open={open === 1} icon={<AccordionIcon id={1} open={open} />} placeholder={''} onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                        <AccordionHeader
                          className="border-0 py-0"
                          onClick={() => handleOpen(1)}
                          onPointerEnterCapture={() => {}} // or any other handler you need
                          onPointerLeaveCapture={() => {}}
                          placeholder={''}
                        >
                          <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
                            <div className="cursor-scale small flex items-center ">
                              <div className="me-2 text-2xl text-orange">
                                <Icon kind="certificate" />
                              </div>
                              <div>
                                <h3 className="underline-hover me-16 text-xl text-white">Certificates</h3>
                              </div>
                            </div>
                          </TranslateInOut>
                        </AccordionHeader>
                        <AccordionBody className="py-2">
                          <div className="text-base text-white">
                            <ul>
                              <li>
                                <Link href="https://www.coderhouse.com/certificados/63a7335bc5708d000e6df156?lang=en" className="cursor-scale small flex text-white" aria-label="Development certificate" target="_blank">
                                  <div className="flex items-center text-orange">
                                    <div>
                                      <p className="underline-hover">Development</p>
                                    </div>
                                    <span className="ms-2 text-sm text-white">
                                      <Icon kind="externalLink" />
                                    </span>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.coderhouse.com/certificados/641b0618e72c2b00027dca87?lang=en" className="cursor-scale small flex text-white" aria-label="Javascript certificate" target="_blank">
                                  <div className="flex items-center text-orange">
                                    <div>
                                      <p className="underline-hover">Javascript</p>
                                    </div>
                                    <span className="ms-2 text-sm text-white">
                                      <Icon kind="externalLink" />
                                    </span>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.coderhouse.com/certificados/645e44ad1f40130002fcd5d5?lang=en" className="cursor-scale small flex text-white" aria-label="Reactjs certificate" target="_blank">
                                  <div className="flex items-center text-orange">
                                    <div>
                                      <p className="underline-hover">React</p>
                                    </div>
                                    <span className="ms-2 text-sm text-white">
                                      <Icon kind="externalLink" />
                                    </span>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.coderhouse.com/certificados/6579c50fc5811d0ce8be7116?lang=en" className="cursor-scale small flex text-white" aria-label="Backend certificate" target="_blank">
                                  <div className="flex items-center text-orange">
                                    <div>
                                      <p className="underline-hover">Backend</p>
                                    </div>
                                    <span className="ms-2 text-sm text-white">
                                      <Icon kind="externalLink" />
                                    </span>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.coderhouse.com/certificados/6579c50fc5811d1a56be7177?lang=en" className="cursor-scale small flex text-white" aria-label="Fullstack certificate" target="_blank">
                                  <div className="flex items-center text-orange">
                                    <div>
                                      <p className="underline-hover">FullStack</p>
                                    </div>
                                    <span className="ms-2 text-sm text-white">
                                      <Icon kind="externalLink" />
                                    </span>
                                  </div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </AccordionBody>
                      </Accordion>
                      <Accordion
                        open={open === 2}
                        icon={<AccordionIcon id={2} open={open} />}
                        onPointerEnterCapture={() => {}} // Placeholder handler or actual logic
                        onPointerLeaveCapture={() => {}}
                        placeholder={''}
                      >
                        <AccordionHeader
                          className="border-0 py-0"
                          onClick={() => handleOpen(2)}
                          onPointerEnterCapture={() => {}} // Placeholder handler or actual logic
                          onPointerLeaveCapture={() => {}}
                          placeholder={''}
                        >
                          <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
                            <div className="cursor-scale small flex items-center ">
                              <div className="me-2 ms-1 text-xl text-orange">
                                <Icon kind="heartEyesEmoji" />
                              </div>
                              <div>
                                <h3 className="underline-hover me-16 text-xl text-white">Lifestyle</h3>
                              </div>
                            </div>
                          </TranslateInOut>
                        </AccordionHeader>
                        <AccordionBody className="py-2">
                          <div className="text-base text-white">
                            <ul>
                              <li>
                                <div className="mb-2 flex items-center">
                                  <button onClick={handleButtonClick}>
                                    <p className="cursor-scale small underline-hover flex items-center italic text-orange">The Gym</p>
                                  </button>
                                  <span className="ms-2 text-base text-white">
                                    <Icon kind="gym" />
                                  </span>
                                </div>
                                {isContentVisible && (
                                  <div>
                                    <p className="font-serif text-xs normal-case italic text-white opacity-100 transition-opacity duration-300 ease-in-out">I believe that Gym culture builds discipline and asserts that long-term results are built step by step.</p>
                                  </div>
                                )}
                              </li>
                            </ul>
                          </div>
                        </AccordionBody>
                      </Accordion>
                    </div>
                  </TranslateInOut>
                </div>
              </div>
            </div>
          </YPContainer>
        </XContainer>
      </section>
    </YMContainer>
  );
}
