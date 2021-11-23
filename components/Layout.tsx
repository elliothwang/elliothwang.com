import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* TODO: create social media links modal */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
