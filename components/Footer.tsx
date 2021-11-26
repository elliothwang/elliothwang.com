import Link from 'next/link';
import styles from '../styles/Footer.module.scss';
import Contact from './sections/Contact';

const Footer = () => {
  let date: number = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.contact}>
        <Contact />
      </div>
      <div className={styles.copyright}>© {date} Elliot Hwang</div>
    </div>
  );
};

export default Footer;
