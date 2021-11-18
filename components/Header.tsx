import ThemeButton from "./ThemeButton"

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <ThemeButton />
      {/* mobile/tablet */}
        {/* LEFT: dark/light mode button */}
        {/* CENTER: logo  */}
        {/* RIGHT: sidenav hamburger icon */}
          {/* sidenav links */}

      {/* pc */}
        {/* LEFT: logo */}
        {/* CENTER: links (About, Projects, Experience, Contact) */}
        {/* RIGHT: dark/light mode button */}
    </div>
  )
}

export default Header
