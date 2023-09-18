import { useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import styles from "./NavBar.module.scss";
import NavList from "./components/NavList";
import Logo from "./components/Logo";
// import NavIcon from "./NavIcon/NavIcon";
// import Modal from "./Modal/Modal";

const NavBar = () => {
  const isTabletBreakpoint = useMediaQuery(768);
  const [showModal, setShowModal] = useState(false);

  const handleSetShowModal = () => {
    setShowModal(true);
  };

  const handleSetCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <nav className={styles.navBar}>
        <div>
          <Logo />
          <NavList />
          <Logo />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
