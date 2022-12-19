import React from 'react'
import HomeScreen from './HomeScreen'
import Navbar from './Navbar'

const Home = ({setSearch,openVoiceSearch}) => {
  return (
    <>
    <Navbar/>
    <HomeScreen setSearch={setSearch} openVoiceSearch={openVoiceSearch}/>
    </>
  )
}

export default Home