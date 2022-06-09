import React from 'react';
import image from '../pronab-kumar.png';
import Typed from 'react-typed';
const banner = () => {
    return (
        <div>
            <div class="hero min-h-screen">
  <div class="lg:hero-content sm:block">
    <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
    <div className='lg:ml-10 sm:ml-0 lg:mt-0 sm:mt-10'>
      <h1 class="text-4xl text-white font-serif">Hello,</h1>
      <h1 class="text-5xl text-white font-mono">I Am Pranab Kumar</h1>
      <h1 class="text-4xl text-yellow-300 font-serif">
      <Typed
                strings={[
                    'Web developer!',
                    'Mern Stack Developer!',
                    ]}
                    typeSpeed={50}
                    backSpeed={50}
                  
                    loop >
                    
                </Typed>
      </h1>
      <p class="my-5 text-white">Lorem ipsum dolor sit amet consectetur,i am a student web developer</p>
        
      <button class="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-yellow-500 hover:text-gray-800 font-medium text-white">
        <a href="https://drive.google.com/uc?export=download&id=1jGcU03LHyfdfaDF3xy9CmH7aLxEnkK2s">
        Download resume
        </a>
            </button> 
    </div>
  </div>
</div>
        </div>
    );
};

export default banner;