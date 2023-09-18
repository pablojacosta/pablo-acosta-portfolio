import Link from "next/link";
import { useRouter } from "next/router";
import { ABOUT_ME, CONTACT, HOME, PROJECTS } from "constants/routes";
import styles from "./NavList.module.scss";

const NavList = () => {
  const { pathname } = useRouter();
  const addActiveClass = (path: string) => {
    return pathname === path ? styles.active : "";
  };

  return (
    <div className={styles.navList}>
      <ul>
        <li>
          <Link href={HOME} className={addActiveClass(HOME)}>
            Home
          </Link>
        </li>
        <li>
          <Link href={PROJECTS} className={addActiveClass(PROJECTS)}>
            Projects
          </Link>
        </li>
        <li>
          <Link href={ABOUT_ME} className={addActiveClass(ABOUT_ME)}>
            About me
          </Link>
        </li>
        <li>
          <Link href={CONTACT} className={addActiveClass(CONTACT)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
