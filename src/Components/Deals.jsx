import React from 'react'
import '../Styles/Billing.css'
import Card from '../Assets/card.png'
export default function Deals() {
  return (
    <div>
      <div className="billing-section card-section">
    <div className="left-bill">
        <img className='deal-img' src={Card} alt="" />
    </div>
    <div className="right-bill">
            <span className='about-span'>Find a better deal</span> 
            <span className='about-span'>in few easy steps.</span>
            <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
    </div>
   </div>
    </div>
  )
}
