import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="body">
      <Component {...pageProps} />;
    </div>
  );
};

export default MyApp;
