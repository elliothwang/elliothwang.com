import styles from '../styles/Footer.module.scss';

const Footer = () => {
  let date: number = new Date().getFullYear();
  return (
    <div className={styles.border}>
      <div className={styles.footer}>
        <div className={styles.copyright}>© {date} Elliot Hwang</div>
      </div>
    </div>
  );
};

export default Footer;
