import ProjectCard from '../ProjectCard';
import styles from '../../styles/Projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.title}>What have I made?</h1>

      {/* grid mapping with ProjectCards component */}
      <div className={styles.cards}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
