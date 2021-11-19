import Link from "next/link";
import ThemeButton from "./ThemeButton"

const Header = () => {
  return (
    <>
      <header>
        <ThemeButton />
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>LOGO</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <a>Experience</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* mobile/tablet */}
        {/* LEFT: dark/light mode button */}
        {/* CENTER: logo  */}
        {/* RIGHT: sidenav hamburger icon */}
          {/* sidenav links */}

      {/* pc */}
        {/* LEFT: logo */}
        {/* CENTER: links (About, Projects, Experience, Contact) */}
        {/* RIGHT: dark/light mode button */}
    </>
  )
}

export default Header
