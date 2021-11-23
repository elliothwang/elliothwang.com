import styles from '../../styles/About.module.scss';
import Skills from './Skills';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.title}>Who am I, really?</h1>
        <p className={styles.p}>
          Hi, there! My name is Elliot Hwang. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sint atque temporibus ipsam quos
          excepturi fugiat amet, iste ut porro et, itaque impedit laborum
          reprehenderit? Voluptatem, recusandae illo! Aliquam, ad dignissimos?
        </p>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque
          temporibus ipsam quos excepturi fugiat amet. I'm also a{' '}
          <span className={styles.highlight}>singer/songwriter</span>. You
          should check out my social medias!
        </p>
      </div>
      <div className={styles.skills}>
        <Skills />
      </div>
    </div>
  );
};

export default About;
