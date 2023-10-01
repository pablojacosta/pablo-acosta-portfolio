import styles from "./ProjectDetails.module.scss";
import DetailsText from "./components/DetailsText";
import DetailsImage from "./components/DetailsImage";
import DetailsButton from "./components/DetailsButton";
import useMediaQuery from "@hooks/useMediaQuery";
import DetailsUsedTech from "./components/DetailsUsedTech";
import IconNextjs from "@components/elements/Icons/NextIcon/NextIcon";
import Image from "next/image";

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

  return (
    <div className={styles.projectDetails}>
      {!isTabletBreakpoint ? (
        <>
          <DetailsText name={name} description={description} role={role} />
          <div className={styles.center}>
            <DetailsImage image={image} link={link} />
            <DetailsUsedTech>
              <ul>
                {tech.map((Icon, index) => {
                  return (
                    <li key={index}>
                      <Icon key={index} />
                    </li>
                  );
                })}
              </ul>
            </DetailsUsedTech>
          </div>
          <div className={styles.buttons}>
            <DetailsButton link={link} text={"Go To Website"} />
            {code && <DetailsButton link={code} text={"Project's Code"} />}
          </div>
        </>
      ) : (
        <>
          <DetailsImage image={image} link={link} />
          <div className={styles.bottom}>
            <DetailsText name={name} description={description} role={role} />
            <DetailsButton link={link} text={"Go To Website"} />
            {code && <DetailsButton link={code} text={"Project's Code"} />}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
