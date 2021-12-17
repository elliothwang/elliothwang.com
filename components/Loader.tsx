import { FC } from 'react';
import Image from 'next/image';
import { useThemeContext } from './ThemeContext';
import styles from '../styles/Loader.module.scss';

// TODO (v2): create loader animation to replace temporary one;
const Loader: FC = () => {
  const { darkMode } = useThemeContext();

  return (
    <div className={styles.screen}>
      <div className={styles.logo}>
        <Image
          src={'/images/logo.png'}
          alt="logo"
          height="100"
          width="100"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
    </div>
  );
};

export default Loader;
