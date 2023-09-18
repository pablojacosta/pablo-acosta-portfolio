import { useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import styles from "./NavBar.module.scss";
import NavList from "./components/NavList";
import Logo from "./components/Logo";
import IconMenuSquare from "@components/elements/Icons/MenuIcon/MenuIcon";
import NavModal from "./components/NavModal";

const NavBar = () => {
  const isMobileBreakpoint = useMediaQuery(480);
  const isMobileSmallBreakpoint = useMediaQuery(423);
  const [showModal, setShowModal] = useState(false);

  const handleSetShowModal = () => {
    setShowModal(true);
  };

  const handleSetCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && isMobileSmallBreakpoint && (
        <NavModal handleSetCloseModal={handleSetCloseModal} />
      )}
      <nav className={styles.navBar}>
        <div>
          {!isMobileBreakpoint && <Logo />}
          {!isMobileSmallBreakpoint ? (
            <NavList />
          ) : (
            <div className={styles.menuIcon} onClick={handleSetShowModal}>
              <IconMenuSquare />
            </div>
          )}
          {!isMobileBreakpoint && <Logo />}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
