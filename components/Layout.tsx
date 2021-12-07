import Header from './Header';
import Footer from './Footer';

const Layout = ({ loaded, scrolled, children }) => {
  return (
    <>
      <Header scrolled={scrolled} />
      {/* TODO: create social media links modal */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
