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
              Hi, there! My name is Elliot Hwang. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sint atque temporibus ipsam quos
              excepturi fugiat amet, iste ut porro et, itaque impedit laborum
              reprehenderit?
            </p>
            <p
              className={styles.p}
              style={
                scrolled && window.screen.width >= 1024
                  ? { transform: 'translateY(0%)' }
                  : null
              }
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              atque temporibus ipsam quos excepturi fugiat amet. I'm also a{' '}
              <span className={styles.highlight}>singer/songwriter</span>. You
              should check out my social medias!
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
