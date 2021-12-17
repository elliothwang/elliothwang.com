import { useState, useEffect, FC } from 'react';
import { useThemeContext } from './ThemeContext';
import disableScroll from 'disable-scroll';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

type Props = {
  scrolled: boolean;
};

// TODO (v2): page reload should scroll to selected anchor section;
const Header: FC<Props> = ({ scrolled }) => {
  const { darkMode } = useThemeContext();
  const [animate, setAnimate] = useState(false);
  const [sidebarShown, setSidebarShown] = useState(false);

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
      <Sidebar shown={sidebarShown} handleSidebarClick={handleButtonClick} />
      <Navbar
        loaded={animate}
        scrolled={scrolled}
        shown={sidebarShown}
        handleButtonClick={handleButtonClick}
      />
    </>
  );
};

export default Header;
