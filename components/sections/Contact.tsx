import styles from '../../styles/Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h3 className={styles.msg}>Want to get in touch?</h3>
      <button className={styles.button}>
        <a
          href="mailto:officialelliothwang@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me!
        </a>
      </button>
    </div>
  );
};

export default Contact;
