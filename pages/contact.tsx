import Head from 'next/head';
import Layout from '../components/Layout';
import Contact from '../components/sections/ContactBubble';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact el</title>
      </Head>
      <Layout>
        <main>
          <Contact />
        </main>
      </Layout>
    </>
  );
};

export default ContactPage;
