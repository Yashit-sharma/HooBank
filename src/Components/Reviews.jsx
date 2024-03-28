import React from 'react'
import '../Styles/Reviews.css'
import Quotes from '../Assets/quotes.svg'
import people1 from '../Assets/people01.png'
import people2 from '../Assets/people02.png'
import people3 from '../Assets/people03.png'
const Data = [
    {   Id : 1,
        Img : people1,
        Text :  "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver",
        Name : "Herman Jensen",
        Position : "Founder & Leader"
    },
    {   Id : 2,
        Img : people2,
        Text :  "Money makes your life easier. If you're lucky to have it, you're lucky.",
        Name : "Steve Mark",
        Position : "Founder & Leader"
    },
    {   Id : 3,
        Img : people3,
        Text :  "It is usually people in the money business, finance, and international trade that are really rich.",
        Name : "Kenn Gallagher",
        Position : "Founder & Leader"
    }
];
export default function Reviews() {
  return (
   <>
   <div className="review-section">
    <span className='heading-review gradient'>What People Think ?</span>
    <div className="rev-cards">
{Data.map((ele,index) =>{
    return(
        <>
         <div key={ele.Id} className="rev-card">
            <img src={Quotes} alt="" height={50} width={50}/>
            <p className='rev-text-p'>
            {ele.Text}
            </p>
            <div className="card-img">
                <img src={ele.Img} alt="" width={70}/>
                <div className="img-text">
                    <p>{ele.Name}</p>
                    <span className='gradient'>{ele.Position}</span>
                </div>
            </div>
        </div>
        </>
    )
})}
    </div>
   </div>
   </>
  )
}
