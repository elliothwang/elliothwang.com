import '../styles/main.scss';
import { useState, useEffect, FC } from 'react';
import Loader from '../components/Loader';
import { ThemeProvider } from '../components/ThemeContext';

type Props = {
  Component: any;
  pageProps: any;
};

const App: FC<Props> = ({ Component, pageProps }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 3000);
  }, []);

  return (
    <>
      <ThemeProvider>
        {loaded ? (
          <div className="body">
            <Component {...pageProps} loaded={loaded} />
          </div>
        ) : (
          <Loader />
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
