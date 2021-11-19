import Head from 'next/head'
import Layout from '../components/Layout'
import About from '../components/sections/About'

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About el</title>
      </Head>
      <Layout>
        <main>
          <About />
        </main>
      </Layout>
    </div>
  )
}
