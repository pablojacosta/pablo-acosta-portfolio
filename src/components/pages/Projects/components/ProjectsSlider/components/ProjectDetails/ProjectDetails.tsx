import styles from "./ProjectDetails.module.scss";
import DetailsText from "./components/DetailsText";
import DetailsImage from "./components/DetailsImage";
import DetailsButton from "./components/DetailsButton";
import useMediaQuery from "@hooks/useMediaQuery";

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
  const isTabletBreakpoint = useMediaQuery(890);

  return (
    <div className={styles.projectDetails}>
      {!isTabletBreakpoint ? (
        <>
          <DetailsText name={name} description={description} role={role} />
          <DetailsImage image={image} link={link} />
          <DetailsButton link={link} />
        </>
      ) : (
        <>
          <DetailsImage image={image} link={link} />
          <div className={styles.bottom}>
            <DetailsText name={name} description={description} role={role} />
            <DetailsButton link={link} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
