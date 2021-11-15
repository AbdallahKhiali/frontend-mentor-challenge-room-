import React,{useState} from 'react'
import '../../style/navbar_mobile.css'
function NavbarMobile() {
    const [navopen, setnavopen] = useState(false)
    return (
        <div className="mobile_navbar" >
            {
                (navopen)?
                <ul className="mobile_navbar_open" >
                    
                <img src={require('../../images/icon-close.svg').default} onClick={()=>{setnavopen(false)}} />
                <li ><a className="mobile_nav_item" href="/home" >home</a></li>
                <li ><a className="mobile_nav_item" href="/" >shop</a></li>
                <li ><a className="mobile_nav_item" href="/" >about</a></li>
                <li ><a className="mobile_nav_item" href="/" >contact</a></li>
            
             </ul>:
                <div>
                    <img  onClick={()=>{setnavopen(true)}} alt="mobile_menu" className="mobile_logo menu" src={require('../../images/icon-hamburger.svg').default}  />
                    <img alt="mobile_logo" className="mobile_logo room" src={require('../../images/logo.svg').default}  />
                </div>
                
               
            }
           
        </div>
    )
}

export default NavbarMobile
