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

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden 
        bg-gradient-to-br from-black via-neutral-900 to-[#141414] 
        text-white py-5 px-6 md:px-10 lg:px-16 lg:py-7">

      {/* Blurred Shapes */}
      <div className="absolute top-20 -left-10 w-72 h-72 bg-white/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-white/5 rounded-full blur-[130px]"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neutral-700/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-10">
        <Toaster/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:id' element={<BlogPage />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
