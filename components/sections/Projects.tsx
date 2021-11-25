import ProjectCard from '../ProjectCard';
import styles from '../../styles/Projects.module.scss';
import projectElements from '../../public/projectElements';

const Projects = ({ scrolled }) => {
  return (
    <div className={styles.projects}>
      <h1
        className={styles.title}
        style={scrolled ? { transform: 'translateY(0%)' } : null}
      >
        What have I made?
      </h1>
      <div
        className={styles.cards}
        style={scrolled ? { transform: 'translateY(0%)' } : null}
      >
        {projectElements?.map((el: object, i: number) => {
          return <ProjectCard key={i} el={el} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
