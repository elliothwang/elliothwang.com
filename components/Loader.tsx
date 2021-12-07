import Image from 'next/image';
import styles from '../styles/Loader.module.scss';

// TODO: loader animation to replace temporary spinning logo;
const Loader = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.logo}>
        <Image
          src="/../images/loader-logo.png"
          alt="logo"
          height="100"
          width="100"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default Loader;
