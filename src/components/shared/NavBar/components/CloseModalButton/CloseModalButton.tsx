import IconCloseOutline from "@components/elements/Icons/CloseIcon/CloseIcon";
import styles from "./CloseModalButton.module.scss";

interface ICloseModalButton {
  handleSetCloseModal: () => void;
}

const CloseModalButton = ({ handleSetCloseModal }: ICloseModalButton) => {
  return (
    <button className={styles.closeModalButton}>
      <IconCloseOutline onClick={handleSetCloseModal} />
    </button>
  );
};

export default CloseModalButton;
