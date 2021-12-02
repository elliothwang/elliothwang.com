// import { useState } from 'react';
import Link from 'next/link';
// import ThemeToggle from './ThemeToggle';
import styles from '../styles/Navbar.module.scss';

const Navbar = ({ loaded, scrolled }) => {
  // TODO: add light theme styling
  // const [dark, setDark] = useState(true);

  return (
    <>
      <div
        className={styles.navbar}
        style={scrolled ? { transform: 'translateY(-100%)' } : null}
      >
        <nav className={styles.nav}>
          <ul className={styles.ul}>
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
                  className={styles.about}
                  style={loaded ? { transform: 'translateY(0%)' } : null}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#projects">
                <a
                  className={styles.projects}
                  style={loaded ? { transform: 'translateY(0%)' } : null}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#experience">
                <a
                  className={styles.experience}
                  style={loaded ? { transform: 'translateY(0%)' } : null}
                >
                  Experience
                </a>
              </Link>
            </li>
            <li>
              <a
                className={styles.contact}
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
                className={styles.themeButton}
                style={loaded ? { transform: 'translateY(0%)' } : null}
                // onClick={handleThemeChange}
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

export default Navbar;
