import Container from "@components/elements/Container";
import styles from "./Contact.module.scss";
import SocialIcons from "@components/shared/Footer/components/SocialIcons";
import IconGmail from "@components/elements/Icons/GmailIcon/GmailIcon";
import Link from "next/link";

const Contact = () => {
  return (
    <Container>
      <div className={styles.contact}>
        <h1>CONTACT</h1>
        <div className={styles.content}>
          <p>You can get in touch with me at:</p>
          <Link
            href="mailto:pablojacosta82@gmail.com"
            className={styles.mailIcon}
          >
            <IconGmail />
          </Link>
          <SocialIcons className={styles.icons} />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
