import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Header.module.scss';

const Header = () => {
  const [dark, setDark] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleThemeChange = () => {
    setDark(!dark);
  };

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(function mount() {
    function onScroll() {
      window.scrollY >= 200 ? setScrolled(true) : setScrolled(false);
    }

    window.addEventListener('scroll', onScroll);

    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

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
                {/* move icon to left */}
                <a className={styles.logo}>
                  {/* <Image src="/public/images/imagetest.png" layout="fill" ></Image> */}
                  L
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={sidebar ? styles.activeLink : styles.link1}>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className={sidebar ? styles.activeLink : styles.link2}>
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <a className={sidebar ? styles.activeLink : styles.link3}>
                  Experience
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={sidebar ? styles.activeLink : styles.link4}>
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <div
                className={sidebar ? styles.activeButton : styles.button}
                onClick={handleThemeChange}
              >
                <ThemeToggle theme={dark} />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
