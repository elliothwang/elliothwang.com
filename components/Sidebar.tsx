import { FC } from 'react';
import Link from 'next/link';
import { useThemeContext } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Sidebar.module.scss';

type Props = {
  shown: boolean;
  handleSidebarClick: () => void;
};

const Sidebar: FC<Props> = ({ shown, handleSidebarClick }) => {
  const { darkMode } = useThemeContext();

  console.log(shown);

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
                  style={
                    shown
                      ? { transform: 'translate(0%)' }
                      : { transform: 'translate(200%)' }
                  }
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
                  style={
                    shown
                      ? { transform: 'translate(0%)' }
                      : { transform: 'translate(200%)' }
                  }
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
                  style={
                    shown
                      ? { transform: 'translate(0%)' }
                      : { transform: 'translate(200%)' }
                  }
                  onClick={handleSidebarClick}
                >
                  Experience
                </a>
              </Link>
            </li>
            <li>
              <a
                className={styles.contact}
                style={
                  shown
                    ? { transform: 'translate(0%)' }
                    : { transform: 'translate(200%)' }
                }
                href="mailto:officialelliothwang@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSidebarClick}
              >
                Contact
              </a>
            </li>
            <li>
              <div
                className={styles.themeButton}
                style={
                  shown
                    ? { transform: 'translate(0%)' }
                    : { transform: 'translate(700%)' }
                }
              >
                <ThemeToggle />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
