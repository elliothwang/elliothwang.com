import ProjectCard from '../ProjectCard';
import styles from '../../styles/Projects.module.scss';
import projects from '../../public/elements/projects';

const Projects = ({ scrolled }) => {
  return (
    <div className={styles.page}>
      <div className={styles.projects}>
        <div className={styles.border}></div>
        <h1
          className={styles.title}
          style={
            window.screen.width >= 1024
              ? scrolled
                ? { transform: 'translateY(0%)' }
                : { transform: 'translateY(50%)' }
              : { transform: 'translateY(0%)' }
          }
        >
          What have I made?
        </h1>
        <div
          className={styles.cards}
          style={
            window.screen.width >= 1024
              ? scrolled
                ? { transform: 'translateY(0%)' }
                : { transform: 'translateY(50%)' }
              : { transform: 'translateY(0%)' }
          }
        >
          {projects?.map((el: object, i: number) => {
            return <ProjectCard key={i} el={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
