import { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import Timeline from '../Timeline';
import styles from '../../styles/Experience.module.scss';

type Props = {
  scrolled: boolean;
};

const Experience: FC<Props> = ({ scrolled }) => {
  const { darkMode } = useThemeContext();
  return (
    <div className={styles.page}>
      <div className={styles.exp}>
        <div className={styles.border}></div>
        <h1
          className={styles.title}
          style={
            window.screen.width >= 1024
              ? scrolled
                ? { transform: 'translateY(0%)' }
                : { transform: 'translateY(50%)' }
              : { transform: 'translateY(0%)' }
          }
        >
          What have I done?
        </h1>
        <div
          className={styles.timeline}
          style={
            window.screen.width >= 1024
              ? scrolled
                ? { transform: 'translateY(0%)' }
                : { transform: 'translateY(50%)' }
              : { transform: 'translateY(0%)' }
          }
        >
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Experience;
