import React from 'react'
import '../Styles/About.css'
import star from '../Assets/Star.svg'
import shield from '../Assets/Shield.svg'
import arrow from '../Assets/Send.svg'
import {motion} from 'framer-motion'
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
  return (
    <>
    <div className="about-container">
        <motion.div 
        initial={{scale:0.4}}
        whileInView={{scale:1}}
        transition={{duration:1}}
        viewport={{once:true}}
        className="about-left">
            <span className='about-span'>You do the business,</span>
            <span className='about-span'>we'll handle the money.</span>
            <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <button className="about-btn">Get Started</button>
        </motion.div>

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
    </>
  )
}
