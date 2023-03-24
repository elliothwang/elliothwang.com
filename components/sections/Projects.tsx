import { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import ProjectCard from '../ProjectCard';
import projects from '../../public/elements/projects';
import styles from '../../styles/Projects.module.scss';

type Props = {
  scrolled: boolean;
};

// ! TODO: (v2) Make new Project cards & Fix Projects scroll

const Projects: FC<Props> = ({ scrolled }) => {
  const { darkMode } = useThemeContext();
  return (
    <div className={darkMode ? styles.projectsDark : styles.projectsLight}>
      <div className={darkMode ? styles.borderDark : styles.borderLight}></div>
      <h1
        className={darkMode ? styles.titleDark : styles.titleLight}
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
        {projects?.map(
          (
            el: {
              image: string;
              alt: string;
              title: string;
              description: Array<string>;
              technologies: Array<string>;
              github: string;
              demo: string;
            },
            i: number
          ) => {
            return <ProjectCard key={i} el={el} />;
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
