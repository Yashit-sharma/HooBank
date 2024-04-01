import React from 'react'
import { useRef } from 'react'
import '../Styles/Billing.css'
import Card from '../Assets/card.png'
import {motion,useScroll,useTransform} from 'framer-motion'
export default function Deals() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
  { 
  target : ref,
  offset : ["0 1", "1.2 1"]
  });
  const animationProps = {
    opacity: scrollYProgress,
};

  return (
    <motion.div
    ref={ref}
    style={animationProps}>
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
    </motion.div>
  )
}
