/* src/app/_components/_icons/Icons.tsx */

import { FaApple, FaLinux, FaWindows, FaGithub, FaLinkedin, FaEnvelope, FaReact, FaHtml5, FaCss3Alt, FaGit, FaNodeJs, FaBootstrap, FaSun, FaMoon, FaDocker, FaUserNinja, FaArrowAltCircleRight } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandVercel } from 'react-icons/tb';
import { IoCloseCircleOutline, IoChevronDownSharp } from 'react-icons/io5';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { SiTailwindcss, SiExpress, SiNestjs, SiMongodb, SiNeovim, SiVisualstudiocode, SiRailway, SiAdobepremierepro, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiGithubpages, SiMui } from 'react-icons/si';
import { CgInternal, CgArrowUp, CgFigma } from 'react-icons/cg';
import { LiaLongArrowAltUpSolid, LiaLongArrowAltDownSolid, LiaLongArrowAltRightSolid, LiaLongArrowAltLeftSolid, LiaExternalLinkAltSolid, LiaDnaSolid } from 'react-icons/lia';
import { GoProjectSymlink } from 'react-icons/go';
import { ImPower } from 'react-icons/im';
import { MdContactSupport, MdWeb } from 'react-icons/md';
import { AiOutlineNodeIndex } from 'react-icons/ai';
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi';
import { HiAcademicCap } from 'react-icons/hi2';
import { GiSevenPointedStar } from 'react-icons/gi';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { PiHeartStraightFill, PiCertificateFill } from 'react-icons/pi';
import { IoMdCalendar } from 'react-icons/io';
import { BsEmojiSunglasses } from 'react-icons/bs';
const components = {
  /* Academic */
  academic: HiAcademicCap,
  /* Arrows */
  arrowUp: LiaLongArrowAltUpSolid,
  arrowUpCg: CgArrowUp,
  arrowDown: LiaLongArrowAltDownSolid,
  arrowDownChevron: IoChevronDownSharp,
  arrowLeft: LiaLongArrowAltLeftSolid,
  arrowRight: LiaLongArrowAltRightSolid,
  arrowCircleRight: FaArrowAltCircleRight,
  /* Calendar */
  calendar: IoMdCalendar,
  /* Certificate */
  certificate: PiCertificateFill,
  /* Contact */
  email: FaEnvelope,
  /* Dev */
  apple: FaApple,
  bootstrap: FaBootstrap,
  css: FaCss3Alt,
  docker: FaDocker,
  express: SiExpress,
  git: FaGit,
  github: FaGithub,
  githubPages: SiGithubpages,
  linux: FaLinux,
  html: FaHtml5,
  js: BiLogoJavascript,
  materialui: SiMui,
  mongodb: SiMongodb,
  nestjs: SiNestjs,
  neovim: SiNeovim,
  nextjs: TbBrandNextjs,
  ninja: FaUserNinja,
  nodejs: FaNodeJs,
  railway: SiRailway,
  react: FaReact,
  tailwind: SiTailwindcss,
  ts: BiLogoTypescript,
  vercel: TbBrandVercel,
  vscode: SiVisualstudiocode,
  windows: FaWindows,
  /* Design */
  figma: CgFigma,
  illustrator: SiAdobeillustrator,
  photoshop: SiAdobephotoshop,
  premiere: SiAdobepremierepro,
  aftereffects: SiAdobeaftereffects,
  /* Dna */
  dna: LiaDnaSolid,
  /* Emoji */
  sunglassesEmoji: BsEmojiSunglasses,
  /* Heart */
  heart: PiHeartStraightFill,
  /* Light */
  lightbulb: RiLightbulbFlashLine,
  /* Link */
  externalLink: LiaExternalLinkAltSolid,
  internalLink: CgInternal,
  /* Menu */
  menuClose: IoCloseCircleOutline,
  menuOpen: HiOutlineMenuAlt3,
  /* Theme */
  moon: FaMoon,
  sun: FaSun,
  /* Social */
  linkedin: FaLinkedin,
  /* Star */
  star: GiSevenPointedStar,
  /* Web */
  web: MdWeb,
  /* Works */
  skills: ImPower,
  works: GoProjectSymlink,
  about: MdContactSupport,
  contact: AiOutlineNodeIndex,
};

type IconProps = {
  kind: keyof typeof components;
};

const Icon = ({ kind }: IconProps) => {
  const IconComponent = components[kind];

  return (
    <>
      <span className="sr-only">{kind}</span>
      <IconComponent />
    </>
  );
};
export type IconKind = keyof typeof components;
export default Icon;
