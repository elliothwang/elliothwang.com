import Header from './Header';
import Footer from './Footer';

// TODO: create social media links modal;
const Layout = ({ scrolled, children }) => {
  return (
    <>
      <Header scrolled={scrolled} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
