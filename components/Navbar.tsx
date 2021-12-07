import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Navbar.module.scss';

// TODO: add light theme styling
const Navbar = ({ loaded, scrolled }) => {
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
                  <Image
                    src="/../../public/images/nav-logo.png"
                    alt="logo"
                    height="75"
                    width="75"
                    objectFit="cover"
                    objectPosition="center"
                  />
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
