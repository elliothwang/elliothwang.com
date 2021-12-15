import { useState, useEffect } from 'react';
import styles from '../../styles/Hero.module.scss';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div className={styles.hero}>
      <h5
        className={styles.greeting}
        style={
          animate
            ? { transform: 'translate(0%)' }
            : { transform: 'translate(-200%)' }
        }
      >
        Hi, there! I&apos;m
      </h5>
      <h1
        className={styles.title}
        style={
          animate
            ? { transform: 'translate(0%)' }
            : { transform: 'translate(-200%)' }
        }
      >
        Elliot Hwang.
      </h1>
      <h3
        className={styles.subTitle}
        style={
          animate
            ? { transform: 'translate(0%)' }
            : { transform: 'translate(-200%)' }
        }
      >
        Web Developer.
      </h3>
      <p
        className={styles.summary}
        style={
          animate
            ? { transform: 'translate(0%)' }
            : { transform: 'translate(-200%)' }
        }
      >
        I am a full stack developer with a desire to help others through my
        work. <br />
        My goal is to contribute to code that will{' '}
        <span className={styles.highlight}>
          provide solutions and assistance for others
        </span>
        . <br /> Ultimately, I would like to make a{' '}
        <span className={styles.highlight}>
          positive impact on other people
        </span>
        .
      </p>
    </div>
  );
};

export default Hero;
