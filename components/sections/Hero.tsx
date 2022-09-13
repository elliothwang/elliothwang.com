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
        I specialize in
        <span
          className={darkMode ? styles.highlightDark : styles.highlightLight}
        >
          &nbsp;beautiful, pixel-perfect&nbsp;
        </span>
        experiences that have positive impact on other people.
      </p>
    </div>
  );
};

export default Hero;
