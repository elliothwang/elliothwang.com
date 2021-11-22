import ProjectCard from '../ProjectCard';
import styles from '../../styles/Projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.sectionTitle}>What have I made?</h1>

      {/* grid mapping with ProjectCards component */}
      <ProjectCard />
    </div>
  );
};

export default Projects;
