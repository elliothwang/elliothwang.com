import { useState, useEffect } from 'react';
import disableScroll from 'disable-scroll';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SidebarButton from './SidebarButton';

// TODO: add smooth-scrolling to anchor on nav click;
// TODO: page reload should scroll to selected anchor section;
// TODO (v2): add light theme styling;
const Header = ({ scrolled }) => {
  const [dark, setDark] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [sidebarShown, setSidebarShown] = useState(false);

  const handleThemeClick = () => {
    setDark(!dark);
  };

  const handleButtonClick = () => {
    if (sidebarShown === true) {
      disableScroll.off();
      setSidebarShown(false);
    } else if (sidebarShown === false) {
      disableScroll.on();
      setSidebarShown(true);
    }
  };

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <>
      <Sidebar
        theme={dark}
        loaded={animate}
        shown={sidebarShown}
        handleSidebarClick={handleButtonClick}
        handleThemeClick={handleThemeClick}
      />
      <Navbar
        theme={dark}
        loaded={animate}
        scrolled={scrolled}
        shown={sidebarShown}
        handleButtonClick={handleButtonClick}
        handleThemeClick={handleThemeClick}
      />
    </>
  );
};

export default Header;
