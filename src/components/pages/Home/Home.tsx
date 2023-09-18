import Container from "@components/elements/Container";
import styles from "./Home.module.scss";
import Icons from "@components/shared/Icons";
import IconCode from "@components/elements/Icons/CodeIcon/CodeIcon";
import Link from "next/link";
import { PORTFOLIO_URL } from "constants/externalLinks";

const Home = () => {
  return (
    <Container>
      <div className={styles.home}>
        <div className={styles.top}>
          <h1>My Portfolio</h1>
          <div className={styles.content}>
            <div className={`${styles.square} ${styles.border}`}>
              <p>
                Hi! My name is Pablo and I&apos;m a Full Stack Developer from
                Argentina.
              </p>
            </div>
            <div className={`${styles.square} ${styles.border}`}>
              <p>
                I discovered my passion for development after several years of
                playing, recording & mixing music. Now, music is my hobby and
                development my career.
              </p>
            </div>
            <div className={`${styles.square} ${styles.border}`}>
              <p>
                One day, I decided to escape from Buenos Aires city, so now I
                work remotely surrounded by beautiful mountains.
              </p>
            </div>
            <div className={styles.square}>
              <p>
                The technologies that I use are Typescript/Javascript, React.js,
                Next.js, Node.js, SASS/CSS & HTML.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>
            <p>This Portfolio was built using:</p>
            <Icons />
            <div className={styles.code}>
              <p>You can check its CODE at:</p>
              <Link
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconCode />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
