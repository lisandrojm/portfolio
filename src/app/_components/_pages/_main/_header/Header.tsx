/* src/app/_components/_main/_header/Header.tsx */
'use client';

import XContainer from '@/_components/_containers/XContainer';
import siteMetadata from '@/_data/siteMetadata';
import Link from 'next/link';
import NavbarMobile from '@/_components/_pages/_main/_header/NavbarMobile';
import headerNavLinks from '@/_data/headerNavLinks';
import ThemeSwitcher from '@/_components/_shared/ThemeSwitcher';
import Icon from '@/_components/_icons/Icons';

interface NavLink {
  title: string;
  href: string;
}

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-black">
      <XContainer>
        <nav className="flex items-center justify-between border-b border-white px-3 pb-2 pt-6">
          <div>
            <Link href="/" aria-label={`Navigate to ${siteMetadata.headerTitle}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center font-bold">
                  <div>
                    <h2 className="m-0 leading-5 text-white">FullStackDev</h2>
                    <h3>
                      <span className="text-sm text-orange">lisandrojm </span>
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center leading-5 ">
            {headerNavLinks
              .filter((link: NavLink) => link.href !== '/')
              .map((link: NavLink, index: number) => (
                <div key={link.title} className="hidden lg:inline">
                  <div className="flex">
                    {index > 0 && <span className="mx-3 text-white">|</span>}
                    <Link href={link.href} className="hidden text-white lg:inline" aria-label={`Navigate to ${link.title}`}>
                      {link.title}
                    </Link>
                  </div>
                </div>
              ))}
            <div className="xs--hide flex items-center">
              <Link href={siteMetadata.github} className="ml-5 flex items-center text-3xl text-orange sm:ml-5" aria-label="Github site profile" target="_blank">
                <Icon kind="github" />
              </Link>
              <Link href={siteMetadata.linkedin} className="ml-5 mr-4 flex items-center text-3xl text-orange sm:ml-5 sm:mr-5" aria-label="Linkedin site profile" target="_blank">
                <Icon kind="linkedin" />
              </Link>
              <ThemeSwitcher />
            </div>
            <NavbarMobile />
          </div>
        </nav>
      </XContainer>
    </header>
  );
}
