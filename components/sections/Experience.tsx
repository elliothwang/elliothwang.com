import ExperienceCard from '../ExperienceCard';
import ExperienceTimeline from '../ExperienceTimeline';
import styles from '../../styles/Experience.module.scss';

const Experience = () => {
  return (
    <div className={styles.exp}>
      <h1 className={styles.sectionTitle}>What have I done?</h1>
      <ExperienceTimeline />
      <ExperienceCard />

      {/* mobile */}
      {/* LEFT: timeline with corresponding marker */}
      {/* MIDDLE/RIGHT: 3 experience cards */}

      {/* pc */}
      {/* LEFT: experience card (middle) */}
      {/* MIDDLE: timeline with corresponding markers */}
      {/* RIGHT: 2 experience cards (top & bottom) */}
    </div>
  );
};

export default Experience;
