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
    // <>
    //   {loading ? (
    //     <Loader />
    //   ) : (
    //     <div className="body">
    //       <Component {...pageProps} />;
    //     </div>
    //   )}
    // </>
    <div className="body">
      <Component {...pageProps} />;
    </div>
  );
};

export default MyApp;
