import Container from "@components/elements/Container";
import styles from "./Contact.module.scss";
import SocialIcons from "@components/shared/Footer/components/SocialIcons";

const Contact = () => {
  return (
    <Container>
      <div className={styles.contact}>
        <h1>CONTACT</h1>
        <div className={styles.content}>
          <div>
            <p>You can get in touch with me at:</p>
            <p>PABLOJACOSTA82@GMAIL.COM</p>
          </div>
          <SocialIcons className={styles.icons} />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
