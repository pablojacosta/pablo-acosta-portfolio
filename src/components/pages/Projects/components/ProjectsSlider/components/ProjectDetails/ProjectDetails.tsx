import styles from "./ProjectDetails.module.scss";
import DetailsText from "./components/DetailsText";
import DetailsImage from "./components/DetailsImage";
import DetailsButton from "./components/DetailsButton";
import useMediaQuery from "@hooks/useMediaQuery";
import DetailsUsedTech from "./components/DetailsUsedTech";

interface IProjectDetails {
  image: string;
  name: string;
  description: string;
  link: string;
  role: string;
  code?: string;
  tech: any[];
}

const ProjectDetails = ({
  image,
  name,
  description,
  link,
  role,
  code,
  tech,
}: IProjectDetails) => {
  const isTabletBreakpoint = useMediaQuery(890);
  const isMobileBreakpoint = useMediaQuery(480);

  return (
    <div className={styles.projectDetails}>
      {!isTabletBreakpoint && !isMobileBreakpoint && (
        <>
          <DetailsText name={name} description={description} role={role} />
          <div className={styles.center}>
            <DetailsImage image={image} link={link} />
            <DetailsUsedTech tech={tech} project={name} />
          </div>
          <div className={styles.buttons}>
            <DetailsButton link={link} text={"Go To Website"} />
            {code && <DetailsButton link={code} text={"Project's Code"} />}
          </div>
        </>
      )}

      {isTabletBreakpoint && !isMobileBreakpoint && (
        <>
          <DetailsImage image={image} link={link} />
          <DetailsUsedTech tech={tech} project={name} />
          <div className={styles.bottom}>
            <DetailsText name={name} description={description} role={role} />
            <div className={styles.buttons}>
              <DetailsButton link={link} text={"Go To Website"} />
              {code && <DetailsButton link={code} text={"Project's Code"} />}
            </div>
          </div>
        </>
      )}

      {isTabletBreakpoint && isMobileBreakpoint && (
        <>
          <DetailsImage image={image} link={link} />

          <div className={styles.bottom}>
            <DetailsText name={name} description={description} role={role} />
            <div className={styles.buttons}>
              <DetailsButton link={link} text={"Go To Website"} />
              {code && <DetailsButton link={code} text={"Project's Code"} />}
            </div>
            <DetailsUsedTech tech={tech} project={name} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
