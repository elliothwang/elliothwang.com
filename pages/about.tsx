import Head from 'next/head'
import Layout from '../components/Layout'
import About from '../components/sections/About'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About el</title>
      </Head>
      <Layout>
        <main>
          <About />
        </main>
      </Layout>
    </>
  )
}

export default AboutPage