import React, { useContext } from 'react'
import { AppContextProvider } from '../context/AppContext'
import Header from '../components/Header'

const Home = () => {
  const { name } = useContext(AppContextProvider)
  return (
    <Header/>
  )
}

export default Home