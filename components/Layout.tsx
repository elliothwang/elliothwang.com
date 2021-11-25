import Header from './Header';
import Footer from './Footer';

const Layout = ({ loaded, scrolled, children }) => {
  return (
    <>
      <Header loaded={loaded} scrolled={scrolled} />
      {/* TODO: create social media links modal. add social media links to footer for now */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
