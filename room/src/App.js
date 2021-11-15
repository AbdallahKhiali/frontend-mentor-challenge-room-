import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './style.css'
import NavbarMobile from './components/Mobile/NavbarMobile'
import HeroMobile from './components/Mobile/HeroMobile'
function checkMediaQuery() {
    // If the inner width of the window is greater then 768px
    if (window.innerWidth > 768) {
        return(
          <div className='App'>
              <Navbar/>
              <Hero/>
          </div>
        )
    }
    return ( 
      <div className='App'>
              <NavbarMobile/>
              <HeroMobile/>
          </div>
    )
    }
  
function App() {
  
  
  // Add a listener for when the window resizes
  window.addEventListener('resize', checkMediaQuery);

  return (

    checkMediaQuery()
  

  )
}

export default App
