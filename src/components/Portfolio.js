import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import WebsiteDetails from './WebsiteDetails';


const Portfolio = () => {
  const [details,setdetais]=useState([]);
  useEffect(()=>{
    fetch('https://tranquil-shore-81858.herokuapp.com/website')
    .then(res=>res.json())
    .then(data=>setdetais(data))
  },[])
    return (
       <div>
        <h3 className='text-center text-5xl text-white font-bold mt-32' data-aos="fade-up"
data-aos-anchor-placement="bottom-bottom">My Website </h3>
       <div id='portfolio' className='grid lg:grid-cols-3 sm:grid-cols-1 mt-32' data-aos="fade-up"></div>
         <div className='grid lg:grid-cols-3 grid-cols-1'>
          
          {
            details.map(detail=><WebsiteDetails
            key={detail._id}
            detail={detail}
            ></WebsiteDetails>)
          }
        </div>
       </div>
    );
};

export default Portfolio;