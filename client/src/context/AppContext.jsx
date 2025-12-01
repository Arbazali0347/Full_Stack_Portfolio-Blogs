import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast';

export const AppContextProvider = createContext()
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = ({ children }) => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogData = async ()=> {
    try {
      const {data} = await axios.get("/api/blog/all")
      if (data.success) {
        setBlogs(data.blogs)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchBlogData()
  },[])
  
  const value = {
    axios, blogs
  }
  return (
    <div>
      <AppContextProvider.Provider value={value}>
        {children}
      </AppContextProvider.Provider>
    </div>
  )
}

export default AppContext