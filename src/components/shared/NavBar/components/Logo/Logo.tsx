import Image from "next/image";
import logo from "@images/beard-hat-icon-no-background.png";
import styles from "./Logo.module.scss";

const LOGO_SIZE = "40";

const Logo = () => {
  return (
    <Image
      src={logo.src}
      width={LOGO_SIZE}
      height={LOGO_SIZE}
      alt="Beard and hat logo"
      className={styles.logo}
    />
  );
};

export default Logo;
