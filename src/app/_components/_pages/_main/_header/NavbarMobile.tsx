/* src/app/_components/_main/_header/NavbarMobile.tsx */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import siteMetadata from '@/_data/siteMetadata';
import headerNavLinks from '@/_data/headerNavLinks';
import { Button, Props as ButtonProps } from '@/_components/_ui/Button';
import Icon from '@/_components/_icons/Icons';
import XContainer from '@/_components/_containers/XContainer';

export default function NavbarMobile() {
  const [navShow, setNavShow] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
      setToggleNav(!status); // Actualiza el estado toggleNav
      return !status;
    });
  };
  return (
    <>
      <button aria-label="Toggle Menu" onClick={onToggleNav} className="flex items-center justify-center pl-3 text-3xl lg:hidden">
        <Icon kind="menuOpen" />
      </button>
      <div className={`fixed inset-0 left-0 top-0 z-50 h-full w-full transform backdrop-blur-lg duration-300 ease-in-out ${navShow ? 'translate-x-0' : 'translate-x-full'}`}>
        <XContainer>
          <div className="flex items-center justify-between border-b border-white px-3 pb-4 pt-7">
            <div className="flex items-center text-xl">
              <span className="me-2 text-white">
                <Icon kind="ninja" />
              </span>
              <Link onClick={onToggleNav} className="text-1xl m-0 font-serif italic leading-5 text-orange" href="/" aria-label={`Navigate to ${siteMetadata.headerTitle}`}>
                All Killer, No Filler.
              </Link>
            </div>
            <div className="flex">
              <button className="h-8 w-8 text-3xl" aria-label="Toggle Menu" onClick={onToggleNav}>
                <Icon kind="menuClose" />
              </button>
            </div>
          </div>
          <div className="fixed h-full w-full px-3 pt-6">
            <ul>
              {headerNavLinks.map((link, index) => (
                <li key={link.title} className="py-3">
                  <Link href={link.href} className="flex items-end text-xl tracking-widest text-white" onClick={onToggleNav} aria-label={`Navigate to ${link.title}`}>
                    {link.title}
                    {index < headerNavLinks.length - 0 && (
                      <span className="mx-3 text-orange">
                        <Icon kind="arrowRight" />
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="py-4 ">
              <Link href="#contact" className="pb-2 pt-4" aria-label="Form" onClick={onToggleNav}>
                <Button size="2xl" font="mono">
                  Contact Me
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 py-4">
              <Link href={siteMetadata.github} className="flex items-center" aria-label="Github site profile" target="_blank">
                <div className="text-3xl text-white">
                  <Icon kind="github" />
                </div>
              </Link>
              <Link href={siteMetadata.linkedin} className="flex items-center" aria-label="Linkedin site profile" target="_blank">
                <div className="text-3xl text-white">
                  <Icon kind="linkedin" />
                </div>
              </Link>
            </div>
          </div>
        </XContainer>
      </div>
    </>
  );
}
