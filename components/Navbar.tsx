import Image from 'next/image';
import Link from 'next/link';
import SidebarButton from './SidebarButton';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Navbar.module.scss';

const Navbar = ({
  loaded,
  scrolled,
  shown,
  theme,
  handleButtonClick,
  handleThemeClick,
}) => {
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
                    src={'/images/nav-logo.png'}
                    alt="logo"
                    height="60"
                    width="60"
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
                onClick={handleThemeClick}
              >
                <ThemeToggle
                  theme={theme}
                  handleThemeClick={handleThemeClick}
                />
              </div>
            </li>
            <li>
              <div className={styles.sidebarButton}>
                <SidebarButton
                  loaded={loaded}
                  shown={shown}
                  handleButtonClick={handleButtonClick}
                />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
