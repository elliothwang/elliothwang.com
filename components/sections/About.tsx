import { FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import Skills from '../Skills';
import styles from '../../styles/About.module.scss';

type Props = {
  scrolled: boolean;
};

const About: FC<Props> = ({ scrolled }) => {
  const { darkMode } = useThemeContext();
  return (
    <div className={darkMode ? styles.pageDark : styles.pageLight}>
      <div className={darkMode ? styles.containerDark : styles.containerLight}>
        <div
          className={darkMode ? styles.borderDark : styles.borderLight}
        ></div>
        <div
          className={styles.about}
          style={
            window.screen.width >= 1024
              ? scrolled
                ? { transform: 'translateY(0%)' }
                : { transform: 'translateY(50%)' }
              : { transform: 'translateY(0%)' }
          }
        >
          <h1
            className={darkMode ? styles.titleDark : styles.titleLight}
            style={
              window.screen.width >= 1024
                ? scrolled
                  ? { transform: 'translateY(0%)' }
                  : { transform: 'translateY(50%)' }
                : { transform: 'translateY(0%)' }
            }
          >
            Who am I?
          </h1>
          <div className={styles.content}>
            <p className={darkMode ? styles.pDark : styles.pLight}>
              Hi, there! My name is{' '}
              <span
                className={
                  darkMode ? styles.highlightDark : styles.highlightLight
                }
              >
                Elliot Hwang
              </span>
              . As a previous pre-medical student, my passion for helping others
              has shifted from working in medicine to contributing to code and
              technology that helps others.
            </p>
            <p
              className={darkMode ? styles.pDark : styles.pLight}
              style={
                window.screen.width >= 1024
                  ? scrolled
                    ? { transform: 'translateY(0%)' }
                    : { transform: 'translateY(50%)' }
                  : { transform: 'translateY(0%)' }
              }
            >
              Although I have just begun my journey as a developer, I am always
              eager to challenge myself to learn and try new things. Most of my
              projects are inspired by my passions for health and music.
              {/* Speaking of which, I am also a{' '}
              <span className={styles.highlight}>singer/songwriter</span>. */}
            </p>
          </div>
        </div>
        <div
          className={styles.skills}
          style={
            window.screen.width >= 1024
              ? scrolled
                ? { transform: 'translateY(0%)' }
                : { transform: 'translateY(50%)' }
              : { transform: 'translateY(0%)' }
          }
        >
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
