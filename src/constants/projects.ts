import mockedImage from "@images/beard-hat-icon.jpg";
import projectOneImage from "@images/project-one.png";
import projectTwoImage from "@images/project-two.jpg";
import projectThreeImage from "@images/project-three.jpg";
import { BURN_ART, OCTOCORP, WHALE } from "./externalLinks";

export const projectOne = {
  name: "octoCorp",
  description: "NFT LANDING AND MINTING PAGE.",
  image: projectOneImage.src,
  link: OCTOCORP,
  role: "Full Stack Dev. Web3.",
};

export const projectTwo = {
  name: "burn.art",
  description: "NFT BURNING AND CURRENCY MINTING PAGE.",
  image: projectTwoImage.src,
  link: BURN_ART,
  role: "Front End Dev. Web3.",
};

export const projectThree = {
  name: "whale",
  description: "CURRENCY WEB.",
  image: projectThreeImage.src,
  link: WHALE,
  role: "Full Stack Dev (WEB & CMS).",
};

export const projectFour = {
  name: "lyrics & tabs finder",
  description: "SPA SEARCH ENGINE.",
  image: mockedImage.src,
  link: BURN_ART,
  role: "Full Stack Dev.",
};

export const projectFive = {
  name: "what-2-eat",
  description: "SPA SEARCH ENGINE.",
  image: mockedImage.src,
  link: BURN_ART,
  role: "Full Stack Dev.",
};

export const projectsSlides = [
  { name: "octocorp", slide: 0 },
  { name: "burn.art", slide: 1 },
  { name: "whale", slide: 2 },
  { name: "lyrics & tabs finder", slide: 3 },
  { name: "what-2-eat", slide: 4 },
];
