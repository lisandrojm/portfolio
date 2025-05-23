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
import siteMetadata from '@/_data/siteMetadata';

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
  const { DemoModal: DemoModal7, setModal: setModal7 } = useDemoModal();
  const { DemoModal: DemoModal8, setModal: setModal8 } = useDemoModal();
  const { DemoModal: DemoModal9, setModal: setModal9 } = useDemoModal();
  const { DemoModal: DemoModal10, setModal: setModal10 } = useDemoModal();
  const { DemoModal: DemoModal11, setModal: setModal11 } = useDemoModal();

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
            <div className="flex flex-col gap-20">
              {/*Project 1 */}
              <RotateInOut3D durationIn={0.5 + Math.random()} y="100px" start="-100px bottom" watch>
                <div>
                  <div className="flex flex-col justify-start text-base lg:flex-row-reverse lg:items-center lg:justify-end lg:text-lg">
                    <div className="flex w-full justify-start lg:w-2/5">
                      <button onClick={() => setModal1(true)} aria-label="Open Project Modal">
                        <Image className="cursor-scale scale-hover grayscale-hover lg:w-full" src="/_static/_img/1-muecas.webp" width={1200} height={566} alt="Picture of the author" priority />
                      </button>
                    </div>
                    <div className="flex justify-start lg:w-1/4">
                      <div className="flex flex-col items-start">
                        <button onClick={() => setModal1(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 1 Modal">
                          <div className="cursor-scale small flex items-center text-white">
                            <div className="font-flex underline-hover mt-2 text-2xl font-bold md:text-3xl lg:mt-0">
                              <h2>Muecas</h2>
                            </div>
                            <span className="ms-1 text-sm">
                              <Icon kind="internalLink" />
                            </span>
                          </div>
                        </button>
                        <div className="font-flex">
                          <p className="text-lg font-bold text-orange"> Oct.2023 / Corporate</p>
                          <p className="text-sm text-orange"> Front-End</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RotateInOut3D>
              {/*Project 2 */}
              <RotateInOut3D durationIn={0.5 + Math.random()} y="100px" start="-100px bottom" watch>
                <div>
                  <div className="flex flex-col justify-center text-base lg:flex-row-reverse lg:items-center lg:justify-start lg:text-lg">
                    <div className="flex w-full justify-start lg:w-2/5">
                      <button onClick={() => setModal2(true)} aria-label="Open Project Modal">
                        <Image className="cursor-scale scale-hover grayscale-hover lg:w-full" src="/_static/_img/2-malonic.webp" width={1200} height={566} alt="Picture of the author" priority />
                      </button>
                    </div>
                    <div className="flex justify-start lg:w-1/4">
                      <div className="flex flex-col items-start">
                        <button onClick={() => setModal2(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 1 Modal">
                          <div className="cursor-scale small flex items-center text-white">
                            <div className="font-flex underline-hover mt-2 text-2xl font-bold md:text-3xl lg:mt-0">
                              <h2>Malonic</h2>
                            </div>
                            <span className="ms-1 text-sm">
                              <Icon kind="internalLink" />
                            </span>
                          </div>
                        </button>
                        <div className="font-flex">
                          <p className="text-lg font-bold text-orange"> May.2023 / Corporate</p>
                          <p className="text-sm text-orange"> Front-End</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RotateInOut3D>
              {/*Project 3 */}
              <RotateInOut3D durationIn={0.5 + Math.random()} y="100px" start="-100px bottom" watch>
                <div>
                  <div className="flex flex-col justify-start text-base lg:flex-row-reverse lg:items-center lg:justify-end lg:text-lg">
                    <div className="flex w-full justify-start lg:w-2/5">
                      <button onClick={() => setModal3(true)} aria-label="Open Project Modal">
                        <Image className="cursor-scale scale-hover grayscale-hover lg:w-full" src="/_static/_img/3-portfolio.webp" width={1200} height={566} alt="Picture of the author" priority />
                      </button>
                    </div>
                    <div className="flex justify-start lg:w-1/4">
                      <div className="flex flex-col items-start">
                        <button onClick={() => setModal3(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 1 Modal">
                          <div className="cursor-scale small flex items-center text-white">
                            <div className="font-flex underline-hover mt-2 text-2xl font-bold md:text-3xl lg:mt-0">
                              <h2>Portfolio</h2>
                            </div>
                            <span className="ms-1 text-sm">
                              <Icon kind="internalLink" />
                            </span>
                          </div>
                        </button>
                        <div className="font-flex">
                          <p className="text-lg font-bold text-orange"> Feb.2024 / Side project</p>
                          <p className="text-sm text-orange"> Front-End</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RotateInOut3D>
              {/*Project 4 */}
              <RotateInOut3D durationIn={0.5 + Math.random()} y="100px" start="-100px bottom" watch>
                <div>
                  <div className="flex flex-col justify-center text-base lg:flex-row-reverse lg:items-center lg:justify-start lg:text-lg">
                    <div className="flex w-full justify-start lg:w-2/5">
                      <button onClick={() => setModal4(true)} aria-label="Open Project Modal">
                        <Image className="cursor-scale scale-hover grayscale-hover lg:w-full" src="/_static/_img/4-coder-backend.webp" width={1200} height={566} alt="Picture of the author" priority />
                      </button>
                    </div>
                    <div className="flex justify-start lg:w-1/4">
                      <div className="flex flex-col items-start">
                        <button onClick={() => setModal4(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 1 Modal">
                          <div className="cursor-scale small flex items-center text-white">
                            <div className="font-flex underline-hover mt-2 text-2xl font-bold md:text-3xl lg:mt-0">
                              <h2>Ecom Back-End</h2>
                            </div>
                            <span className="ms-1 text-sm">
                              <Icon kind="internalLink" />
                            </span>
                          </div>
                        </button>
                        <div className="font-flex">
                          <p className="text-lg font-bold text-orange"> Nov.2023 / Course</p>
                          <p className="text-sm text-orange">Back-End</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RotateInOut3D>
            </div>
            {/* Accordion "Other projects*/}
            <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
              <div className="mt-20 w-full border-t border-solid border-orange pt-2 lg:me-10 lg:w-1/3">
                <Accordion
                  open={open === 1}
                  icon={<AccordionIcon id={1} open={open} />}
                  placeholder={''}
                  onPointerEnterCapture={() => {}} // Ensure a handler is provided
                  onPointerLeaveCapture={() => {}} // Ensure a handler is provided
                  className="pt-1 font-serif"
                >
                  <AccordionHeader
                    className="border-0 py-0"
                    onClick={() => handleOpen(1)}
                    placeholder={''}
                    onPointerEnterCapture={() => {}} // Ensure a handler is provided
                    onPointerLeaveCapture={() => {}} // Ensure a handler is provided
                  >
                    <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
                      <div className="cursor-scale small flex items-center">
                        <div className="me-2 text-2xl text-white">
                          <Icon kind="plus" />
                        </div>
                        <div>
                          <h3 className="underline-hover text-nowrap text-2xl italic text-orange md:text-3xl">Other projects</h3>
                        </div>
                      </div>
                    </TranslateInOut>
                  </AccordionHeader>
                  <AccordionBody className="py-2">
                    <div className="font-flex mt-1 text-2xl text-white">
                      <ul>
                        {/*Project 5 */}
                        <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                          <li className="mb-1">
                            <button onClick={() => setModal5(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 5 Modal">
                              <div className="cursor-scale small flex items-center text-white">
                                <div className="font-flex text-start text-lg font-bold">
                                  <p>
                                    <span className="underline-hover">Ksl</span> | <span className="text-sm text-orange">Jul.2023</span>{' '}
                                    <span className="ms-1 inline-flex text-sm text-white">
                                      <Icon kind="internalLink" />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </button>
                          </li>
                        </TranslateInOut>
                        {/*Project 6 */}
                        <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                          <li className="mb-1">
                            <button onClick={() => setModal6(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 6 Modal">
                              <div className="cursor-scale small flex items-center text-white">
                                <div className="font-flex text-start text-lg font-bold">
                                  <p>
                                    <span className="underline-hover">Coder-Reactjs</span> | <span className="text-sm text-orange">Apr.2023</span>{' '}
                                    <span className="ms-1 inline-flex text-sm text-white">
                                      <Icon kind="internalLink" />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </button>
                          </li>
                        </TranslateInOut>
                        {/*Project 7 */}
                        <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                          <li className="mb-1">
                            <button onClick={() => setModal7(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 6 Modal">
                              <div className="cursor-scale small flex items-center text-white">
                                <div className="font-flex text-start text-lg font-bold">
                                  <p>
                                    <span className="underline-hover">Coder-Js</span> | <span className="text-sm text-orange">Mar.2023</span>{' '}
                                    <span className="ms-1 inline-flex text-sm text-white">
                                      <Icon kind="internalLink" />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </button>
                          </li>
                        </TranslateInOut>
                        {/*Project 8 */}
                        <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                          <li className="mb-1">
                            <button onClick={() => setModal8(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 6 Modal">
                              <div className="cursor-scale small flex items-center text-white">
                                <div className="font-flex text-start text-lg font-bold">
                                  <p>
                                    <span className="underline-hover">Cancat</span> | <span className="text-sm text-orange">Dec.2023</span>{' '}
                                    <span className="ms-1 inline-flex text-sm text-white">
                                      <Icon kind="internalLink" />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </button>
                          </li>
                        </TranslateInOut>
                        {/*Project 9 */}
                        <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                          <li className="mb-1">
                            <button onClick={() => setModal9(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 6 Modal">
                              <div className="cursor-scale small flex items-center text-white">
                                <div className="font-flex text-start text-lg font-bold">
                                  <p>
                                    <span className="underline-hover">Plural</span> | <span className="text-sm text-orange">Oct.2023</span>{' '}
                                    <span className="ms-1 inline-flex text-sm text-white">
                                      <Icon kind="internalLink" />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </button>
                          </li>
                        </TranslateInOut>
                        {/*Project 10 */}
                        <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                          <li className="mb-1">
                            <button onClick={() => setModal10(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 6 Modal">
                              <div className="cursor-scale small flex items-center text-white">
                                <div className="font-flex text-start text-lg font-bold">
                                  <p>
                                    <span className="underline-hover">Pinho</span> | <span className="text-sm text-orange">Nov.2023</span>{' '}
                                    <span className="ms-1 inline-flex text-sm text-white">
                                      <Icon kind="internalLink" />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </button>
                          </li>
                        </TranslateInOut>
                        {/*Project 11 */}
                        <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                          <li className="mb-1">
                            <button onClick={() => setModal11(true)} className="flex flex-col items-start justify-items-center md:me-5" aria-label="Open Project 6 Modal">
                              <div className="cursor-scale small flex items-center text-white">
                                <div className="font-flex text-start text-lg font-bold">
                                  <p>
                                    <span className="underline-hover">Coder-Web Dev</span> | <span className="text-sm text-orange">Mar.2023</span>{' '}
                                    <span className="ms-1 inline-flex text-sm text-white">
                                      <Icon kind="internalLink" />
                                    </span>
                                  </p>
                                </div>
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
              title="Muecas"
              content={
                <>
                  FrontEnd development created for{' '}
                  <Link href="https://www.somoslumba.com" className="cursor-scale small scale-hover text-orange underline" target="_blank" rel="noopener noreferrer">
                    Lumba
                  </Link>{' '}
                  company
                </>
              }
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="html" ariaLabel="Html Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="css" ariaLabel="Css Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="bootstrap" ariaLabel="Bootstrap Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="js" ariaLabel="Javascript Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="gsap" ariaLabel="Gsap Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://www.muecas.com.ar/"
              hrefCode="#"
              src="/_static/_img/1-muecas.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
              isPrivate={true}
            />
            {/* Project-2 Modal */}
            <DemoModal2
              title="Malonic"
              content={
                <>
                  FrontEnd development created for{' '}
                  <Link href="https://www.somoslumba.com" className="cursor-scale small scale-hover text-orange underline" target="_blank" rel="noopener noreferrer">
                    Lumba
                  </Link>{' '}
                  company
                </>
              }
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="html" ariaLabel="Html Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="css" ariaLabel="Css Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="bootstrap" ariaLabel="Bootstrap Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="js" ariaLabel="Javascript Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://www.malonicrecords.com"
              hrefCode="#"
              src="/_static/_img/2-malonic.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
              isPrivate={true}
            />
            {/* Project-3 Modal */}
            <DemoModal3
              title="Portfolio"
              content={
                <>
                  <span className="me-1">Front-End development created for</span>
                  <Link href={siteMetadata.linkedin} className="cursor-scale small scale-hover inline-flex items-center text-orange underline" target="_blank" rel="noopener noreferrer">
                    <span className="underline">me</span>
                    <span className="me-2 ms-2 inline-flex text-base">
                      <Icon kind="winkEmoji" />
                    </span>
                  </Link>
                </>
              }
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="nextjs" ariaLabel="Nextjs Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="react" ariaLabel="Reactjs Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="tailwind" ariaLabel="Tailwindcss Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="ts" ariaLabel="Typescript Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://lisandrojm.vercel.app/"
              hrefCode="https://github.com/lisandrojm/portfolio"
              src="/_static/_img/3-portfolio.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
            />
            {/* Project4- Modal */}
            <DemoModal4
              title="Ecom Back-End"
              content={
                <>
                  Complete and functional Back-End of an ecommerce created during the Back-End course of the Full Stack career at{' '}
                  <Link href="https://www.coderhouse.com/certificados/6579c50fc5811d1a56be7177?lang=en" className="cursor-scale small scale-hover text-orange underline" target="_blank" rel="noopener noreferrer">
                    Coderhouse
                  </Link>
                </>
              }
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="express" ariaLabel="Express Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="nodejs" ariaLabel="Nodejs Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="js" ariaLabel="Javascript Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="bootstrap" ariaLabel="Bootstrap Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="handlebars" ariaLabel="Handlebars Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="vercel" ariaLabel="Vercel Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://proyecto-final-coderhouse-backend.vercel.app/"
              hrefCode="https://github.com/lisandrojm/proyecto-final-coderhouse-backend"
              src="/_static/_img/4-coder-backend.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
            />
            {/* Project5- Modal */}
            <DemoModal5
              title="Ksl"
              content={
                <>
                  FrontEnd development created for{' '}
                  <Link href="https://www.somoslumba.com" className="cursor-scale small scale-hover text-orange underline" target="_blank" rel="noopener noreferrer">
                    Lumba
                  </Link>{' '}
                  company
                </>
              }
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="html" ariaLabel="Html Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="css" ariaLabel="Css Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="js" ariaLabel="Javascript Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="bootstrap" ariaLabel="Bootstrap Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://www.ekarq.com/"
              hrefCode="#"
              src="/_static/_img/5-ksl.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
              isPrivate={true}
            />
            {/* Project6- Modal */}
            <DemoModal6
              title="Coder-Reactjs"
              content={
                <>
                  Functional Front-End of an ecommerce created during the ReactJs course of the Full Stack career at{' '}
                  <Link href="https://www.coderhouse.com/certificados/6579c50fc5811d1a56be7177?lang=en" className="cursor-scale small scale-hover text-orange underline" target="_blank" rel="noopener noreferrer">
                    Coderhouse
                  </Link>
                </>
              }
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="react" ariaLabel="Reactjs Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="js" ariaLabel="JavaScript Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="bootstrap" ariaLabel="Bootstrap Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="vercel" ariaLabel="Vercel Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://pf-martinez.vercel.app/"
              hrefCode="https://github.com/lisandrojm/proyecto-final-coderhouse-react"
              src="/_static/_img/6-coder-reactjs.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
            />
            {/* Project7- Modal */}
            <DemoModal7
              title="Coder-Js"
              content={
                <>
                  Hourly price calculator for Freelancers created during the JavaScript course of the Full Stack career at{' '}
                  <Link href="https://www.coderhouse.com/certificados/6579c50fc5811d1a56be7177?lang=en" className="cursor-scale small scale-hover text-orange underline" target="_blank" rel="noopener noreferrer">
                    Coderhouse
                  </Link>
                </>
              }
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="js" ariaLabel="JavaScript Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="html" ariaLabel="Html Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="css" ariaLabel="Css Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="bootstrap" ariaLabel="Boostrap Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://lisandrojm.github.io/proyecto-final-coderhouse-js"
              hrefCode="https://github.com/lisandrojm/proyecto-final-coderhouse-js"
              src="/_static/_img/7-coder-js.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
            />
            {/* Project8- Modal */}
            <DemoModal8
              title="Cancat"
              content={
                <>
                  FrontEnd development created for{' '}
                  <Link href="https://www.somoslumba.com" className="cursor-scale small scale-hover text-orange underline" target="_blank" rel="noopener noreferrer">
                    Lumba
                  </Link>{' '}
                  company
                </>
              }
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="html" ariaLabel="Html Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="css" ariaLabel="Css Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="js" ariaLabel="Javascript Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="bootstrap" ariaLabel="Bootstrap Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://www.cancat.com.ar/"
              hrefCode="#"
              src="/_static/_img/8-cancat.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
              isPrivate={true}
            />
            {/* Project9- Modal */}
            <DemoModal9
              title="Plural"
              content={
                <>
                  FrontEnd development created for{' '}
                  <Link href="https://www.somoslumba.com" className="cursor-scale small scale-hover text-orange underline" target="_blank" rel="noopener noreferrer">
                    Lumba
                  </Link>{' '}
                  company
                </>
              }
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="html" ariaLabel="Html Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="css" ariaLabel="Css Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="js" ariaLabel="Javascript Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="bootstrap" ariaLabel="Bootstrap Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://www.pluraldei.com/"
              hrefCode="#"
              src="/_static/_img/9-plural.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
              isPrivate={true}
            />
            {/* Project10- Modal */}
            <DemoModal10
              title="Pinho"
              content={
                <>
                  FrontEnd development created for{' '}
                  <Link href="https://www.somoslumba.com" className="cursor-scale small scale-hover text-orange underline" target="_blank" rel="noopener noreferrer">
                    Lumba
                  </Link>{' '}
                  company
                </>
              }
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="html" ariaLabel="Html Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="css" ariaLabel="Css Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="js" ariaLabel="Javascript Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="bootstrap" ariaLabel="Bootstrap Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://www.basespinho.com/"
              hrefCode="#"
              src="/_static/_img/10-pinho.webp"
              showDemoModal={false}
              setModal={function (value: SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
              }}
              isPrivate={true}
            />
            {/* Project11- Modal */}
            <DemoModal11
              title="Coder-Web Dev"
              content={
                <>
                  Simple Front-End created during the developer course of the Full Stack career at{' '}
                  <Link href="https://www.coderhouse.com/certificados/6579c50fc5811d1a56be7177?lang=en" className="cursor-scale small scale-hover text-orange underline" target="_blank" rel="noopener noreferrer">
                    Coderhouse
                  </Link>
                </>
              }
              stack={
                <ul className="flex gap-3 text-2xl">
                  <li>
                    <LinkIcon kind="html" ariaLabel="Html Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="css" ariaLabel="Css Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="js" ariaLabel="Javascript Icon" />
                  </li>
                  <li>
                    <LinkIcon kind="bootstrap" ariaLabel="Bootstrap Icon" />
                  </li>
                </ul>
              }
              hrefDemo="https://proyecto-final-coderhouse-desarrollo-web.vercel.app/"
              hrefCode="https://github.com/lisandrojm/proyecto-final-coderhouse-desarrollo-web"
              src="/_static/_img/11-coder-dev.webp"
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
