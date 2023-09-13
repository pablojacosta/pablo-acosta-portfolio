import { githubUrl, linkedinUrl } from "constants/socials";
import githubIcon from "@images/github-icon.svg";
import linkedinIcon from "@images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "./SocialIcons.module.scss";

const LINKEDIN_ICON_SIZE = "50";
const GITHUB_ICON_SIZE = "42";

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src={githubIcon.src}
          alt="Github Icon"
          className={styles.githubIcon}
          width={GITHUB_ICON_SIZE}
          height={GITHUB_ICON_SIZE}
        />
      </Link>
      <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src={linkedinIcon.src}
          alt="Linkedin Icon"
          className={styles.linkedinIcon}
          width={LINKEDIN_ICON_SIZE}
          height={LINKEDIN_ICON_SIZE}
        />
      </Link>
    </div>
  );
};

export default SocialIcons;
