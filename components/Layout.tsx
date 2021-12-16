import Header from './Header';
import Footer from './Footer';
import React, { FC } from 'react';

type Props = {
  scrolled: boolean;
  children: React.ReactNode;
};

// TODO (v2): create social media links modal;
const Layout: FC<Props> = ({ scrolled, children }) => {
  return (
    <>
      <Header scrolled={scrolled} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
