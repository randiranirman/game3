import {  useState } from "react"

import Navbar from "./components/Navbar"

import LoginPopup from "./components/LoginPopup/LoginPopup"
import Footer from "./components/Footer/Footer"
import { Route, Routes } from "react-router-dom"

import Home from '../src/Pages/Home/Home'
import Blog from '../src/Pages/Blog/Blog'
import Apps from '../src/Pages/Apps/Apps'




const App = () => {

  const [showLogin, setShowLogin] = useState(false)



  return (
    <>
      


    {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    <Navbar setShowLogin={setShowLogin} />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    <Footer />
      

    </>
  )
}

export default App
