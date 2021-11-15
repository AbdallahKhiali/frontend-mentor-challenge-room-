import React from 'react'
import About from './About'
import Carrousel from './Carrousel'

function Hero() {

    return (
        <div className='hero' >
            
            <div className='hero_carousel' >
                <Carrousel/>
            </div>

            <About/>
            
        </div>
    )
}

export default Hero
