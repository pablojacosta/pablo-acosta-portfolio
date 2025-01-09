import projectSevenImage from "@images/bandcampify.png";
import projectNineImage from "@images/buildtree.png";
import projectFiveImage from "@images/ckeditor-storybook.png";
import projectSixImage from "@images/lyrics_and_tabs_finder.png";
import projectOneImage from "@images/octocorp_img.png";
import projectThreeImage from "@images/project-three.jpg";
import projectTwoImage from "@images/project-two.jpg";
import projectEightImage from "@images/school-app.png";
import projectFourImage from "@images/what-2-eat.png";
import {
  BANDCAMPIFY,
  BANDCAMPIFY_CODE,
  BUILDTREE,
  BURN_ART,
  LYRICS_AND_TABS,
  LYRICS_AND_TABS_CODE,
  NPM_PACKAGE,
  NPM_PACKAGE_CODE,
  OCTOCORP,
  SCHOOL_APP,
  SCHOOL_APP_CODE,
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

export const projectSix = {
  name: "lyrics&tabs",
  description: "SPA THAT FETCHES LYRICS & TABS FROM RESTFUL APIs.",
  image: projectSixImage.src,
  link: LYRICS_AND_TABS,
  role: "Full Stack Dev.",
  code: LYRICS_AND_TABS_CODE,
};

export const projectSeven = {
  name: "bandcampify",
  description: "SPOTIFY-LIKE APP THAT SCRAPES DATA FROM BANDCAMP",
  image: projectSevenImage.src,
  link: BANDCAMPIFY,
  role: "Full Stack Dev.",
  code: BANDCAMPIFY_CODE,
};

export const projectEight = {
  name: "room-app",
  description: "ROOM MANAGEMENT APP",
  image: projectEightImage.src,
  link: SCHOOL_APP,
  role: "Full Stack Dev.",
  code: SCHOOL_APP_CODE,
};

export const projectNine = {
  name: "buildtree",
  description: "ECOSYSTEM OF BLOCKCHAIN TOOLS",
  image: projectNineImage.src,
  link: BUILDTREE,
  role: "Front End Dev. Web3.",
};

export const projectsSlides = [
  { name: "buildtree", slide: 0 },
  { name: "octocorp", slide: 1 },
  { name: "bandcampify", slide: 2 },
  { name: "burn.art", slide: 3 },
  { name: "whale", slide: 4 },
  { name: "room-app", slide: 5 },
  { name: "what-2-eat", slide: 6 },
  { name: "ck-comp", slide: 7 },
  { name: "lyrics&tabs", slide: 8 },
];
