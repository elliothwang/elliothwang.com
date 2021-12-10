import styles from '../../styles/About.module.scss';
import Skills from '../Skills';

const About = ({ scrolled }) => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.border}></div>
        <div
          className={styles.about}
          style={
            scrolled && window.screen.width >= 1024
              ? { transform: 'translateY(0%)' }
              : null
          }
        >
          <h1
            className={styles.title}
            style={
              scrolled && window.screen.width >= 1024
                ? { transform: 'translateY(0%)' }
                : null
            }
          >
            Who am I?
          </h1>
          <div className={styles.content}>
            <p
              className={styles.p}
              style={
                scrolled && window.screen.width >= 1024
                  ? { transform: 'translateY(0%)' }
                  : null
              }
            >
              Hi, there! My name is{' '}
              <span className={styles.highlight}>Elliot Hwang</span>. As a
              previous pre-medical student, my passion for helping others has
              shifted from working in medicine to contributing to code and
              technology that helps others.
            </p>
            <p
              className={styles.p}
              style={
                scrolled && window.screen.width >= 1024
                  ? { transform: 'translateY(0%)' }
                  : null
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
            scrolled && window.screen.width >= 1024
              ? { transform: 'translateY(0%)' }
              : null
          }
        >
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
