import styles from '../styles/SidebarButton.module.scss';

const SidebarButton = ({ loaded, shown, handleButtonClick }) => {
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
        <div className={shown ? styles.topBarActive : styles.topBar}></div>
        <div className={shown ? styles.midBarActive : styles.midBar}></div>
        <div className={shown ? styles.botBarActive : styles.botBar}></div>
      </div>
    </>
  );
};

export default SidebarButton;
