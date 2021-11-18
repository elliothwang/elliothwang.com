import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsPage() {
  return (
    <div>
      <Head>
        <title>el's Projects</title>
      </Head>

      <main>
        <h1>Projects</h1>
        <ProjectCard />
        {/* grid mapping with ProjectCards component */}
      </main>
    </div>
  )
}
