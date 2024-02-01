/* src/app/_components/_pages/_layouts/_home/Skills.tsx */

'use client';

import Link from 'next/link';
import LinkIcon from '@/_components/_icons/LinkIcons';
import StickyHeader from '@/_components/_shared/StickyHeader';
import Icon from '@/_components/_icons/Icons';
import XContainer from '@/_components/_containers/XContainer';
import YMContainer from '@/_components/_containers/YMContainer';
import YPContainer from '@/_components/_containers/YPContainer';
import TranslateInOut from '@/_components/_gsap/TranslateInOut';

export default function Skills() {
  return (
    <YMContainer>
      <section id="skills" className="bg-black_a">
        <StickyHeader customTextLeft="skills" customIcon="skills" />
        <XContainer>
          <YPContainer>
            <div className="flex flex-col items-center justify-center pb-10 font-serif italic text-orange md:pb-20">
              <Link href={'#skills'} className="cursor-scale small flex items-center text-center text-2xl md:text-3xl">
                <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                  <div className="flex items-center text-2xl  md:text-3xl">
                    <span className="me-2 text-2xl text-white">
                      <Icon kind="academic" />
                    </span>
                    <h2 className="text-orange">
                      My knowledge <br />
                    </h2>
                  </div>
                </TranslateInOut>
              </Link>
            </div>
            <div className="flex justify-start md:justify-center">
              <div className="flex flex-col gap-12 text-2xl font-bold uppercase md:w-1/2 md:flex-row md:flex-wrap md:gap-20">
                <div>
                  <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                    <div className="mb-2">
                      <h2>Frontend</h2>
                    </div>
                  </TranslateInOut>
                  <div className="flex flex-wrap gap-3 text-3xl md:text-4xl">
                    <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="html" ariaLabel="Html Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="css" ariaLabel="Css Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.3} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="js" ariaLabel="JavaScript Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.4} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="ts" ariaLabel="TypeScript Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.7} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="react" ariaLabel="Reactjs Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.8} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="nextjs" ariaLabel="Nextjs Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.9} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="bootstrap" ariaLabel="Bootstrap Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={1} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="tailwind" ariaLabel="Tailwindcss Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={1.1} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="docker" ariaLabel="Docker Icon" />
                    </TranslateInOut>
                  </div>
                </div>
                <div>
                  <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                    <div className="mb-2 flex items-center">
                      <div>
                        <h2 className="flex items-center">Backend</h2>
                      </div>
                      <div className="ms-2">
                        <p className="font-serif text-xs lowercase italic text-orange">*</p>
                      </div>
                    </div>
                  </TranslateInOut>
                  <div className="flex flex-wrap gap-3 text-3xl text-orange md:text-4xl">
                    <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="nodejs" ariaLabel="Nodejs Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="express" ariaLabel="Express Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.3} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="nestjs" ariaLabel="Nestjs Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.4} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="mongodb" ariaLabel="Mongodb Icon" />
                    </TranslateInOut>
                  </div>
                  <div className="mt-8">
                    <p className="font-serif text-xs normal-case italic text-orange">* In learning process...</p>
                  </div>
                </div>
                <div>
                  <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                    <div className="mb-2">
                      <h2>Software & tools</h2>
                    </div>
                  </TranslateInOut>
                  <div className="flex flex-wrap gap-3 text-3xl text-orange md:text-4xl">
                    <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="apple" ariaLabel="Apple Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="linux" ariaLabel="Linux Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.3} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="windows" ariaLabel="Windows Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.4} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="vscode" ariaLabel="Visual Studio Code Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.5} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="neovim" ariaLabel="Neovim Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.6} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="git" ariaLabel="Git Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.7} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="github" ariaLabel="GitHub Icon" />
                    </TranslateInOut>
                  </div>
                </div>
                <div>
                  <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                    <div className="mb-2">
                      <h2>Cloud hosting</h2>
                    </div>
                  </TranslateInOut>
                  <div className="flex flex-wrap gap-3 text-3xl text-orange md:text-4xl">
                    <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="vercel" ariaLabel="Vercel Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="railway" ariaLabel="Railway Icon" />
                    </TranslateInOut>
                  </div>
                </div>
                <div>
                  <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                    <div className="mb-2">
                      <h2>Design</h2>
                    </div>
                  </TranslateInOut>
                  <div className="flex flex-wrap gap-3 text-3xl text-orange md:text-4xl">
                    <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="figma" ariaLabel="Figma Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="illustrator" ariaLabel="Iullustrator Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.3} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="photoshop" ariaLabel="Photoshop Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.4} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="aftereffects" ariaLabel="After Effects Icon" />
                    </TranslateInOut>
                    <TranslateInOut overflowHidden delay={0.5} y={100} start="-100% bottom" end="top top" watch>
                      <LinkIcon kind="premiere" ariaLabel="Premier Pro Icon" />
                    </TranslateInOut>
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
