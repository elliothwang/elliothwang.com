import ExperienceCard from "../ExperienceCard";
import ExperienceTimeline from "../ExperienceTimeline";

const Experience = () => {
  return (
    <>
      <h1>What have I done?</h1>
      <ExperienceTimeline />
      <ExperienceCard />

      {/* mobile */}
        {/* LEFT: timeline with corresponding marker */}
        {/* MIDDLE/RIGHT: 3 experience cards */}

      {/* pc */}
        {/* LEFT: experience card (middle) */}
        {/* MIDDLE: timeline with corresponding markers */}
        {/* RIGHT: 2 experience cards (top & bottom) */}
    </>
  )
}

export default Experience
