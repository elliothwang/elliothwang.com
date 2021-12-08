import Header from './Header';
import Footer from './Footer';

// TODO (v2): create social media links modal;
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
