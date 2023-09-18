import { OCTOCORP } from "constants/externalLinks";
import styles from "./ProjectDetails.module.scss";
import Link from "next/link";
import Button from "@components/elements/Button";

interface IProjectDetails {
  image: string;
  name: string;
  description: string;
  link: string;
  role: string;
}

const ProjectDetails = ({
  image,
  name,
  description,
  link,
  role,
}: IProjectDetails) => {
  const secondClass = link !== OCTOCORP ? styles.secondClass : "";

  return (
    <div className={styles.projectDetails}>
      <div className={styles.text}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.role}>Role: {role}</p>
      </div>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <picture>
          <img
            src={image}
            alt="Project Image"
            className={`${styles.image} ${secondClass}`}
          />
        </picture>
      </Link>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Button>Go To Website</Button>
      </Link>
    </div>
  );
};

export default ProjectDetails;
