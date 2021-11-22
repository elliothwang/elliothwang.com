import styles from '../../styles/Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.greeting}>Hi, there! I'm</div>
      <div className={styles.title}>Elliot Hwang</div>
      <div className={styles.subTitle}>Software Engineer</div>
      <div className={styles.summary}></div>

      {/* LEFT: title, subtitle, & short paragraph description */}
      {/* RIGHT: image of el */}
    </div>
  );
};

export default Landing;
