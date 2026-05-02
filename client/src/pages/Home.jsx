import React, { useContext } from 'react'
import { AppContextProvider } from '../context/AppContext'
import Header from '../components/Header'
import Services from '../components/Services'
import ProjectsSection from '../components/ProjectsSection'
import WhyMe from '../components/WhyMe'
import Testimonials from '../components/Testimonials'
import AboutMe from '../components/AboutMe'

const Home = () => {
  const { name } = useContext(AppContextProvider)
  return (
    <div>
      <Header />
      <Services />
      <ProjectsSection />
      <WhyMe/>
      <Testimonials/>
      <AboutMe />
    </div>
  )
}

export default Home