import { useState, useEffect, FC } from 'react';
import { useThemeContext } from '../ThemeContext';
import styles from '../../styles/Hero.module.scss';

const Hero: FC = () => {
  const { darkMode } = useThemeContext();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div className={darkMode ? styles.heroDark : styles.heroLight}>
      <h5
        className={darkMode ? styles.greetingDark : styles.greetingLight}
        style={
          animate
            ? { transform: 'translate(0%)' }
            : { transform: 'translate(-200%)' }
        }
      >
        Hi, there! I&apos;m
      </h5>
      <h1
        className={darkMode ? styles.titleDark : styles.titleLight}
        style={
          animate
            ? { transform: 'translate(0%)' }
            : { transform: 'translate(-200%)' }
        }
      >
        Elliot Hwang.
      </h1>
      <h3
        className={darkMode ? styles.subtitleDark : styles.subtitleLight}
        style={
          animate
            ? { transform: 'translate(0%)' }
            : { transform: 'translate(-200%)' }
        }
      >
        Web Developer.
      </h3>
      <p
        className={darkMode ? styles.summaryDark : styles.summaryLight}
        style={
          animate
            ? { transform: 'translate(0%)' }
            : { transform: 'translate(-200%)' }
        }
      >
        I am a front end developer with a desire to help others through my work.{' '}
        <br />
        My goal is to contribute to code that will{' '}
        <span
          className={darkMode ? styles.highlightDark : styles.highlightLight}
        >
          provide solutions and assistance for others
        </span>
        . <br /> Ultimately, I would like to make a{' '}
        <span
          className={darkMode ? styles.highlightDark : styles.highlightLight}
        >
          positive impact on other people
        </span>
        .
      </p>
    </div>
  );
};

export default Hero;
