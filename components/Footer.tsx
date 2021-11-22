import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  let date: number = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>© {date} Elliot Hwang</div>

      {/* mobile/tablet */}
      {/* TOP: Social Links*/}
      {/* BOTTOM: Copyright */}

      {/* pc */}
      {/* LEFT: Copyright */}
      {/* RIGHT: Social Links */}
    </div>
  );
};

export default Footer;
