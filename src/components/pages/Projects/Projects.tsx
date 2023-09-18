import Container from "@components/elements/Container";
import styles from "./Projects.module.scss";
import ProjectsSlider from "./components/ProjectsSlider";

const Projects = () => {
  return (
    <Container>
      <div className={styles.projects}>
        <h1>Projects</h1>
        <ProjectsSlider />
      </div>
    </Container>
  );
};

export default Projects;
