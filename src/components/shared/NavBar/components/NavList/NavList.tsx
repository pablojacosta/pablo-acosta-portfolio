import Link from "next/link";
import { useRouter } from "next/router";
import { ABOUT_ME, CONTACT, HOME, PROJECTS } from "constants/routes";
import styles from "./NavList.module.scss";
import AnimatedLink from "@components/elements/AnimatedLink";

const NavList = () => {
  const { pathname } = useRouter();
  const addActiveClass = (path: string) => {
    return pathname === path ? styles.active : "";
  };

  return (
    <div className={styles.navList}>
      <ul>
        <li>
          <AnimatedLink href={HOME} className={addActiveClass(HOME)}>
            Home
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href={PROJECTS} className={addActiveClass(PROJECTS)}>
            Works
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href={ABOUT_ME} className={addActiveClass(ABOUT_ME)}>
            About me
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href={CONTACT} className={addActiveClass(CONTACT)}>
            Contact
          </AnimatedLink>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
