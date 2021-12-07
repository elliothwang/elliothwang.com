import styles from '../styles/Footer.module.scss';
import Contact from './sections/Contact';

// TODO: Refactor Footer to not look like basura;
const Footer = () => {
  let date: number = new Date().getFullYear();
  return (
    <div className={styles.border}>
      <div className={styles.footer}>
        <div className={styles.contact}>
          <Contact />
        </div>
        <div className={styles.copyright}>© {date} Elliot Hwang</div>
      </div>
    </div>
  );
};

export default Footer;
