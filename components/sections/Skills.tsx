import styles from '../../styles/Skills.module.scss';

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h3>What are some technologies I use?</h3>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>MERN Stack</li>
        <li>Redux</li>
        <li>Next.js</li>
        <li>GraphQL</li>
        <li>Sass</li>
      </ul>
    </div>
  );
};

export default Skills;
