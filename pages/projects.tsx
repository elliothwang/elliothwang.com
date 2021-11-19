import Head from 'next/head'
import Layout from '../components/Layout'
import Projects from '../components/sections/Projects'

export default function ProjectsPage() {
  return (
    <div>
      <Head>
        <title>el's Projects</title>
      </Head>
      <Layout>
        <main>
          <Projects />
        </main>
      </Layout>
    </div>
  )
}
