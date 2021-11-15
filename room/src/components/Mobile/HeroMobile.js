import React,{useEffect,useState} from 'react'
import '../../style/hero_mobile.css'
import Carouselswitcher from '../Carouselswitcher'

function HeroMobile() {
    const [position, setposition] = useState(0)
        const headers=[
                {
                    title:"Discover innovative ways to decorate",
                    description:"We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love.",
                    image:require('../../images/mobile-image-hero-1.jpg').default,
                },
                {
                    title:"  We are available all across the globe",
                    description:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
                    image:require('../../images/mobile-image-hero-2.jpg').default,
                },
                {
                    title:"  Manufactured with the best materials ",
                    description:"  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office. ",
                    image:require('../../images/mobile-image-hero-3.jpg').default,
                }
            ]
    return (
        <div className="hero_mobile" >

                <div className="carousel_mobile" >
                    <img  src={headers[position].image} className="carousel_mobile_image" />
                   <div className="mobile_carousel_switcher">
                        <Carouselswitcher  setposition={setposition} position={position} headers={headers}     />
                    </div>
                    <div>
                        <h2 className='mobile_title_header' >{headers[position].title}</h2>
                        <p className="mobile_title_description ">{headers[position].description}</p>
                        <div className="mobile_shop_btn"><p>SHOP NOW </p><img src={require('../../images/icon-arrow.svg').default}   /></div>
                    </div>
                </div>
                <img src={require('../../images/image-about-dark.jpg').default} className="mobile_about_image" alt="mobile_image"  />
                <div className="mobile_about" >
                        <h2 className='mobile_about_title' >About the fourniture</h2>
                        <p className="mobile_about_description ">
                        Our multifunctional collection blends design and function to suit your individual taste. 
                        Make each room unique,
                        or pick a cohesive theme that best express your interests and what inspires you.
                        Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                        </p>
                    </div>
                <img src={require('../../images/image-about-light.jpg').default} className="mobile_about_image"  alt="mobile_image"  />

        </div>
    )
}

export default HeroMobile 
