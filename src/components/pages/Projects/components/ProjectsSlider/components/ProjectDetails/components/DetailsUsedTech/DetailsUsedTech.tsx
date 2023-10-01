import { HTMLAttributes } from "react";
import styles from "./DetailsUsedTech.module.scss";

interface IDetailsUsedTech {
  tech: any[];
}

const DetailsUsedTech = ({ tech }: IDetailsUsedTech) => {
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
      </ul>
    </div>
  );
};

export default DetailsUsedTech;
