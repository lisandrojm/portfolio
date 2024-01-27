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
import ScaleInOut from '@/_components/_gsap/ScaleInOut';

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
                  <div className="text-center">
                    <p className="text-sm text-orange">(I&lsquo;m still learning...)</p>
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
                    <ScaleInOut delay={0.1} ease="elastic.out" watch>
                      <LinkIcon kind="html" ariaLabel="Html Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.2} ease="elastic.out" watch>
                      <LinkIcon kind="css" ariaLabel="Css Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.3} ease="elastic.out" watch>
                      <LinkIcon kind="js" ariaLabel="JavaScript Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.4} ease="elastic.out" watch>
                      <LinkIcon kind="ts" ariaLabel="TypeScript Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.5} ease="elastic.out" watch>
                      <LinkIcon kind="ts" ariaLabel="TypeScript Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.6} ease="elastic.out" watch>
                      <LinkIcon kind="react" ariaLabel="Reactjs Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.7} ease="elastic.out" watch>
                      <LinkIcon kind="nextjs" ariaLabel="Nextjs Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.8} ease="elastic.out" watch>
                      <LinkIcon kind="bootstrap" ariaLabel="Bootstrap Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.9} ease="elastic.out" watch>
                      <LinkIcon kind="tailwind" ariaLabel="Tailwindcss Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={1} ease="elastic.out" watch>
                      <LinkIcon kind="docker" ariaLabel="Docker Icon" />
                    </ScaleInOut>
                  </div>
                </div>
                <div>
                  <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                    <div className="mb-2">
                      <h2>Backend</h2>
                    </div>
                  </TranslateInOut>
                  <div className="flex flex-wrap gap-3 text-3xl text-orange md:text-4xl">
                    <ScaleInOut delay={0.1} ease="elastic.out" watch>
                      <LinkIcon kind="nodejs" ariaLabel="Nodejs Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.2} ease="elastic.out" watch>
                      <LinkIcon kind="express" ariaLabel="Express Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.3} ease="elastic.out" watch>
                      <LinkIcon kind="nestjs" ariaLabel="Nestjs Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.4} ease="elastic.out" watch>
                      <LinkIcon kind="mongodb" ariaLabel="Mongodb Icon" />
                    </ScaleInOut>
                  </div>
                </div>
                <div>
                  <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                    <div className="mb-2">
                      <h2>Software & tools</h2>
                    </div>
                  </TranslateInOut>
                  <div className="flex flex-wrap gap-3 text-3xl text-orange md:text-4xl">
                    <ScaleInOut delay={0.1} ease="elastic.out" watch>
                      <LinkIcon kind="apple" ariaLabel="Apple Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.2} ease="elastic.out" watch>
                      <LinkIcon kind="linux" ariaLabel="Linux Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.3} ease="elastic.out" watch>
                      <LinkIcon kind="windows" ariaLabel="Windows Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.4} ease="elastic.out" watch>
                      <LinkIcon kind="vscode" ariaLabel="Visual Studio Code Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.5} ease="elastic.out" watch>
                      <LinkIcon kind="neovim" ariaLabel="Neovim Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.6} ease="elastic.out" watch>
                      <LinkIcon kind="git" ariaLabel="Git Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.7} ease="elastic.out" watch>
                      <LinkIcon kind="github" ariaLabel="GitHub Icon" />
                    </ScaleInOut>
                  </div>
                </div>
                <div>
                  <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                    <div className="mb-2">
                      <h2>Cloud hosting</h2>
                    </div>
                  </TranslateInOut>
                  <div className="flex flex-wrap gap-3 text-3xl text-orange md:text-4xl">
                    <ScaleInOut delay={0.1} ease="elastic.out" watch>
                      <LinkIcon kind="vercel" ariaLabel="Vercel Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.2} ease="elastic.out" watch>
                      <LinkIcon kind="railway" ariaLabel="Railway Icon" />
                    </ScaleInOut>
                  </div>
                </div>
                <div>
                  <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                    <div className="mb-2">
                      <h2>Design</h2>
                    </div>
                  </TranslateInOut>
                  <div className="flex flex-wrap gap-3 text-3xl text-orange md:text-4xl">
                    <ScaleInOut delay={0.1} ease="elastic.out" watch>
                      <LinkIcon kind="figma" ariaLabel="Figma Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.2} ease="elastic.out" watch>
                      <LinkIcon kind="illustrator" ariaLabel="Iullustrator Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.3} ease="elastic.out" watch>
                      <LinkIcon kind="photoshop" ariaLabel="Photoshop Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.3} ease="elastic.out" watch>
                      <LinkIcon kind="aftereffects" ariaLabel="After Effects Icon" />
                    </ScaleInOut>
                    <ScaleInOut delay={0.4} ease="elastic.out" watch>
                      <LinkIcon kind="premiere" ariaLabel="Premier Pro Icon" />
                    </ScaleInOut>
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
