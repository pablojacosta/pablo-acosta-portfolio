import Container from "@components/elements/Container";
import styles from "./Home.module.scss";
import Icons from "@components/shared/Icons";

const Home = () => {
  return (
    <Container>
      <div className={styles.home}>
        <div className={styles.top}>
          <h1>Pablo Acosta&apos;s Portfolio</h1>
        </div>
        <div className={styles.bottom}>
          <div>
            <p>This Portfolio was built using:</p>
            <Icons />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
