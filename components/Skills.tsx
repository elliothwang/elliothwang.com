import { FC } from 'react';
import { useThemeContext } from './ThemeContext';
import styles from '../styles/Skills.module.scss';

// TODO (v2): refactor skills to be list of icons;
const Skills: FC = () => {
  const { darkMode } = useThemeContext();
  return (
    <div className={styles.skills}>
      <h3 className={darkMode ? styles.titleDark : styles.titleLight}>
        Some technologies I use!
      </h3>
      <ul className={darkMode ? styles.ulDark : styles.ulLight}>
        <li>JavaScript (ES6+)</li>
        <li>HTML5 &#38; CSS3</li>
        <li>TypeScript</li>
        <li>MERN Stack</li>
        <li>Redux</li>
        <li>Next.js</li>
        <li>Gatsby</li>
        <li>GraphQL</li>
        <li>Sass</li>
        <li>Material UI</li>
        <li>TailwindCSS</li>
      </ul>
    </div>
  );
};

export default Skills;
