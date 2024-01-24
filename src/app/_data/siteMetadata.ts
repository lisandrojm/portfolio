/* src/app/_data/siteMetadata.ts */

interface SiteMetadata {
  title: string;
  author: string;
  headerTitle: string;
  description: string;
  language: string;
  theme: string;
  siteUrl: string;
  siteRepo: string;
  siteLogo: string;
  siteImageUrl: string;
  socialBanner: string;
  email: string;
  github: string;
  linkedin: string;
  locale: string;
}

const siteMetadata: SiteMetadata = {
  title: 'lisandrojm 🤙',
  author: 'Lisandro Martínez',
  headerTitle: 'lisandrojm | FullStackDev ',
  description: 'Lisandro Martinez. Argentinian Full-Stack Dev. Developer based in Argentina.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://lisandrojm.vercel.app',
  siteRepo: 'https://github.com/lisandrojm/portfolio',
  siteLogo: '/public/_static/_img/logo.webp',
  siteImageUrl: 'https://lisandrojm.vercel.app/_static/_img/cover-share.webp',
  socialBanner: '/public/_static/_img/logo.webp',
  email: 'lisandrojm@gmail.com',
  github: 'https://github.com/lisandrojm',
  linkedin: 'https://www.linkedin.com/in/lisandrojm/',
  locale: 'en-US',
};

export default siteMetadata;
