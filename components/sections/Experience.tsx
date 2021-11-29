import Timeline from '../Timeline';
import styles from '../../styles/Experience.module.scss';

const Experience = ({ scrolled }) => {
  return (
    <div className={styles.exp}>
      <div className={styles.border}></div>
      <h1
        className={styles.title}
        // TODO: fix scroll animation (probably add more px to scroll on laptop view)
        style={scrolled ? { transform: 'translateY(0%)' } : null}
      >
        What have I done?
      </h1>
      <div
        className={styles.timeline}
        style={scrolled ? { transform: 'translateY(0%)' } : null}
      >
        <Timeline />
      </div>
    </div>
  );
};

export default Experience;
