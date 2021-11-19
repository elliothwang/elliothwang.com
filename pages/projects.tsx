import Head from 'next/head'
import Layout from '../components/Layout'
import Projects from '../components/sections/Projects'

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>el's Projects</title>
      </Head>
      <Layout>
        <main>
          <Projects />
        </main>
      </Layout>
    </>
  )
}

export default ProjectsPage