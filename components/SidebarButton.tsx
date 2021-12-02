import styles from '../styles/SidebarButton.module.scss';

const SidebarButton = ({ loaded, shown }) => {
  return (
    <>
      <div
        className={styles.sidebarButton}
        style={loaded ? { transform: 'translate(0%)' } : null}
      >
        <div className={shown ? styles.topBarActive : styles.topBar}></div>
        <div className={shown ? styles.midBarActive : styles.midBar}></div>
        <div className={shown ? styles.botBarActive : styles.botBar}></div>
      </div>
    </>
  );
};

export default SidebarButton;
