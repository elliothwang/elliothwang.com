// import { useState } from 'react';
import Link from 'next/link';
// import ThemeToggle from './ThemeToggle';
import styles from '../styles/Sidebar.module.scss';

// TODO: fix broken sidebar clicks;
const Sidebar = ({ loaded, shown, setShown }) => {
  // const [dark, setDark] = useState(true);

  const handleSidebarClick = () => {
    setShown(false);
  };

  return (
    <>
      <div
        className={styles.sidebar}
        style={
          shown
            ? { transform: 'translate(0%)' }
            : { transform: 'translate(100%)' }
        }
      >
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li>
              <Link href="/#about">
                <a
                  className={styles.about}
                  style={loaded ? { transform: 'translate(0%)' } : null}
                  onClick={handleSidebarClick}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#projects">
                <a
                  className={styles.projects}
                  style={loaded ? { transform: 'translate(0%)' } : null}
                  onClick={handleSidebarClick}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#experience">
                <a
                  className={styles.experience}
                  style={loaded ? { transform: 'translate(0%)' } : null}
                  onClick={handleSidebarClick}
                >
                  Experience
                </a>
              </Link>
            </li>
            <li>
              <a
                className={styles.contact}
                style={loaded ? { transform: 'translate(0%)' } : null}
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
                style={loaded ? { transform: 'translate(0%)' } : null}
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

export default Sidebar;
