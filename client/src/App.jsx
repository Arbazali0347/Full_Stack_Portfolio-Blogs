import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import BlogPage from './pages/BlogPage'
import { Toaster } from "react-hot-toast"
import NotFound from './pages/NotFound'
import Backdrop from './components/Backdrop'
import ScrollToTop from './components/Top'
import BeforeAfterPage from './pages/BeforeAfterPage'
import Footer from './components/Footer'

const App = () => {
  return (
      <div>
        <ScrollToTop/>
        <Backdrop/>
        <Toaster/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:id' element={<BlogPage />} />
          <Route path='before-after' element={<BeforeAfterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
