import Container from "@elements/Container/Container";
import styles from "./Footer.module.scss";
import SocialIcons from "./components/SocialIcons";
import Separator from "@components/elements/Separator";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Separator color="white" />
        <SocialIcons />
      </Container>
    </footer>
  );
};

export default Footer;
