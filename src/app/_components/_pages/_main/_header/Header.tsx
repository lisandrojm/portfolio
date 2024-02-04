'use client';
/* src/app/_components/_main/_header/Header.tsx */

import XContainer from '@/_components/_containers/XContainer';
import siteMetadata from '@/_data/siteMetadata';
import Link from 'next/link';
import LinkIcon from '@/_components/_icons/LinkIcons';
import NavbarMobile from '@/_components/_pages/_main/_header/NavbarMobile';
import headerNavLinks from '@/_data/headerNavLinks';
import ThemeSwitcher from '@/_components/_shared/ThemeSwitcher';
import TranslateInOut from '@/_components/_gsap/TranslateInOut';

interface NavLink {
  title: string;
  href: string;
}

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-black">
      <XContainer>
        <nav className="flex items-center justify-between border-b border-white px-3 pb-2 pt-6">
          <TranslateInOut overflowHidden delay={0.1} y={100} start="-100% bottom" end="top top" watch>
            <Link href="#top" aria-label={`Navigate to ${siteMetadata.headerTitle}`} className="hover">
              <div className="flex items-center justify-between">
                <div className="cursor-scale small underline-hover flex items-center justify-center font-bold">
                  <div>
                    <h2 className="m-0 leading-5 text-white">FrontEndDev</h2>
                    <h3 className="text-sm text-orange">lisandrojm</h3>
                  </div>
                </div>
              </div>
            </Link>
          </TranslateInOut>
          <div className="flex items-center leading-5 ">
            <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
              <div className="flex items-center leading-5">
                {headerNavLinks
                  .filter((link: NavLink) => link.href !== '/')
                  .map((link: NavLink, index: number) => (
                    <div key={link.title} className="hidden lg:inline">
                      <div className="flex">
                        {index > 0 && <span className="mx-3 text-white">|</span>}
                        <Link href={link.href} className="cursor-scale small underline-hover hidden text-white lg:inline" aria-label={`Navigate to ${link.title}`}>
                          {link.title}
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </TranslateInOut>
            <div className="xs--hide flex items-center">
              <TranslateInOut overflowHidden delay={0.3} y={100} start="-100% bottom" end="top top" watch>
                <div className="xs--hide flex items-center">
                  <div className="cursor-scale small ml-5 flex items-center text-3xl text-orange sm:ml-5">
                    <LinkIcon kind="github" ariaLabel="Github site profile" />
                  </div>
                  <div className="cursor-scale small ml-5 mr-4 flex items-center text-3xl text-orange sm:ml-5 sm:mr-5">
                    <LinkIcon kind="linkedin" ariaLabel="Linkedin site profile" />
                  </div>
                  <ThemeSwitcher />
                </div>
              </TranslateInOut>
            </div>
            <NavbarMobile />
          </div>
        </nav>
      </XContainer>
    </header>
  );
}
