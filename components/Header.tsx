import Link from 'next/link';
import ThemeButton from './ThemeButton';
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <>
    {/* mobile/tablet */}
    {/* LEFT: dark/light mode button */}
    {/* CENTER: logo  */}
    {/* RIGHT: sidenav hamburger icon */}
    {/* sidenav links */}

    {/* pc */}
    {/* LEFT: logo */}
    {/* CENTER: links (About, Projects, Experience, Contact) */}
    {/* RIGHT: dark/light mode button */}

      <header className={styles.header}>
        <ThemeButton />
        
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a className={styles.link}>LOGO</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={styles.link}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className={styles.link}>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <a className={styles.link}>Experience</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={styles.link}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

    </>
  );
};

export default Header;
