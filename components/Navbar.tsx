import Image from 'next/image';
import { Link } from 'react-scroll';
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
                  onClick={() => window.location.reload()}
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
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                // isDynamic={true}
                className={styles.about}
                style={loaded ? { transform: 'translateY(0%)' } : null}
                onClick={() => window.location.assign('/about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-160}
                duration={750}
                // isDynamic={true}
                className={styles.projects}
                style={loaded ? { transform: 'translateY(0%)' } : null}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                // isDynamic={true}
                className={styles.experience}
                style={loaded ? { transform: 'translateY(0%)' } : null}
              >
                Experience
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
