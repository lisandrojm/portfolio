/* src/app/_components/_pages/_layouts/_home/About.tsx */
'use client';

import Link from 'next/link';
import StickyHeader from '@/_components/_shared/StickyHeader';
import Icon from '@/_components/_icons/Icons';
import XContainer from '@/_components/_containers/XContainer';
import YMContainer from '@/_components/_containers/YMContainer';
import YPContainer from '@/_components/_containers/YPContainer';
import Reveal from '@/_components/_gsap/Reveal';

export default function About() {
  return (
    <YMContainer>
      <section id="about" className="bg-black_a">
        <StickyHeader customTextLeft="about" customIcon="about" />
        <XContainer>
          <YPContainer>
            <Reveal className="gs_reveal_fromBottom">
              <div className="flex items-center justify-center pb-10 font-serif italic  md:pb-20 ">
                <div className="flex items-center text-center text-2xl md:text-3xl">
                  <span className="me-2 text-3xl text-white">
                    <Icon kind="dna" />
                  </span>
                  <h2 className="text-orange">Me ...</h2>
                </div>
              </div>
            </Reveal>
            <div className="bg-black_a font-serif italic">
              <div className="flex flex-col items-start justify-center md:flex-row">
                <div className="md:w-1/2">
                  <div className="inline-flex flex-col items-end">
                    <p className="leading-0 m-0 p-0 text-lg text-white md:text-2xl">Hello. I am Lisandro. </p>
                    <p className="text-xs text-orange md:text-base">Lisandro Martínez</p>
                  </div>
                  <div>
                    <p className="text-lg text-white md:text-2xl">
                      I use my passion and skills to create digital experiences.
                      <br />
                      National and international customers rely on me for implementation of their digital products. <br />
                      As an independent, I work also with web agencies, companies, startups and individuals to create a blueprint for the digital business.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col md:mt-0 md:ps-10">
                  <div className="flex items-center">
                    <div className="me-1 text-2xl text-white">
                      <Icon kind="certificate" />
                    </div>
                    <div>
                      <h3 className="text-xl text-orange">Certificates</h3>
                    </div>
                  </div>
                  <div className="mt-1 text-lg text-white">
                    <ul>
                      <li>
                        <Link href="https://www.coderhouse.com/certificados/63a7335bc5708d000e6df156?lang=en" className="flex text-white" aria-label="Development certificate" target="_blank">
                          <div className="flex items-end text-white">
                            <div>
                              <p>Development</p>
                            </div>
                            <span className="ms-1 text-sm">
                              <Icon kind="externalLink" />
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.coderhouse.com/certificados/641b0618e72c2b00027dca87?lang=en" className="flex text-white" aria-label="Javascript certificate" target="_blank">
                          <div className="flex items-end text-white">
                            <div>
                              <p>Javascript</p>
                            </div>
                            <span className="ms-1 text-sm">
                              <Icon kind="externalLink" />
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.coderhouse.com/certificados/645e44ad1f40130002fcd5d5?lang=en" className="flex text-white" aria-label="Reactjs certificate" target="_blank">
                          <div className="flex items-end text-white">
                            <div>
                              <p>React</p>
                            </div>
                            <span className="ms-1 text-sm">
                              <Icon kind="externalLink" />
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.coderhouse.com/certificados/6579c50fc5811d0ce8be7116?lang=en" className="flex text-white" aria-label="Backend certificate" target="_blank">
                          <div className="flex items-end text-white">
                            <div>
                              <p>Backend</p>
                            </div>
                            <span className="ms-1 text-sm">
                              <Icon kind="externalLink" />
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.coderhouse.com/certificados/6579c50fc5811d1a56be7177?lang=en" className="flex text-white" aria-label="Fullstack certificate" target="_blank">
                          <div className="flex items-end text-white">
                            <div>
                              <p>FullStack</p>
                            </div>
                            <span className="ms-1 text-sm">
                              <Icon kind="externalLink" />
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </YPContainer>
        </XContainer>
      </section>
    </YMContainer>
  );
}
