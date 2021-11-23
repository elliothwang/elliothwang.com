import styles from '../../styles/About.module.scss';
import Skills from './Skills';

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>Who am I, really?</h1>
      <p>Hi, there! My name is Elliot Hwang.</p>
      <p>
        I'm also a singer/songwriter. You should check out my social medias!
      </p>
      <Skills />
    </div>
  );
};

export default About;
