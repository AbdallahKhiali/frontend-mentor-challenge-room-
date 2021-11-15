import React,{useState} from 'react'
import "../style/carousel.css"
import Carouselswitcher from './Carouselswitcher'
function Carrousel() {
  
const [position, setposition] = useState(0)
const headers=[
        {
            title:"Discover innovative ways to decorate",
            description:"We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love.",
            image:require('../images/desktop-image-hero-1.jpg').default,
        },
        {
            title:"  We are available all across the globe",
            description:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
            image:require('../images/desktop-image-hero-2.jpg').default,
        },
        {
            title:"  Manufactured with the best materials ",
            description:"  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office. ",
            image:require('../images/desktop-image-hero-3.jpg').default,
        }
    ]
    return ( 
         <div className='hero_carousel' >
            <img src={headers[position].image} className='carousel_image' alt='carousel_image' />
            <div className='carousel_text' >
                    <div className='carousel_text_container'>
                        <h1 className='title_header' >{headers[position].title}</h1>
                        <p className='title_description' >{headers[position].description}</p>
                        <div className='shop_btn' >
                            Shop Now
                            <img src={require('../images/icon-arrow.svg').default} alt='arrow-icon' className='arrow-icon'  />
                        </div>
                    </div>
                    <Carouselswitcher position={position} setposition={setposition} headers={headers} />
            </div>

      
    
        </div>
    )
}

export default Carrousel
