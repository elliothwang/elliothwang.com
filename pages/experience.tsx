import Head from 'next/head'
import ExperienceCard from '../components/ExperienceCard'
import ExperienceTimeline from '../components/ExperienceTimeline'

export default function ExperiencePage() {
  return (
    <div>
      <Head>
        <title>el's Experience</title>
      </Head>

      <main>
        <h1>Experience (and Education) Page</h1>
        <ExperienceTimeline />
        <ExperienceCard />
        {/* mobile */}
          {/* LEFT: timeline with corresponding marker */}
          {/* MIDDLE/RIGHT: 3 experience cards */}

        {/* pc */}
          {/* LEFT: experience card (middle) */}
          {/* MIDDLE: timeline with corresponding markers */}
          {/* RIGHT: 2 experience cards (top & bottom) */}
      </main>
    </div>
  )
}
