import React, { lazy } from 'react'
import '../Styles/Hero.css'
import robot from '../Assets/robot.png'
import {motion} from 'framer-motion'
export default function Hero() {
  return (
   <>
   <div className="hero-section">
    <div className="left">
        <div className="left-text">
        <p className='grey left-hero-text'>The Next</p>
        <p className='gradient lh-main-text'>Generational</p>
        <p className='grey left-hero-text'>Payment Method</p>
        <p className='grey-2 left-hero-p'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
            We examine annual percentage rates, annual fees.
        </p>
        </div>
    </div>
    <div className="right">
        <div className="hero-img">
            <motion.img 
            whileInView={{y:['-20px','20px','-20px']}}
            transition={{
                y : {
                    duration:5,repeat:Infinity,ease: "linear"
                }
            }}
            src={robot} loading='lazy' alt="" />
        </div>
    </div>
   </div>
   <div 
   className="hero-info">
    <span className='hero-values'>3800 + <span className='gradient-2 val-text'> USER ACTIVE</span></span>
    <span className='hero-values'>230 + <span className='gradient-2 val-text'> TRUSTED BY COMPANY</span></span>
    <span className='hero-values'>$230M + <span className='gradient-2 val-text'>TRANSCATIONS</span></span>
   </div>
   </>
  )
}
