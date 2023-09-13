import Image from "next/image";
import styles from "./ProjectDetails.module.scss";

interface IProjectDetails {
  image: string;
  name: string;
  description: string;
}

const IMAGE_SIZE = "380";

const ProjectDetails = ({ image, name, description }: IProjectDetails) => {
  return (
    <div className={styles.projectDetails}>
      <div className={styles.text}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <Image
        src={image}
        alt="Project Image"
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        className={styles.image}
      />
    </div>
  );
};

export default ProjectDetails;
