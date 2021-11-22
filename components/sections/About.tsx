import styles from '../../styles/About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.sectionTitle}>Who am I, really?</h1>
      {/* TODO: write 1.5 paragraph bio */}
      <p>Hi, there! My name is Elliot Hwang.</p>
    </div>
  );
};

export default About;
