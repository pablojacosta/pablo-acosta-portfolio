import Footer from "@components/shared/Footer";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import Logo from "../Logo";
import NavList from "../NavList";
import styles from "./NavModal.module.scss";

interface INavModal {
  handleSetCloseModal: () => void;
}

const NavModal = ({ handleSetCloseModal }: INavModal) => {
  return (
    <div className={styles.navModal} onClick={handleSetCloseModal}>
      <div className={styles.top}>
        <Logo />
        <CloseModalButton handleSetCloseModal={handleSetCloseModal} />
      </div>
      <div className={styles.bottom}>
        <NavList />
        <Footer removeBg />
      </div>
    </div>
  );
};

export default NavModal;
