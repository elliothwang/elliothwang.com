import { useState, useEffect } from 'react';
import disableScroll from 'disable-scroll';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SidebarButton from './SidebarButton';

// TODO: add smooth-scrolling to anchor on nav click;
// TODO: page reload should scroll to selected anchor section;
const Header = ({ scrolled }) => {
  const [dark, setDark] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [sidebarShown, setSidebarShown] = useState(false);

  const handleThemeChange = () => {
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

  console.log(sidebarShown);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <>
      <div onClick={handleButtonClick}>
        <SidebarButton loaded={animate} shown={sidebarShown} />
      </div>
      <Sidebar
        loaded={animate}
        shown={sidebarShown}
        handleSidebarClick={handleButtonClick}
      />
      <Navbar loaded={animate} scrolled={scrolled} />
    </>
  );
};

export default Header;
