import React from 'react'

function About() {
    return (
        <div className='about' >
            <img src={require('../images/image-about-dark.jpg').default} className="about_image" alt="about_image1" />
            <div className='about_texts' >
                    <h1 className="about_header" >About our furniture</h1>
                    <p className="about_description" >
                    Our multifunctional collection blends design and function to suit your individual taste. 
                    Make each room unique,
                    or pick a cohesive theme that best express your interests and what inspires you.
                    Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                    </p>
            </div>
            <img src={require('../images/image-about-light.jpg').default} className="about_image"  alt="about_image2"/>

        </div>
    )
}

export default About
