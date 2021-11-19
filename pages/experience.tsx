import Head from 'next/head'
import Layout from '../components/Layout'
import Experience from '../components/sections/Experience'

const ExperiencePage = () => {
  return (
    <>
      <Head>
        <title>el's Experience</title>
      </Head>
      <Layout>
        <main>
          <Experience />
        </main>
      </Layout>
    </>
  )
}

export default ExperiencePage