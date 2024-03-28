import React from 'react'
import'../Styles/Navbar.css'
import logo from '../Assets/logo.svg'
export default function Navbar() {
  return (
   <>
    <div className="navbar">
    <div className="logo--image">
     <div className="img-div">
     <img src={logo} alt="" />
     </div>
    </div>
    <div className="links">
    <span className='gradient-2'>Home</span>
    {/* <span>About Us</span> */}
    <span className='gradient-2'>Features</span>
    <span className='gradient-2'>Solution</span>
    </div>
    </div>
   </>
  )
}
