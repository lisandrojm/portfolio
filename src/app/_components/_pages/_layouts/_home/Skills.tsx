/* src/app/_components/_pages/_layouts/_home/Skills.tsx */

'use client';

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
            </div>
            <div className="flex justify-start md:justify-center">
              <div className="flex flex-col gap-12 text-2xl font-bold uppercase md:w-1/2 md:flex-row md:flex-wrap md:gap-20">
                <div>
                  <div className="mb-2">
                    <h2>Frontend</h2>
                  </div>
                  <div className="flex flex-wrap gap-3 text-3xl md:text-4xl">
                    <LinkIcon kind="html" ariaLabel="Html Icon" />
                    <LinkIcon kind="css" ariaLabel="Css Icon" />
                    <LinkIcon kind="js" ariaLabel="JavaScript Icon" />
                    <LinkIcon kind="ts" ariaLabel="TypeScript Icon" />
                    <LinkIcon kind="react" ariaLabel="Reactjs Icon" />
                    <LinkIcon kind="nextjs" ariaLabel="Nextjs Icon" />
                    <LinkIcon kind="bootstrap" ariaLabel="Bootstrap Icon" />
                    <LinkIcon kind="tailwind" ariaLabel="Tailwindcss Icon" />
                    <LinkIcon kind="docker" ariaLabel="Docker Icon" />
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <h2>Backend</h2>
                  </div>
                  <div className="flex flex-wrap gap-3 text-3xl text-orange md:text-4xl">
                    <LinkIcon kind="nodejs" ariaLabel="Nodejs Icon" />
                    <LinkIcon kind="express" ariaLabel="Express Icon" />
                    <LinkIcon kind="nestjs" ariaLabel="Nestjs Icon" />
                    <LinkIcon kind="mongodb" ariaLabel="Mongodb Icon" />
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <h2>Software & tools</h2>
                  </div>
                  <div className="flex flex-wrap gap-3 text-3xl text-orange md:text-4xl">
                    <LinkIcon kind="apple" ariaLabel="Apple Icon" />
                    <LinkIcon kind="linux" ariaLabel="Linux Icon" />
                    <LinkIcon kind="windows" ariaLabel="Windows Icon" />
                    <LinkIcon kind="vscode" ariaLabel="Visual Studio Code Icon" />
                    <LinkIcon kind="neovim" ariaLabel="Neovim Icon" />
                    <LinkIcon kind="git" ariaLabel="Git Icon" />
                    <LinkIcon kind="github" ariaLabel="GitHub Icon" />
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <h2>Cloud hosting</h2>
                  </div>
                  <div className="flex flex-wrap gap-3 text-3xl text-orange md:text-4xl">
                    <LinkIcon kind="vercel" ariaLabel="Vercel Icon" />
                    <LinkIcon kind="railway" ariaLabel="Railway Icon" />
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <h2>Design</h2>
                  </div>
                  <div className="flex flex-wrap gap-3 text-3xl text-orange md:text-4xl">
                    <LinkIcon kind="figma" ariaLabel="Figma Icon" />
                    <LinkIcon kind="illustrator" ariaLabel="Iullustrator Icon" />
                    <LinkIcon kind="photoshop" ariaLabel="Photoshop Icon" />
                    <LinkIcon kind="aftereffects" ariaLabel="After Effects Icon" />
                    <LinkIcon kind="premiere" ariaLabel="Premier Pro Icon" />
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
