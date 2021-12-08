import '../styles/globals.scss';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const App = ({ Component, pageProps }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 3000);
  }, []);

  return (
    <>
      {loaded ? (
        <div className="body">
          <Component {...pageProps} loaded={loaded} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;
