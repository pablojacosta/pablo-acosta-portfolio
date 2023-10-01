import { HTMLAttributes } from "react";
import styles from "./DetailsUsedTech.module.scss";

interface IDetailsUsedTech extends HTMLAttributes<HTMLDivElement> {}

const DetailsUsedTech = ({ children }: IDetailsUsedTech) => {
  return (
    <div className={styles.detailsUsedTech}>
      <h2>Tech used:</h2>
      {children}
    </div>
  );
};

export default DetailsUsedTech;
