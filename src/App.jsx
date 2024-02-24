import React from 'react'
import Navbar from "./components/Navbar"
import Dishes from "./pages/Dishes"
import Home from "./pages/Home"
import About from './pages/About'
import Menu from './pages/Menu'
import Reviews from './pages/Reviews'
import Footer from './pages/Footer'

function App() {

  return (
    <>
    <Navbar/>

    <main>
      <div id="home">
        <Home/>
      </div>
      <div id="dishes">
        <Dishes/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="menu">
        <Menu/>
      </div>
      <div id="reviews">
        <Reviews/>
      </div>

      <Footer/>
    </main>
    </>
  )
}

export default App
