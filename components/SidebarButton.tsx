import { FC } from 'react';
import styles from '../styles/SidebarButton.module.scss';

type Props = {
  loaded: boolean;
  shown: boolean;
  handleButtonClick: () => void;
};

const SidebarButton: FC<Props> = ({ loaded, shown, handleButtonClick }) => {
  return (
    <>
      <div
        className={styles.sidebarButton}
        style={
          loaded
            ? { transform: 'translateY(0%)' }
            : { transform: 'translateY(-300%)' }
        }
        onClick={handleButtonClick}
      >
        <div className={shown ? styles.topBarActive : styles.bar}></div>
        <div className={shown ? styles.midBarActive : styles.bar}></div>
        <div className={shown ? styles.botBarActive : styles.bar}></div>
      </div>
    </>
  );
};

export default SidebarButton;
