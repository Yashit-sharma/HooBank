import React from 'react'
import { useRef } from "react"
import '../Styles/Billing.css'
import Bill from '../Assets/bill.png'
import AppStore from '../Assets/apple.svg'
import PlayStore from '../Assets/google.svg'
import {motion,useScroll,useTransform} from 'framer-motion'
export default function Billing() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
  { 
  target : ref,
  offset : ["0 1", "1.2 1"]
  });

  const animationProps = {
    opacity: scrollYProgress, // Fade in as scroll progresses
};

  return (
   <>
   <div className="billing-section">
    <motion.div 
    ref={ref}
    style={animationProps}
    className="left-bill">
        <img className='bill-img' src={Bill} alt="" />
    </motion.div>
    <div className="right-bill">
            <span className='about-span'>Easily control your</span> 
            <span className='about-span'> billing & invoicing.</span>
            <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className="store-img">
                <img src={AppStore}  width="100"/>
                <img src={PlayStore}  width="100"/>
            </div>
    </div>
   </div>
   </>
  )
}
