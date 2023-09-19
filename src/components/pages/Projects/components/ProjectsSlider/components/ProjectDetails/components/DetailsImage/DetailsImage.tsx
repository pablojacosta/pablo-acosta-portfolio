import { OCTOCORP } from "constants/externalLinks";
import Link from "next/link";
import styles from "./DetailsImage.module.scss";

interface IDetailsImage {
  link: string;
  image: string;
}

const DetailsImage = ({ link, image }: IDetailsImage) => {
  const secondClass = link !== OCTOCORP ? styles.secondClass : "";

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <picture>
        <img
          src={image}
          alt="Project Image"
          className={`${styles.detailsImage} ${secondClass}`}
        />
      </picture>
    </Link>
  );
};

export default DetailsImage;
