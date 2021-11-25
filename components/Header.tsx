import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Header.module.scss';

const Header = ({ loaded, scrolled }) => {
  const [dark, setDark] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  const handleThemeChange = () => {
    setDark(!dark);
  };

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className={styles.sidebarBttn} onClick={showSidebar}>
        <div className={sidebar ? styles.topBarActive : styles.topBar}></div>
        <div className={sidebar ? styles.midBarActive : styles.midBar}></div>
        <div className={sidebar ? styles.botBarActive : styles.botBar}></div>
      </div>
      <header
        className={styles.header}
        style={scrolled ? { transform: 'translateY(-100%)' } : null}
      >
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <Link href="/">
                <a
                  className={styles.logo}
                  style={loaded ? { transform: 'translateY(0%)' } : null}
                >
                  el
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a
                  className={sidebar ? styles.activeLink : styles.link1}
                  style={loaded ? { transform: 'translateY(0%)' } : null}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#projects">
                <a
                  className={sidebar ? styles.activeLink : styles.link2}
                  style={loaded ? { transform: 'translateY(0%)' } : null}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#experience">
                <a
                  className={sidebar ? styles.activeLink : styles.link3}
                  style={loaded ? { transform: 'translateY(0%)' } : null}
                >
                  Experience
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={sidebar ? styles.activeLink : styles.link4}
                  style={loaded ? { transform: 'translateY(0%)' } : null}
                >
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <div
                className={sidebar ? styles.activeButton : styles.button}
                style={loaded ? { transform: 'translateY(0%)' } : null}
                onClick={handleThemeChange}
              >
                <ThemeToggle theme={dark} setTheme={setDark} />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
