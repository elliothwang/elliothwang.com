import Timeline from '../Timeline';
import styles from '../../styles/Experience.module.scss';

const Experience = () => {
  return (
    <div className={styles.exp}>
      <h1 className={styles.title}>What have I done?</h1>
      <div className={styles.timeline}>
        <Timeline />
      </div>
    </div>
  );
};

export default Experience;
