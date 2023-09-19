import styles from "./DetailsText.module.scss";

interface IDetailsText {
  name: string;
  description: string;
  role: string;
}

const DetailsText = ({ name, description, role }: IDetailsText) => {
  return (
    <div className={styles.detailsText}>
      <p className={styles.name}>{name}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.role}>Role: {role}</p>
    </div>
  );
};

export default DetailsText;
