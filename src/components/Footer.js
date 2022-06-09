import React from 'react';
import github from '../svg/github.svg';
import linkedin from '../svg/linkedin.svg';

const Footer = () => {
    return (
        <div className='flex justify-between mx-20 mt-52 pb-20 shadow-2xl'>
           <h2 className='text-white text-sm mt-6 text-yellow-500'>Protfolio © 2022 All Right Reserved .</h2>
           <div className='flex gap-10'>
           <span className='flex align-middle'>
           <img className="w-10 h-10 mr-5 bg-white rounded-full" src={github} alt="" />
           <a className='text-white hover:underline mt-3' href="https://github.com/pranab56" target="_blank">Go To Github</a>
           </span>
           <span className='flex align-middle'>
           <img className="w-10 h-10 mr-5 bg-white rounded-full" src={linkedin} alt="" />
           <a className='text-white hover:underline mt-3' href="https://www.linkedin.com/in/pranab-kumar/" target="_blank">Go To Github</a>
           </span>
           </div>
        </div>
    );
};

export default Footer;