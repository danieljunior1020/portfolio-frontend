import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MySkills from '../components/MySkills'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(72,62,62)] text-yellow-50 h-screen
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-slate-400/90
     scrollbar-thumb-yellow-300/70'>
      <Head>
        <title>Daniel's portfolio</title>
      </Head>

       {/* header */}
       <Header />

       {/* hero */}
       <section id="hero" className='snap-start'>
          <Hero />
       </section>


       {/* about me */}
       <section id="aboutMe" className='snap-center'>
         <AboutMe />
       </section>

       {/* experience level */}
       <section id="experience" className="snap-center">
         <Experience />
       </section>


       {/* my skills */}
       <section id="myskills" className="snap-start">
          <MySkills />
       </section>
    
       
       {/* my projects */}
       <section id='projects' className='snap-start'>
         <Projects />
       </section>


       {/* contact me */}
        <section id='projects' className='snap-start'>
           <Projects />
        </section>
    </div>
  )
}

export default Home
