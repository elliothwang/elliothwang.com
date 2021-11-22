import ProjectCard from '../ProjectCard';
import styles from '../../styles/Projects.module.scss';

const Projects = () => {
  return (
    <>
      <h1>What have I made?</h1>

      {/* grid mapping with ProjectCards component */}
      <ProjectCard />
    </>
  );
};

export default Projects;
