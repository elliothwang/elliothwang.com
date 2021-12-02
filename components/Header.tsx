import { useState } from 'react';
import disableScroll from 'disable-scroll';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SidebarButton from './SidebarButton';
import styles from '../styles/Header.module.scss';

const Header = ({ loaded, scrolled }) => {
  // const [dark, setDark] = useState(true);
  const [sidebarShown, setSidebarShown] = useState(false);

  // const handleThemeChange = () => {
  //   setDark(!dark);
  // };

  const handleSidebarTransform = () => {
    setSidebarShown(!sidebarShown);
    sidebarShown ? disableScroll.off() : disableScroll.on();
  };

  return (
    <>
      <div onClick={handleSidebarTransform}>
        <SidebarButton loaded={loaded} shown={sidebarShown} />
      </div>
      <Sidebar
        loaded={loaded}
        shown={sidebarShown}
        setShown={setSidebarShown}
      />
      <Navbar loaded={loaded} scrolled={scrolled} />
    </>
  );
};

export default Header;
