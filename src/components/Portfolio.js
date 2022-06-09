import React from 'react';
import link from '../svg/link.png';
import github from '../svg/github.svg';
// import img1 from '../image/Screenshot_1.png';
// import img2 from '../image/Screenshot_25.png';
// import img3 from '../image/Screenshot_2.png';
import Project1Img from '../image/project-1.png';
import Project2Img from '../image/project-2.png';
import Project3Img from '../image/project-3.png';

const Portfolio = () => {
    return (
        <div>
            <h3 className='text-center text-5xl text-white font-bold mt-32' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">My Website</h3>
            <div className="bg-yellow-500 mt-3 mx-96 h-1 text-center" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"></div>
            <div id='portfolio' className='grid lg:grid-cols-3 sm:grid-cols-1 mt-32' data-aos="fade-up">
           
           <div class="card max-w-md mx-4 overflow-hidden bg-slate-300 rounded-lg shadow-lg dark:bg-gray-800 mb-7">
               <div className='card-img'>
                    <img class="object-fill" src={Project1Img} alt="avatar"/>
               </div>
               <div className='card-body'>
               <p className='font-serif ml-2 mt-2'><span className='font-bold'>Details : </span> Through this website Ezion users can easily purchase electrical parts and according to the user's choice.</p>
               <div class="py-5 text-center">
                   <p class="block text-2xl font-bold text-gray-800 dark:text-white">Elctrical Parts</p>
                   <div className='flex justify-center gap-3 mt-3'>
                   <a href="https://tires-store.web.app/" target="_blank"><img className="w-8 h-8 mr-5 bg-white rounded-full" src={link} alt="" /></a>
                   <a href="https://github.com/pranab56/manufacturer-website-cline-site" target="_blank"><img className="w-8 h-8 mr-5 bg-white rounded-full" src={github} alt="" /></a>
                   </div>
                  <div className='grid grid-cols-2 mx-3 mt-6 gap-3'>
                    <p className='bg-gray-300 border-2 p-1'>react-tailwind</p>
                    <p className='bg-gray-300 border-2 p-1'>react-router-hooks</p>
                    <p className='bg-gray-300 border-2 p-1'>react-router</p>
                    <p className='bg-gray-300 border-2 p-1'>firebase</p>
                    <p className='bg-gray-300 border-2 p-1'>Daisy ui</p>
                    <p className='bg-gray-300 border-2 p-1'>react-query</p>
                  </div>
               </div>
               </div>
           </div>
           <div class="max-w-md mx-4 mx-auto overflow-hidden bg-slate-300 rounded-lg shadow-lg dark:bg-gray-800 mb-7">
               <div className='card-img'>
               <img class="object-fill" src={Project2Img} alt="avatar"/>
               </div>
               <div className='card-body'>
               <p className='font-serif ml-2 mt-2'><span className='font-bold'>Details : </span> With this, different types of fruits can be kept in stock and how much will be kept in stock can be easily calculated.</p>
               <div class="py-5 text-center">
                   <p class="block text-2xl font-bold text-gray-800 dark:text-white">Food Ware House</p>
                   <div className='flex justify-center gap-3 mt-3'>
                   <a href="https://ware-house-a4892.web.app/" target="_blank"><img className="w-8 h-8 mr-5 bg-white rounded-full" src={link} alt="" /></a>
                   <a href="https://github.com/pranab56/ware-house-management-cline-site-website" target="_blank"><img className="w-8 h-8 mr-5 bg-white rounded-full" src={github} alt="" /></a>
                   </div>
                  <div className='grid grid-cols-2 mx-3 mt-6 gap-3'>
                    <p className='bg-gray-300 border-2 p-1'>react-bootstrap</p>
                    <p className='bg-gray-300 border-2 p-1'>react-router-hooks</p>
                    <p className='bg-gray-300 border-2 p-1'>react-router</p>
                    <p className='bg-gray-300 border-2 p-1'>firebase</p>
                    <p className='bg-gray-300 border-2 p-1'>heroku</p>
                    
                  </div>
               </div>
               </div>
           </div>
           <div class="max-w-md mx-4 mx-auto overflow-hidden bg-slate-300 rounded-lg shadow-lg dark:bg-gray-800 mb-7">
              <div className='card-img'>
              <img class="object-fill" src={Project3Img} alt="avatar"/>
              </div>
              <div className='card-body'>
              <p className='font-serif ml-2 mt-2'><span className='font-bold'>Details : </span>A user will be able to easily booking website what kind of zym method to use </p>
               <div class="py-5 text-center">
                   <p class="block text-2xl font-bold text-gray-800 dark:text-white">Gym Trainer</p>
                   <div className='flex justify-center gap-3 mt-3'>
                   <a href="https://wedding-photographer-fef88.web.app/" target="_blank"><img className="w-8 h-8 mr-5 bg-white rounded-full" src={link} alt="" /></a>
                   <a href="https://github.com/pranab56/independent-service-provider-website" target="_blank"><img className="w-8 h-8 mr-5 bg-white rounded-full" src={github} alt="" /></a>
                   </div>
                  <div className='grid grid-cols-2 mx-3 mt-6 gap-3'>
                    <p className='bg-gray-300 border-2 p-1'>react-tailwind</p>
                    <p className='bg-gray-300 border-2 p-1'>react-router-hooks</p>
                    <p className='bg-gray-300 border-2 p-1'>react-router</p>
                    <p className='bg-gray-300 border-2 p-1'>firebase</p>
                    <p className='bg-gray-300 border-2 p-1'>Daisy ui</p>
                    <p className='bg-gray-300 border-2 p-1'>react-query</p>
                  </div>
               </div>
              </div>
           </div>
           </div>
               
             
        </div>
    );
};

export default Portfolio;