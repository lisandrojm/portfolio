/* src/app/_components/_pages/_shared-pages/+_home/_footer/Footer.tsx */
'use client';

import Link from 'next/link';
import LinkIcon from '@/_components/_icons/LinkIcons';
import Icon from '@/_components/_icons/Icons';
import XContainer from '@/_components/_containers/XContainer';

export default function Footer() {
  return (
    <footer className="bg-black">
      <XContainer>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white px-3 pb-6 pt-4 md:flex-row md:items-center">
          <div className="flex items-center justify-center">
            <h6 className="xs--hide text-md text-orange">
              site stack<span className="px-2">|</span>
            </h6>
            <ul className="flex gap-3 text-2xl">
              <li>
                <LinkIcon kind="react" ariaLabel="Reactjs Icon" />
              </li>
              <li>
                <LinkIcon kind="nextjs" ariaLabel="Nextjs Icon" />
              </li>
              <li>
                <LinkIcon kind="tailwind" ariaLabel="Tailwindcss" />
              </li>
              <li>
                <LinkIcon kind="vercel" ariaLabel="Vercel" />
              </li>
            </ul>
          </div>
          <div className="flex">
            <Link href={'https://github.com/lisandrojm/portfolio'} className="cursor-scale small flex items-center" aria-label="Github site profile" target="_blank">
              <div className="flex items-center text-white">
                <div className="text-xl">
                  <Icon kind="github" />
                </div>
                <div className=" flex items-center">
                  <div className="text-md me-1 ms-1 font-serif italic text-white">
                    <p className="underline-hover">code</p>
                  </div>
                  <span className="cursor-scale small text-sm">
                    <Icon kind="externalLink" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </XContainer>
    </footer>
  );
}
