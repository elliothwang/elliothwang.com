import Image from 'next/image';
import styles from '../styles/Loader.module.scss';

// TODO: create logo & loader animation to replace temporary ones in Loader & Navbar;
const Loader = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.logo}>
        <Image
          src="/../public/images/logo.png"
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
