import Container from "@components/elements/Container";
import styles from "./Home.module.scss";
import Icons from "@components/shared/Icons";
import IconCode from "@components/elements/Icons/CodeIcon/CodeIcon";
import Link from "next/link";
import { PORTFOLIO_URL } from "constants/externalLinks";
import Image from "next/image";
import photo from "@images/profile-photo-no-bg.png";

const Home = () => {
  return (
    <Container>
      <div className={styles.home}>
        <div className={styles.top}>
          <h1>My Portfolio</h1>
          <div className={styles.content}>
            <div className={styles.leftSection}>
              <div className={styles.text}>
                <div
                  className={`${styles.square} ${styles.border} ${styles.left}`}
                >
                  <p>
                    Hi! My name is Pablo and I&apos;m a Full Stack Developer
                    from Argentina.
                  </p>
                </div>
                <div
                  className={`${styles.square} ${styles.border} ${styles.right}`}
                >
                  <p>
                    I discovered my passion for development after several years
                    of playing, recording & mixing music. Now, music is my hobby
                    and development my career.
                  </p>
                </div>
                <div
                  className={`${styles.square} ${styles.border} ${styles.left}`}
                >
                  <p>
                    One day, I decided to escape from Buenos Aires city, so now
                    I work remotely surrounded by beautiful mountains.
                  </p>
                </div>
                <div className={`${styles.square} ${styles.right}`}>
                  <p>
                    The technologies that I use are Typescript/Javascript,
                    React.js, Next.js, Node.js, SASS/CSS & HTML.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.rightSection}>
              <Image
                src={photo.src}
                alt="Portfolio Photo"
                width={250}
                height={250}
              />
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
