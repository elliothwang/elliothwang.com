import styles from '../../styles/ContactSection.module.scss';

const ContactBubble = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.msg}>Get in touch!</h1>

      <button className={styles.button}>Contact</button>
    </div>
  );
};

export default ContactBubble;
