
import React from 'react';

import link from '../svg/link.png';
import github from '../svg/github.svg';
import details from '../svg/info.svg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const WebsiteDetails = ({detail}) => {
    const {_id,name,Technologies,fullImage,sortDescription,liveSite,githublink}=detail;
    const navigate = useNavigate()
    const handleDetails=id=>{
        navigate(`/details/${id}`)
    }
    return (
        <div>
      
           
       
       <div class="card max-w-md mx-4 overflow-hidden bg-slate-300 rounded-lg shadow-lg dark:bg-gray-800 mb-7">
           <div className='card-img'>
                <img class="object-fill" src={fullImage} alt="avatar"/>
           </div>
           <div className='card-body'>
           <p className='font-serif ml-2 mt-2'>{sortDescription}</p>
           <div class="py-5 text-center">
               <p class="block text-2xl font-bold text-gray-800 dark:text-white">{name}</p>
               <div className='flex justify-center gap-3 mt-3'>
               <button className='btn btn-warning '><a className='flex' href={liveSite} target="_blank"><img className="w-6 h-6 mr-2 bg-white rounded-full" src={link} alt="" /><p className='mt-1'>Website</p></a></button>

               <button className='btn btn-warning '><a className='flex' href={githublink} target="_blank"><img className="w-6 h-6 mr-2 bg-white rounded-full" src={github} alt="" /><p className='mt-1'>github</p></a></button>


             
             
               </div>
               <button onClick={()=>handleDetails(_id)} className='btn btn-warning mt-3'><Link className='flex' to={'/details'}><img className="w-6 h-6 mr-2 bg-white rounded-full" src={details} alt="" /><p className='mt-1'>Details</p></Link></button>
            
        

              <div className='grid grid-cols-2 mx-3 mt-6 gap-3'>
                <p className='bg-gray-300 border-2 p-1'>{Technologies[0]}</p>
                <p className='bg-gray-300 border-2 p-1'>{Technologies[1]}</p>
                <p className='bg-gray-300 border-2 p-1'>{Technologies[2]}</p>
                <p className='bg-gray-300 border-2 p-1'>{Technologies[3]}</p>
                <p className='bg-gray-300 border-2 p-1'>{Technologies[4]}</p>
                <p className='bg-gray-300 border-2 p-1'>{Technologies[5]}</p>
              </div>
           </div>
           </div>
       </div>
      
       </div>
           
         
   
    );
};

export default WebsiteDetails;
