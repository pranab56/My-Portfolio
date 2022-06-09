import React from 'react';
import image from '../pronab-kumar.png';
import Typed from 'react-typed';
const banner = () => {
    return (
        <div>
            <div class="hero mt-10">
  <div class="lg:hero-content sm:block">
    <img src={image} class="max-w-sm rounded-lg shadow-2xl" data-aos="fade-right" />
    <div className='lg:ml-10 sm:ml-0 lg:mt-0 sm:mt-10' data-aos="fade-left">
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
      <p class="my-5 text-white lg:max-w-lg">I'm pranab kumar, a highly skilled developer with strong confidence with quality and high performance web applications seeks the rules of Junior Software Developer at Javascript, React, Express JS and modern Javascript libraries</p>
        
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