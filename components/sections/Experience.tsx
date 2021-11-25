import Timeline from '../Timeline';
import styles from '../../styles/Experience.module.scss';

const Experience = ({ scrolled }) => {
  return (
    <div className={styles.exp}>
      <h1
        className={styles.title}
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
