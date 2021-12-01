import { useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Header.module.scss';

const Header = ({ loaded, scrolled }) => {
  const [dark, setDark] = useState(true);
  const [navShown, setNavShown] = useState(true);
  const [sidebarShown, setSidebarShown] = useState(false);

  const handleThemeChange = () => {
    setDark(!dark);
  };

  const showSidebar = () => {
    setSidebarShown(!sidebarShown);
    const TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    const LeftScroll =
      window.pageXOffset || document.documentElement.scrollLeft;
    window.scrollTo(LeftScroll, TopScroll);
  };

  useEffect(() => {
    window.screen.width >= 768 ? setNavShown(true) : setNavShown(false);
    setSidebarShown(false);
  }, []);

  return (
    <>
      <div className={styles.sidebarBttn} onClick={showSidebar}>
        <div
          className={!sidebarShown ? styles.topBarActive : styles.topBar}
        ></div>
        <div
          className={!sidebarShown ? styles.midBarActive : styles.midBar}
        ></div>
        <div
          className={!sidebarShown ? styles.botBarActive : styles.botBar}
        ></div>
      </div>
      <div
        className={sidebarShown ? styles.activeHeader : styles.header}
        style={scrolled ? { transform: 'translateY(-100%)' } : null}
      >
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <a
                href="/"
                className={styles.logo}
                style={loaded ? { transform: 'translateY(0%)' } : null}
              >
                el
              </a>
            </li>
            <li>
              <Link href="/#about">
                <a
                  className={sidebarShown ? styles.activeLink : styles.link1}
                  style={loaded ? { transform: 'translateY(0%)' } : null}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#projects">
                <a
                  className={sidebarShown ? styles.activeLink : styles.link2}
                  style={loaded ? { transform: 'translateY(0%)' } : null}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#experience">
                <a
                  className={sidebarShown ? styles.activeLink : styles.link3}
                  style={loaded ? { transform: 'translateY(0%)' } : null}
                >
                  Experience
                </a>
              </Link>
            </li>
            <li>
              <a
                className={sidebarShown ? styles.activeLink : styles.link4}
                style={loaded ? { transform: 'translateY(0%)' } : null}
                href="mailto:officialelliothwang@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
            <li>
              <div
                className={sidebarShown ? styles.activeButton : styles.button}
                style={loaded ? { transform: 'translateY(0%)' } : null}
                onClick={handleThemeChange}
              >
                {/* <ThemeToggle theme={dark} setTheme={setDark} /> */}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
