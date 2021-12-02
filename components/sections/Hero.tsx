import styles from '../../styles/Hero.module.scss';

const Hero = ({ loaded }) => {
  return (
    <div className={styles.hero}>
      <h5
        className={styles.greeting}
        style={loaded ? { transform: 'translate(0%)' } : null}
      >
        Hi, there! I&apos;m
      </h5>
      <h1
        className={styles.title}
        style={loaded ? { transform: 'translate(0%)' } : null}
      >
        Elliot Hwang.
      </h1>
      <h3
        className={styles.subTitle}
        style={loaded ? { transform: 'translate(0%)' } : null}
      >
        Web Developer.
      </h3>
      <p
        className={styles.summary}
        style={loaded ? { transform: 'translate(0%)' } : null}
      >
        I am a full stack developer with a desire to help others through my
        work. <br />
        My goal is to contribute to code that will{' '}
        <span className={styles.highlight}>
          provide solutions and assistance for others
        </span>
        . <br /> Ultimately, I would like to look back at what I&apos;ve done
        and know that I&apos;ve made a{' '}
        <span className={styles.highlight}>
          positive impact on other people
        </span>
        .
      </p>
    </div>
  );
};

export default Hero;
