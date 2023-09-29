import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProjectsSlider.module.scss";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import NextArrow from "./components/NextArrow/NextArrow";
import PrevArrow from "./components/PrevArrow/PrevArrow";
import Menu from "./components/Menu/Menu";
import { useEffect, useState } from "react";
import useMediaQuery from "hooks/useMediaQuery";
import { findName, findSlide } from "utils/helpers/slider/slides";
import {
  projectFive,
  projectFour,
  projectOne,
  projectThree,
  projectTwo,
} from "constants/projects";

const ProjectsSlider = () => {
  const [selected, setSelected] = useState("octocorp");
  const isMobileBreakpoint = useMediaQuery(563);
  const [slideToShow, setSlideToShow] = useState(0);
  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>(null);

  const handleSelect = (item: string) => {
    setSelected(item);
  };

  const handleSetNav1 = (slider: Slider) => {
    setNav1(slider);
  };

  const handleSetNav2 = (slider: Slider) => {
    setNav2(slider);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_oldIndex: number, currentIndex: number) => {
      setSelected(findName(currentIndex)!);
    },
  };

  useEffect(() => {
    setSlideToShow(findSlide(selected)!);
  }, [selected]);

  return (
    <div className={`${styles.projectsSlider} animatedContent`}>
      <Menu
        selected={selected}
        handleSelect={handleSelect}
        nav={nav2}
        handleSetNav={handleSetNav1}
      />
      <div className={styles.slider}>
        <Slider
          {...settings}
          ref={
            !isMobileBreakpoint
              ? (slider) => slider?.slickGoTo(slideToShow)
              : (slider) => setNav2(slider)
          }
          asNavFor={nav1}
        >
          <ProjectDetails
            image={projectOne.image}
            name={projectOne.name}
            description={projectOne.description}
            link={projectOne.link}
            role={projectOne.role}
          />
          <ProjectDetails
            image={projectTwo.image}
            name={projectTwo.name}
            description={projectTwo.description}
            link={projectTwo.link}
            role={projectTwo.role}
          />
          <ProjectDetails
            image={projectThree.image}
            name={projectThree.name}
            description={projectThree.description}
            link={projectThree.link}
            role={projectThree.role}
          />
          <ProjectDetails
            image={projectFour.image}
            name={projectFour.name}
            description={projectFour.description}
            link={projectFour.link}
            role={projectFour.role}
            code={projectFour.code}
          />
          <ProjectDetails
            image={projectFive.image}
            name={projectFive.name}
            description={projectFive.description}
            link={projectFive.link}
            role={projectFive.role}
            code={projectFive.code}
          />
        </Slider>
      </div>
    </div>
  );
};

export default ProjectsSlider;
