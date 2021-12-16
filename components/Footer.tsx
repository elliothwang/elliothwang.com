import { FC } from 'react';
import { useThemeContext } from './ThemeContext';
import styles from '../styles/Footer.module.scss';

const date: number = new Date().getFullYear();

const Footer: FC = () => {
  const { darkMode } = useThemeContext();
  return (
    <div className={styles.border}>
      <div className={styles.footer}>
        <div className={styles.copyright}>© {date} Elliot Hwang</div>
      </div>
    </div>
  );
};

export default Footer;
