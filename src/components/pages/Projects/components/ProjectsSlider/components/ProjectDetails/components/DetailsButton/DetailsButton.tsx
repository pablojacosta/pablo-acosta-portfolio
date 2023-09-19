import Link from "next/link";
import Button from "@components/elements/Button";
import styles from "./DetailsButton.module.scss";

interface IDetailsButton {
  link: string;
}

const DetailsButton = ({ link }: IDetailsButton) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.detailsButton}
    >
      <Button>Go To Website</Button>
    </Link>
  );
};

export default DetailsButton;
