import styles from '../../styles/Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h5 className={styles.greeting}>Hi, there! I'm</h5>
      <h1 className={styles.title}>Elliot Hwang.</h1>
      <h3 className={styles.subTitle}>Web Developer.</h3>
      <p className={styles.summary}>
        I am a full stack developer with a desire to help others through my
        work. As a previous pre-medical student, my passion for <br /> helping
        others has shifted from working in medicine to contributing to code that
        will{' '}
        <em className={styles.summaryBold}>
          provide solutions and assistance for others
        </em>
        . <br /> I’d like to look back at my code and know that I’ve made a{' '}
        <em className={styles.summaryBold}>positive impact on other people</em>.
      </p>
    </div>
  );
};

export default Hero;
