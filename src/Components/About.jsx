import React,{useEffect} from 'react'
import '../Styles/About.css'
import star from '../Assets/Star.svg'
import shield from '../Assets/Shield.svg'
import arrow from '../Assets/Send.svg'
import {motion,useScroll,useTransform} from 'framer-motion'
import { useRef } from 'react'
const Laptop = window.innerWidth > 500;


let Data = [{
    id : 1,
    Name : 'Rewards',
    Text : 'The best credit cards offer some tantalizing combinations of promotions and prizes',
    Link : star
    },
    {
    id : 2,
    Name : '100% Secured',
    Text : 'We take proactive steps make sure your information and transactions are secure.',
    Link : shield
    },
    {
    id : 3,
    Name : 'Balance Transfer',
    Text : 'A balance transfer credit card can save you a lot of money in interest charges.',
    Link : arrow
    },
];
export default function About() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
    { 
    target : ref,
    // offset : ["0 1", "1.1 1"]
    offset : ["0 1", Laptop ? "1.5 1" : "0.8 1"]
    }); 
const Scale = useTransform(scrollYProgress,[0,1],[0.5,1]);
  return (
    <>
    <motion.div 
    id='Features'
    ref={ref}
    style={{
        scale:Scale,
        opacity:Scale
    }}
    transition={{duration:3}}
    >
    <div className="about-container">
        <div 
        className="about-left">
            <span className='about-span'>You do the business,</span>
            <span className='about-span'>we'll handle the money.</span>
            <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <button className="about-btn">Get Started</button>
        </div>

        <div className="about-right">
        {Data.map((ele,index) =>{
          return(
                <>
            <div className='box-container' key={ele.id}>
            <div className="r-logo">
                <img src={ele.Link} alt="" />
            </div>
            <div className="r-logo-text">
                <span className='blue'>{ele.Name}</span>
                <p>{ele.Text}</p>
            </div>
        </div>
                </>
        );
    })}
        </div>
    </div>
    </motion.div>
    </>
  )
}
