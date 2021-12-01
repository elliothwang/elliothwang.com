import Timeline from '../Timeline';
import styles from '../../styles/Experience.module.scss';

const Experience = ({ scrolled }) => {
  return (
    <div className={styles.page}>
      <div className={styles.exp}>
        <div className={styles.border}></div>
        <h1
          className={styles.title}
          style={
            scrolled && window.screen.width >= 1024
              ? { transform: 'translateY(0%)' }
              : null
          }
        >
          What have I done?
        </h1>
        <div
          className={styles.timeline}
          style={
            scrolled && window.screen.width >= 1024
              ? { transform: 'translateY(0%)' }
              : null
          }
        >
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Experience;
