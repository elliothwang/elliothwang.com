import Head from 'next/head';
import Layout from '../components/Layout';
import Landing from '../components/sections/Landing';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import ContactBubble from '../components/sections/ContactBubble';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Elliot Hwang</title>
        <meta name="description" content="Generated by create next app" />
        {/* TODO: change icon to el icon later. favicon.ico is in public folder */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Landing />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <ContactBubble />
        </main>
      </Layout>
    </>
  );
};

export default HomePage;
