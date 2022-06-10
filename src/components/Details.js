import React from 'react';
import link from '../svg/link.png';
import github from '../svg/github.svg';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from './Loading';





const Details = () => {
  const { id } = useParams();

    
      const { isLoading, error, data:webDetails } = useQuery(('repoData',id),()=>
        fetch(`https://tranquil-shore-81858.herokuapp.com/website/${id}`).then(res =>
          res.json()
        )
      )
      if(isLoading){
        return <Loading></Loading>
      }
    console.log(webDetails);
    return (
      
  <div className='pb-20'>

    <div class="carousel lg:mx-64 mx-0 mt-5 ">
  <div id="item1" class="carousel-item w-full">
    <img src={webDetails?.image?.img1} class="w-full" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src={webDetails?.image?.img2} class="w-full" />
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img src={webDetails?.image?.img3}class="w-full" />
  </div> 
  
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
  
</div>

<h3 className='text-white lg:mx-64 mx-0 lg:mt-2 mt-2'><span className='text-2xl font-bold'>Project Name</span> :  <span className='text-2xl text-warning'>{webDetails?.name}</span></h3>
<h3 className='text-2xl text-white lg:mx-64 mx-0 font-bold'>Technologies:</h3>
<div className='grid grid-cols-2 lg:mx-64 mx-2 mt-6 gap-3'>
            
                {/* <p className='bg-gray-300 border-2 p-1'>{webDetails?.Technologies[0]}</p> */}
                <p className='bg-gray-300 border-2 p-1'>{webDetails?.Technologies[0]}</p>
                <p className='bg-gray-300 border-2 p-1'>{webDetails?.Technologies[1]}</p>
                <p className='bg-gray-300 border-2 p-1'>{webDetails?.Technologies[2]}</p>
                <p className='bg-gray-300 border-2 p-1'>{webDetails?.Technologies[3]}</p>
                <p className='bg-gray-300 border-2 p-1'>{webDetails?.Technologies[4]}</p>
                <p className='bg-gray-300 border-2 p-1'>{webDetails?.Technologies[5]}</p>
              </div>
           
              <div className='flex lg:mx-64 mx-4  gap-3 mt-10'>
              <h3 className='text-2xl text-white font-bold'>Links :</h3>
               <button className='btn btn-warning '><a className='flex' href={webDetails?.liveSite} target="_blank"><img className="w-6 h-6 mr-2 bg-white rounded-full" src={link} alt="" /><p className='mt-1'>Website</p></a></button>

               <button className='btn btn-warning '><a className='flex' href={webDetails?.githublink} target="_blank"><img className="w-6 h-6 mr-2 bg-white rounded-full" src={github} alt="" /><p className='mt-1'>github</p></a></button>
               </div>
               <div>
                <p className='text-white lg:mx-32 mx-2 mt-10'>{webDetails?.description[0]}</p>
                <p className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.description[1]}</p>
                <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.description[2]}</li>
                <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.description[3]}</li>
                <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.description[4]}</li>
                <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.description[5]}</li>
                <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.description[6]}</li>
                <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.description[7]}</li>
                
               </div>
               <div>
               <p className='text-white  lg:mx-32 mx-2 text-2xl mt-10'>{webDetails?.dependency[0]}</p>
               <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.dependency[1]}</li>
               <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.dependency[2]}</li>
               <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.dependency[3]}</li>
               <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.dependency[4]}</li>
               <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.dependency[5]}</li>
               <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.dependency[6]}</li>
               <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.dependency[7]}</li>
               <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.dependency[8]}</li>
               <li className='text-white lg:mx-32 mx-2 mt-3'>{webDetails?.dependency[9]}</li>
               
               </div>

  </div>
    );
};

export default Details;