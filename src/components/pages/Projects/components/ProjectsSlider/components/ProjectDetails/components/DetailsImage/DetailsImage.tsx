import {
  LYRICS_AND_TABS,
  OCTOCORP,
  WHAT_TO_EAT,
} from "constants/externalLinks";
import Link from "next/link";
import styles from "./DetailsImage.module.scss";

interface IDetailsImage {
  link: string;
  image: string;
}

const DetailsImage = ({ link, image }: IDetailsImage) => {
  const secondClass =
    link !== OCTOCORP && link !== WHAT_TO_EAT ? styles.secondClass : "";
  const lyricsClass = link === LYRICS_AND_TABS ? styles.lyrics : "";

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <picture>
        <img
          src={image}
          alt="Project Image"
          className={`${styles.detailsImage} ${secondClass} ${lyricsClass}`}
        />
      </picture>
    </Link>
  );
};

export default DetailsImage;
