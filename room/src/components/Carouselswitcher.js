import React from 'react'

function Carouselswitcher(props) {

    const {position,setposition,headers} = props
    const leftClick=()=>{
        (position===0)?setposition(headers.length-1):setposition(position-1)
    }
    const rightClick=()=>{
        (position===headers.length-1)?setposition(0):setposition(position+1)
    }
    return (
        <div className='carousel_arrows'>
            <div className="arrow" onClick={leftClick} >
            <img alt='arrow' src={require('../images/icon-angle-left.svg').default} className="left_arrow "  />
            </div>

            <div className="arrow" onClick={rightClick} >
            <img alt='arrow' src={require('../images/icon-angle-right.svg').default} className="right_arrow " />
            </div>

        </div>

    )
}

export default Carouselswitcher
