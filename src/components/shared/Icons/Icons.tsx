import IconNextjs from "@components/elements/Icons/NextIcon/NextIcon";
import IconReact from "@components/elements/Icons/ReactIcon/ReactIcon";
import IconSass from "@components/elements/Icons/SassIcon/SassIcon";
import IconTypescript from "@components/elements/Icons/TypescriptIcon/TypescriptIcon";
import styles from "./Icons.module.scss";

const Icons = () => {
  return (
    <div className={styles.icons}>
      <IconTypescript />
      <IconNextjs />
      <IconReact />
      <IconSass />
    </div>
  );
};

export default Icons;
