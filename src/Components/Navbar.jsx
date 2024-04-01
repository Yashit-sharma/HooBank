import React from 'react'
import'../Styles/Navbar.css'
import logo from '../Assets/logo.svg'
export default function Navbar() {
  const scrollToSection = (sectionId, duration) => {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;
    const targetPosition = targetSection.offsetTop-70;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const scroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };
    requestAnimationFrame(scroll);
  };
  return (
   <>
    <div className="navbar">
    <div className="logo--image">
     <div className="img-div" onClick={()=>{scrollToSection('Home',65)}}>
     <img src={logo} alt="" />
     </div>
    </div>
    <div className="links">
    <span className='gradient-2' onClick={()=>{scrollToSection('Home',65)}}>Home</span>
    <span className='gradient-2' onClick={()=>{scrollToSection('Features',65)}}>Features</span>
    <span className='gradient-2' onClick={()=>{scrollToSection('Reviews',65)}}>Reviews</span>
    </div>
    </div>
   </>
  )
}
