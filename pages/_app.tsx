import '../styles/globals.scss';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    // TODO: figure out why first component doesn't load after preloader
    // <>
    //   {loading ? (
    //     <Loader />
    //   ) : (
    //     <div className="body">
    //       <Component {...pageProps} />
    //     </div>
    //   )}
    // </>
    // TODO: fix horizontal scrolling on laptop/desktop view
    <div className="body">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
