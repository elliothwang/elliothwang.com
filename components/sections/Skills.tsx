import styles from '../../styles/Skills.module.scss';

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h3 className={styles.title}>
        Check out some of the <br /> technologies I use!
      </h3>
      <ul className={styles.ul}>
        <li>JavaScript (ES6+)</li>
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
