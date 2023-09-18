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
  name: "what-2-eat",
  description: "PROJECT DESCRIPTION",
  image: mockedImage.src,
  link: BURN_ART,
  role: "Full Stack Dev.",
};

export const projectFive = {
  name: "project five",
  description: "PROJECT DESCRIPTION",
  image: mockedImage.src,
  link: BURN_ART,
  role: "Full Stack Dev. Web3.",
};

export const projectsSlides = [
  { name: "octocorp", slide: 0 },
  { name: "burn.art", slide: 1 },
  { name: "whale", slide: 2 },
  { name: "project four", slide: 3 },
  { name: "project five", slide: 4 },
];
