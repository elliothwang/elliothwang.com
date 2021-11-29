import '../styles/globals.scss';
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    // <>
    //   {loading ? (
    //     <LoadingScreen />
    //   ) : (
    //     <div className="body">
    //       <Component {...pageProps} />;
    //     </div>
    //   )}
    // </>
    <div className="body">{loading ? null : <Component {...pageProps} />}</div>
  );
};

export default MyApp;
