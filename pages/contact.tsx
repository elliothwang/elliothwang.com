import Head from 'next/head'
import Layout from '../components/Layout'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact el</title>
      </Head>
      <Layout>
        <main>
          <Contact />
        </main>
      </Layout>
    </div>
  )
}
