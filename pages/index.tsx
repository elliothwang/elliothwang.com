import { useState, useEffect, FC } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import styles from '../styles/index.module.scss';

const Index: FC = () => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [aboutScrolled, setAboutScrolled] = useState(false);
  const [experienceScrolled, setExperienceScrolled] = useState(false);
  const [projectsScrolled, setProjectsScrolled] = useState(false);

  useEffect(function Mount() {
    function onScroll() {
      window.scrollY >= 150
        ? setHeaderScrolled(true)
        : setHeaderScrolled(false);
      window.scrollY >= 200 && setAboutScrolled(true);
      window.scrollY >= 1100 && setExperienceScrolled(true);
      window.scrollY >= 5000 && setProjectsScrolled(true);
    }

    window.addEventListener('scroll', onScroll);

    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <div className={styles.index}>
      <Head>
        <title>Elliot Hwang</title>
        <meta name="description" content="Elliot Hwang's Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout scrolled={headerScrolled}>
        <main>
          <Hero />
          <section id="about">
            <About scrolled={aboutScrolled} />
          </section>
          <section id="experience">
            <Experience scrolled={experienceScrolled} />
          </section>
          <section id="projects">
            <Projects scrolled={projectsScrolled} />
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default Index;
