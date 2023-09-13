import { HTMLAttributes } from "react";
import styles from "./PrevArrow.module.scss";

const PrevArrow = ({ onClick }: HTMLAttributes<HTMLButtonElement>) => (
  <button className={styles.arrow} onClick={onClick} />
);

export default PrevArrow;
