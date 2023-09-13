import { projectsSlides } from "constants/projects";

export const findSlide = (name: string) => {
  const project = projectsSlides.find((item) => item.name === name);

  return project?.slide;
};

export const findName = (index: number) => {
  const project = projectsSlides.find((item) => item.slide === index);

  return project?.name;
};
