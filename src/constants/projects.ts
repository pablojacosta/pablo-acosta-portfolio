import projectOneImage from "@images/project-one.png";
import projectTwoImage from "@images/project-two.jpg";
import projectThreeImage from "@images/project-three.jpg";
import projectFourImage from "@images/what-2-eat.png";
import projectFiveImage from "@images/ckeditor-comp.png";
import {
  BURN_ART,
  NPM_PACKAGE,
  NPM_PACKAGE_CODE,
  OCTOCORP,
  WHALE,
  WHAT_TO_EAT,
  WHAT_TO_EAT_CODE,
} from "./externalLinks";

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
  description: "SPA THAT FETCHES RECIPES FROM A RESTFUL API.",
  image: projectFourImage.src,
  link: WHAT_TO_EAT,
  role: "Front End Dev.",
  code: WHAT_TO_EAT_CODE,
};

export const projectFive = {
  name: "cK-comp",
  description: "NPM PACKAGE OF A RICH TEXT EDITOR COMPONENT.",
  image: projectFiveImage.src,
  link: NPM_PACKAGE,
  role: "Full Stack Dev.",
  code: NPM_PACKAGE_CODE,
};

export const projectsSlides = [
  { name: "octocorp", slide: 0 },
  { name: "burn.art", slide: 1 },
  { name: "whale", slide: 2 },
  { name: "what-2-eat", slide: 3 },
  { name: "ck-comp", slide: 4 },
];
