import { useState, useEffect } from 'react';
import disableScroll from 'disable-scroll';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SidebarButton from './SidebarButton';
import styles from '../styles/Header.module.scss';

const Header = ({ scrolled }) => {
  // const [dark, setDark] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [sidebarShown, setSidebarShown] = useState(false);

  // const handleThemeChange = () => {
  //   setDark(!dark);
  // };

  const handleSidebarTransform = () => {
    setSidebarShown(!sidebarShown);
    sidebarShown ? disableScroll.off() : disableScroll.on();
  };

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <>
      <div onClick={handleSidebarTransform}>
        <SidebarButton loaded={animate} shown={sidebarShown} />
      </div>
      <Sidebar
        loaded={animate}
        shown={sidebarShown}
        setShown={setSidebarShown}
      />
      <Navbar loaded={animate} scrolled={scrolled} />
    </>
  );
};

export default Header;
