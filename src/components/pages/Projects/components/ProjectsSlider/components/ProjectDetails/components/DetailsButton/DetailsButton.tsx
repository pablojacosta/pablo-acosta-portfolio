import Link from "next/link";
import Button from "@components/elements/Button";
import styles from "./DetailsButton.module.scss";

interface IDetailsButton {
  link: string;
  text: string;
}

const DetailsButton = ({ link, text }: IDetailsButton) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.detailsButton}
    >
      <Button>{text}</Button>
    </Link>
  );
};

export default DetailsButton;
