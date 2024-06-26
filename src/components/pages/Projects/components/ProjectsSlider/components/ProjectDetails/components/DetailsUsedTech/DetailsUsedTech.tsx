import styles from "./DetailsUsedTech.module.scss";
import Image from "next/image";
import zustand from "@images/zustand.png";
import useMediaQuery from "@hooks/useMediaQuery";

interface IDetailsUsedTech {
  tech: any[];
  project: string;
}

const DetailsUsedTech = ({ tech, project }: IDetailsUsedTech) => {
  const isMobileBreakpoint = useMediaQuery(370);
  const zustandHeight = !isMobileBreakpoint ? 20 : 15;
  const showZustand =
    project === "bandcampify" ||
    project === "octoCorp" ||
    project === "what-2-eat" ||
    project === "lyrics&tabs";

  return (
    <div className={styles.detailsUsedTech}>
      <h2>Tech used:</h2>
      <ul>
        {tech.map((Icon, index) => {
          return (
            <li key={index}>
              <Icon key={index} />
            </li>
          );
        })}
        {showZustand && (
          <li className={styles.zustand}>
            <Image
              src={zustand.src}
              alt="Zustand Icon"
              width={30}
              height={zustandHeight}
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default DetailsUsedTech;
