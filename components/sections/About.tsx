import styles from '../../styles/About.module.scss';
import Skills from './Skills';

const About = ({ scrolled }) => {
  return (
    <div className={styles.container}>
      <div className={styles.border}></div>
      <div
        className={styles.about}
        style={scrolled ? { transform: 'translateY(0%)' } : null}
      >
        <h1
          className={styles.title}
          style={scrolled ? { transform: 'translateY(0%)' } : null}
        >
          Who am I, really?
        </h1>
        <div className={styles.content}>
          <p
            className={styles.p}
            style={scrolled ? { transform: 'translateY(0%)' } : null}
          >
            Hi, there! My name is Elliot Hwang. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sint atque temporibus ipsam quos
            excepturi fugiat amet, iste ut porro et, itaque impedit laborum
            reprehenderit? Voluptatem, recusandae illo! Aliquam, ad dignissimos?
          </p>
          <p
            className={styles.p}
            style={scrolled ? { transform: 'translateY(0%)' } : null}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque
            temporibus ipsam quos excepturi fugiat amet. I'm also a{' '}
            <span className={styles.highlight}>singer/songwriter</span>. You
            should check out my social medias!
          </p>
        </div>
      </div>
      <div
        className={styles.skills}
        style={scrolled ? { transform: 'translateY(0%)' } : null}
      >
        <Skills />
      </div>
    </div>
  );
};

export default About;
