import React, { useContext } from 'react'
import { AppContextProvider } from '../context/AppContext'
import Header from '../components/Header'
import Services from '../components/Services'
import ProjectsSection from '../components/ProjectsSection'
import WhyMe from '../components/WhyMe'
import Testimonials from '../components/Testimonials'
import TechTicker from '../components/TechTicker'
import LogoMarquee from '../components/LogoMarquee'
import About from '../components/ShortAbout'

const Home = () => {
  const { name } = useContext(AppContextProvider)
  return (
    <div>
      <Header />
      <TechTicker />
      <LogoMarquee />
      <ProjectsSection />
      <Services />
      <WhyMe />
      <Testimonials />
      <About/>
    </div>
  )
}

export default Home