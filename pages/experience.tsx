import Head from 'next/head'
import Layout from '../components/Layout'
import Experience from '../components/sections/Experience'

export default function ExperiencePage() {
  return (
    <div>
      <Head>
        <title>el's Experience</title>
      </Head>
      <Layout>
        <main>
          <Experience />
        </main>
      </Layout>
    </div>
  )
}
