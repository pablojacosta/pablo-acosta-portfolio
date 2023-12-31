import Container from "@components/elements/Container";
import styles from "./AboutMe.module.scss";
import skull from "@images/skull.png";
import Image from "next/image";
import Skills from "./components/Skills";

const AboutMe = () => {
  return (
    <Container>
      <div className={styles.aboutMe}>
        <h1 className="animatedHeader">ABOUT ME</h1>
        <div className={`${styles.content} animatedContent`}>
          <p>
            Hello! Thank you for being interested in my Portfolio.
            <span>
              <Image src={skull.src} alt="Skull" width="25" height="30" />
            </span>
          </p>
          <p>
            My name is Pablo and I live in Villa de Las Rosas, Córdoba,
            Argentina.
          </p>
          <p>
            I&apos;m a self-taught • curious • dynamic • fast-learning Full
            Stack Developer / Recording Engineer / Musician / Tech-Enthusiast.
          </p>
          <p>These are some of my skills:</p>
          <Skills />
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
