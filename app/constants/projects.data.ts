import bandcampify from '../../public/images/bandcampify.png';
import buildtree from '../../public/images/buildtree.png';
import burn from '../../public/images/burn.jpg';
import ckeditor from '../../public/images/ckeditor-comp.png';
import lyrics from '../../public/images/lyrics_and_tabs_finder.png';
import octocorp from '../../public/images/octocorp.png';
import school from '../../public/images/school-app.png';
import tom from '../../public/images/tom-sachs.webp';
import whale from '../../public/images/whale.jpg';
import eat from '../../public/images/what-2-eat.png';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  projectUrl: string;
  githubUrl: string;
  longDescription?: string;
  isFeatured: boolean;
  type: 'professional' | 'personal';
}

export const projects: Project[] = [
  {
    title: 'Buildtree',
    description: 'Ecosystem of Blockchain tools.',
    image: buildtree.src,
    link: '/projects',
    tags: [
      'Next.js',
      'TypeScript',
      'React',
      'Sass',
      'Node.js',
      'MongoDB',
      'Web3.js',
      'React Context',
      'Jest',
      'Figma',
      'Cloudflare',
    ],
    projectUrl: 'https://buildtree.io',
    longDescription:
      'Buildtree is an ecosystem of web3 products and tools that allows artists and brands to easily build, launch, showcase, and monetize NFT projects.',
    githubUrl: 'https://github.com',
    isFeatured: true,
    type: 'professional',
  },
  {
    title: 'Octocorp',
    description: 'NFT landing and minting page.',
    image: octocorp.src,
    link: '/projects',
    tags: [
      'Next.js',
      'TypeScript',
      'React',
      'Sass',
      'Node.js',
      'Web3.js',
      'Zustand',
      'Jest',
      'Figma',
      'Cloudflare',
    ],
    projectUrl: 'https://octocorporation.com',
    longDescription:
      'NFT landing and minting page. Built an UI for creating composable NFTs, allowing users to combine NFT parts to create new unique assets. Implemented the script used for creating NFTs with random characteristics. ',
    githubUrl: 'https://github.com',
    isFeatured: true,
    type: 'professional',
  },
  {
    title: 'Bandcampify',
    description: 'Music streaming platform.',
    image: bandcampify.src,
    link: '/projects',
    tags: [
      'Next.js',
      'TypeScript',
      'React',
      'Sass',
      'Node.js',
      'Web3.js',
      'Zustand',
      'Vite',
      'Netlify',
    ],
    projectUrl: 'https://bandcampify.netlify.app',
    longDescription:
      "Music streaming platform that scrapes data from Bandcamp's site and replicates Spotify's user experience.",
    githubUrl: 'https://github.com/pablojacosta/bandcampify-app',
    isFeatured: false,
    type: 'personal',
  },
  {
    title: 'Tom Sachs - Rocket Factory',
    description: 'NFT landing and minting page.',
    image: tom.src,
    link: '/projects',
    tags: ['TypeScript', 'React', 'Sass', 'Web3.js', 'Jest', 'Figma'],
    projectUrl: 'https://tomsachsrocketfactory.com/',
    longDescription:
      'NFT landing and minting page that features new Web3 technologies, such as composable NFTs, and a Metaverse experience in Decentraland that took users on an outer space journey.',
    githubUrl: '',
    isFeatured: false,
    type: 'professional',
  },
  {
    title: 'Burn.art',
    description: 'NFT burning and currency minting page.',
    image: burn.src,
    link: '/projects',
    tags: [
      'Next.js',
      'TypeScript',
      'React',
      'Sass',
      'Node.js',
      'Web3.js',
      'React Context',
      'Jest',
      'Figma',
      'Cloudflare',
    ],
    projectUrl: 'https://burn.art',
    longDescription:
      'NFT burning and currency minting page. Migrated project from Vue to Next.js and added new features.',
    githubUrl: '',
    isFeatured: false,
    type: 'professional',
  },
  {
    title: 'Whale',
    description: 'Currency Web.',
    image: whale.src,
    link: '/projects',
    tags: [
      'Next.js',
      'TypeScript',
      'React',
      'Sass',
      'Node.js',
      'Web3.js',
      'Docker',
      'Jest',
      'Figma',
      'Cloudflare',
    ],
    projectUrl: 'https://whale.me',
    longDescription: 'Currency membership website.',
    githubUrl: '',
    isFeatured: false,
    type: 'professional',
  },
  {
    title: 'Room App',
    description: 'Room management app.',
    image: school.src,
    link: '/projects',
    tags: [
      'Next.js',
      'TypeScript',
      'React',
      'Sass',
      'Node.js',
      'MongoDB',
      'Zustand',
    ],
    projectUrl: 'https://room-manager-school-app.netlify.app/',
    longDescription: 'Room management app.',
    githubUrl: 'https://github.com/pablojacosta/school-app',
    isFeatured: false,
    type: 'personal',
  },
  {
    title: 'What-2-Eat',
    description: 'SPA that fetches recipes from a RESTful API.',
    image: eat.src,
    link: '/projects',
    tags: ['TypeScript', 'React', 'Sass', 'Zustand', 'Vite', 'Netlify'],
    projectUrl: 'https://what-2-eat.netlify.app/',
    longDescription: 'SPA that fetches recipes from a RESTful API.',
    githubUrl: 'https://github.com/pablojacosta/what-2-eat-app',
    isFeatured: false,
    type: 'personal',
  },
  {
    title: 'CK-Comp',
    description: 'NPM package of a Rich Text Editor component ready to use.',
    image: ckeditor.src,
    link: '/projects',
    tags: ['NPM', 'TypeScript', 'React', 'Storybook'],
    projectUrl: 'https://www.npmjs.com/package/@milludds/ckeditor-component',
    longDescription:
      'NPM package of a Rich Text Editor ready-to-use component.',
    githubUrl: 'https://github.com/pablojacosta/ckeditor-component',
    isFeatured: false,
    type: 'personal',
  },
  {
    title: 'Lyrics & Tabs Finder',
    description: 'SPA that fetches lyrics and tabs from RESTful APIs.',
    image: lyrics.src,
    link: '/projects',
    tags: [
      'TypeScript',
      'React',
      'Sass',
      'Node.js',
      'Zustand',
      'Vite',
      'Netlify',
    ],
    projectUrl: 'https://lyrics-and-tabs-finder.netlify.app/',
    longDescription: 'SPA that fetches lyrics and tabs from RESTful APIs.',
    githubUrl: 'https://github.com/pablojacosta/lyrics-tabs-app-front',
    isFeatured: false,
    type: 'personal',
  },
];
