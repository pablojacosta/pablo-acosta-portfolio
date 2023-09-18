import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem/MenuItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from "hooks/useMediaQuery";
import { EProjects } from "constants/enums";

interface IMenu {
  selected: string;
  handleSelect: (name: string) => void;
  nav: any;
  handleSetNav: (slider: any) => void;
}
const Menu = ({ selected, handleSelect, nav, handleSetNav }: IMenu) => {
  const setClass = (name: string) => {
    return selected === name ? styles.active : "";
  };

  const isMobileBreakpoint = useMediaQuery(480);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className={styles.menu}>
      {!isMobileBreakpoint ? (
        <ul>
          <MenuItem
            name={EProjects.PROJECT_ONE}
            className={setClass(EProjects.PROJECT_ONE)}
            onClick={() => handleSelect(EProjects.PROJECT_ONE)}
          />
          <MenuItem
            name={EProjects.PROJECT_TWO}
            className={setClass(EProjects.PROJECT_TWO)}
            onClick={() => handleSelect(EProjects.PROJECT_TWO)}
          />
          <MenuItem
            name={EProjects.PROJECT_THREE}
            className={setClass(EProjects.PROJECT_THREE)}
            onClick={() => handleSelect(EProjects.PROJECT_THREE)}
          />
          <MenuItem
            name={EProjects.PROJECT_FOUR}
            className={setClass(EProjects.PROJECT_FOUR)}
            onClick={() => handleSelect(EProjects.PROJECT_FOUR)}
          />
          <MenuItem
            name={EProjects.PROJECT_FIVE}
            className={setClass(EProjects.PROJECT_FIVE)}
            onClick={() => handleSelect(EProjects.PROJECT_FIVE)}
          />
        </ul>
      ) : (
        <Slider
          {...settings}
          asNavFor={nav}
          ref={(slider) => handleSetNav(slider)}
        >
          <div
            className={`${styles.sliderItem} ${setClass(
              EProjects.PROJECT_ONE
            )}`}
          >
            OctoCorp
          </div>
          <div
            className={`${styles.sliderItem} ${setClass(
              EProjects.PROJECT_TWO
            )}`}
          >
            Burn.Art
          </div>
          <div
            className={`${styles.sliderItem} ${setClass(
              EProjects.PROJECT_THREE
            )}`}
          >
            Whale
          </div>
          <div
            className={`${styles.sliderItem} ${setClass(
              EProjects.PROJECT_FOUR
            )}`}
          >
            Project Four
          </div>
          <div
            className={`${styles.sliderItem} ${setClass(
              EProjects.PROJECT_FIVE
            )}`}
          >
            Project Five
          </div>
        </Slider>
      )}
      <div className={styles.line} />
    </div>
  );
};

export default Menu;
