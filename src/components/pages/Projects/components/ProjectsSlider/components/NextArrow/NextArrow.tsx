import { HTMLAttributes } from "react";
import styles from "./NextArrow.module.scss";

const NextArrow = ({ onClick }: HTMLAttributes<HTMLButtonElement>) => (
  <button className={styles.arrow} onClick={onClick} />
);

export default NextArrow;
