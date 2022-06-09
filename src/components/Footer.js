import React from 'react';
import github from '../svg/github.svg';
import linkedin from '../svg/linkedin.svg';

const Footer = () => {
    return (
        <div className='lg:flex sm:block justify-between mx-20 mt-52 pb-20 shadow-2xl'>
            <div className='flex lg:gap-10 sm:gap-5'>
           <span className='flex align-middle'>
           <img className="w-10 h-10 mr-5 bg-white rounded-full" src={github} alt="" />
           <a className='text-white hover:underline lg:mt-3 sm:mt-0' href="https://github.com/pranab56" target="_blank">Go To Github</a>
           </span>
           <span className='flex align-middle'>
           <img className="w-10 h-10 mr-5 bg-white rounded-full" src={linkedin} alt="" />
           <a className='text-white hover:underline lg:mt-3 sm:mt-0' href="https://www.linkedin.com/in/pranab-kumar/" target="_blank">Go To Github</a>
           </span>
           </div>
           <h2 className='text-white text-sm mt-6 text-yellow-500'>Protfolio © 2022 All Right Reserved .</h2>
           
        </div>
    );
};

export default Footer;