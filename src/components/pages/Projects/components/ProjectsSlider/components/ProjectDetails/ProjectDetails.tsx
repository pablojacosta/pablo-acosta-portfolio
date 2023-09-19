import styles from "./ProjectDetails.module.scss";
import DetailsText from "./components/DetailsText";
import DetailsImage from "./components/DetailsImage";
import DetailsButton from "./components/DetailsButton";

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
  return (
    <div className={styles.projectDetails}>
      <DetailsText name={name} description={description} role={role} />
      <DetailsImage image={image} link={link} />
      <DetailsButton link={link} />
    </div>
  );
};

export default ProjectDetails;
