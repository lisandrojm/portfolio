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

interface ProyectProps {}

function AccordionIcon({ id, open }: { id: number; open: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function About() {
  const [open, setOpen] = useState<number>(1);

  const handleOpen = (value: number) => setOpen((prevOpen) => (prevOpen === value ? 0 : value));
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
                    <div className="relative flex items-center justify-center overflow-hidden rounded-full">
                      <div className="absolute inset-0 z-10 rounded-full bg-orange mix-blend-multiply"></div>
                      <div className="z-1 relative">
                        <Image src={'/_static/_img/profile.webp'} width={90} height={90} alt="Avatar" priority className="h-30 w-30 rounded-full xl:h-40 xl:w-40" />
                      </div>
                      <div className="absolute mb-6 flex items-center text-sm text-white xl:mb-8">
                        <p className="text-xs xl:text-2xl">{'<'}</p>
                        <div className="ps-1 text-xs xl:text-xl">
                          <Icon kind="skills" />
                        </div>
                        <p className="text-xs xl:text-2xl">{'>'}</p>
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
                      <p className="leading-0 m-0 p-0 text-lg text-white md:text-2xl">Hello. I am Lisandro. </p>
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                      <Link href={siteMetadata.linkedin} className="cursor-scale small flex items-center text-center text-2xl md:text-3xl ">
                        <p className="text-xs text-orange md:text-base">Lisandro Martínez</p>
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
                </div>
                {/* Accordion */}
                <div className="mt-10 lg:mt-0">
                  <Accordion open={open === 1} icon={<AccordionIcon id={1} open={open} />} placeholder={''}>
                    <AccordionHeader className="border-0 py-0" onClick={() => handleOpen(1)} placeholder={''}>
                      <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
                        <div className="flex items-center">
                          <div className="me-2 text-2xl text-orange">
                            <Icon kind="certificate" />
                          </div>
                          <div>
                            <h3 className="cursor-scale small me-16 text-xl text-white">Certificates</h3>
                          </div>
                        </div>
                      </TranslateInOut>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="mt-1 text-lg text-white">
                        <ul>
                          <li>
                            <Link href="https://www.coderhouse.com/certificados/63a7335bc5708d000e6df156?lang=en" className="cursor-scale small flex text-white" aria-label="Development certificate" target="_blank">
                              <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                                <div className="flex items-center text-orange">
                                  <div>
                                    <p>Development</p>
                                  </div>
                                  <span className="ms-2 text-sm text-white">
                                    <Icon kind="externalLink" />
                                  </span>
                                </div>
                              </TranslateInOut>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.coderhouse.com/certificados/641b0618e72c2b00027dca87?lang=en" className="cursor-scale small flex text-white" aria-label="Javascript certificate" target="_blank">
                              <TranslateInOut overflowHidden delay={0.3} y={100} start="-100% bottom" end="top top" watch>
                                <div className="flex items-center text-orange">
                                  <div>
                                    <p>Javascript</p>
                                  </div>
                                  <span className="ms-2 text-sm text-white">
                                    <Icon kind="externalLink" />
                                  </span>
                                </div>
                              </TranslateInOut>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.coderhouse.com/certificados/645e44ad1f40130002fcd5d5?lang=en" className="cursor-scale small flex text-white" aria-label="Reactjs certificate" target="_blank">
                              <TranslateInOut overflowHidden delay={0.4} y={100} start="-100% bottom" end="top top" watch>
                                <div className="flex items-center text-orange">
                                  <div>
                                    <p>React</p>
                                  </div>
                                  <span className="ms-2 text-sm text-white">
                                    <Icon kind="externalLink" />
                                  </span>
                                </div>
                              </TranslateInOut>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.coderhouse.com/certificados/6579c50fc5811d0ce8be7116?lang=en" className="cursor-scale small flex text-white" aria-label="Backend certificate" target="_blank">
                              <TranslateInOut overflowHidden delay={0.5} y={100} start="-100% bottom" end="top top" watch>
                                <div className="flex items-center text-orange">
                                  <div>
                                    <p>Backend</p>
                                  </div>
                                  <span className="ms-2 text-sm text-white">
                                    <Icon kind="externalLink" />
                                  </span>
                                </div>
                              </TranslateInOut>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.coderhouse.com/certificados/6579c50fc5811d1a56be7177?lang=en" className="cursor-scale small flex text-white" aria-label="Fullstack certificate" target="_blank">
                              <TranslateInOut overflowHidden delay={0.6} y={100} start="-100% bottom" end="top top" watch>
                                <div className="flex items-center text-orange">
                                  <div>
                                    <p>FullStack</p>
                                  </div>
                                  <span className="ms-2 text-sm text-white">
                                    <Icon kind="externalLink" />
                                  </span>
                                </div>
                              </TranslateInOut>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </AccordionBody>
                  </Accordion>
                </div>
              </div>
            </div>
          </YPContainer>
        </XContainer>
      </section>
    </YMContainer>
  );
}
