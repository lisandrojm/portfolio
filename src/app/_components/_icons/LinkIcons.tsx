import React, { FC } from 'react';
import Link from 'next/link';
import Icon, { IconKind } from '@/_components/_icons/Icons';

// Importa el objeto 'components' desde tu archivo Icons.tsx
import components from '@/_components/_icons/Icons';

interface LinkIconProps {
  kind: IconKind;
  ariaLabel: string;
}

// Obtén las claves del objeto components y construye el tipo para iconLinks
type IconLinks = Record<IconKind, string>;

const iconLinks: IconLinks = {
  // Usa todas las claves presentes en 'components'
  ...Object.keys(components).reduce((acc, key) => ({ ...acc, [key]: '' }), {}),
  academic: '',
  arrowUp: '',
  arrowUpCg: '',
  arrowDown: '',
  arrowDownChevron: '',
  arrowLeft: '',
  arrowRight: '',
  arrowCircleRight: '',
  email: '',
  apple: '',
  bootstrap: '',
  css: '',
  docker: '',
  express: '',
  git: '',
  github: '',
  githubPages: '',
  linux: '',
  html: '',
  js: '',
  mongodb: '',
  nestjs: '',
  neovim: '',
  nextjs: '',
  ninja: '',
  nodejs: '',
  railway: '',
  react: '',
  tailwind: '',
  ts: '',
  vercel: '',
  vscode: '',
  windows: '',
  figma: '',
  heart: '',
  illustrator: '',
  photoshop: '',
  premiere: '',
  aftereffects: '',
  dna: '',
  lightbulb: '',
  externalLink: '',
  internalLink: '',
  menuClose: '',
  menuOpen: '',
  moon: '',
  sun: '',
  linkedin: '',
  star: '',
  web: '',
  skills: '',
  works: '',
  about: '',
  contact: '',
};

iconLinks.html = 'https://developer.mozilla.org/en-US/docs/Web/HTML';
iconLinks.css = 'https://developer.mozilla.org/en-US/docs/Web/CSS';
iconLinks.js = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
iconLinks.ts = 'https://www.typescriptlang.org/';
iconLinks.react = 'https://react.dev/';
iconLinks.nextjs = 'https://nextjs.org/';
iconLinks.bootstrap = 'https://getbootstrap.com/';
iconLinks.tailwind = 'https://tailwindcss.com/';
iconLinks.docker = 'https://www.docker.com/';
iconLinks.nodejs = 'https://nodejs.org/en';
iconLinks.express = 'https://expressjs.com/';
iconLinks.nestjs = 'https://nestjs.com/';
iconLinks.mongodb = 'https://www.mongodb.com/';
iconLinks.apple = 'https://www.apple.com/';
iconLinks.linux = 'https://www.linux.org/';
iconLinks.windows = 'https://www.microsoft.com/en-us/windows';
iconLinks.vscode = 'https://code.visualstudio.com/';
iconLinks.neovim = 'https://neovim.io/';
iconLinks.git = 'https://git-scm.com/';
iconLinks.github = 'https://github.com/';
iconLinks.vercel = 'https://vercel.com/';
iconLinks.railway = 'https://railway.app/';
iconLinks.figma = 'https://www.figma.com/';
iconLinks.illustrator = 'https://www.adobe.com/products/illustrator.html';
iconLinks.photoshop = 'https://www.adobe.com/products/photoshop.html';
iconLinks.aftereffects = 'https://www.adobe.com/products/aftereffects.html';
iconLinks.premiere = 'https://www.adobe.com/products/premiere.html';

const LinkIcons: FC<LinkIconProps> = ({ kind, ariaLabel }) => {
  const href = iconLinks[kind] || '#'; // Default to '#' if the kind is not found
  return (
    <Link href={href} passHref rel="noopener noreferrer" target="_blank" className="text-orange">
      <Icon kind={kind} />
    </Link>
  );
};

export default LinkIcons;