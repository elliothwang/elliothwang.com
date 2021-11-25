import ProjectCard from '../ProjectCard';
import styles from '../../styles/Projects.module.scss';
import projectElements from '../../public/projectElements';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.title}>What have I made?</h1>
      <div className={styles.cards}>
        {projectElements?.map((el: object, i: number) => {
          return <ProjectCard key={i} el={el} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
