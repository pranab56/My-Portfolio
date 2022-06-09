import React from 'react';
import CountUp from 'react-countup'; 

const Expertice = () => {
    return (
    <div>
        <h1 className='text-white font-bold text-5xl text-center mb-32 mt-52'>Expertise</h1>
        
        <div  className='grid sm:grid-cols-1 lg:grid-cols-2  lg:ml-32 sm:ml-5' >
           <div className='mb-20'>
           <div className='flex'>
            <h2 className='text-white text-5xl font-sans'><CountUp duration={5} end={80}></CountUp>%</h2>
            <p className='text-white text-2xl font-serif ml-52'>Html/Css</p>
            </div>
            <progress class="progress progress-warning max-w-md" value="80" max="100"></progress>
           </div>
           <div className='mb-20'>
           <div className='flex'>
            <h2 className='text-white text-5xl font-sans'><CountUp duration={5} end={90}></CountUp>%</h2>
            <p className='text-white text-2xl font-serif ml-52'>Tailwind</p>
            </div>
            <progress class="progress progress-warning max-w-md" value="90" max="100"></progress>
           </div>
           <div className='mb-20'>
           <div className='flex'>
            <h2 className='text-white text-5xl font-sans'><CountUp duration={5} end={70}></CountUp>%</h2>
            <p className='text-white text-2xl font-serif ml-52'>Javascript</p>
            </div>
            <progress class="progress progress-warning max-w-md" value="70" max="100"></progress>
           </div>
           <div className='mb-20'>
           <div className='flex'>
            <h2 className='text-white text-5xl font-sans'><CountUp duration={5} end={75}></CountUp>%</h2>
            <p className='text-white text-2xl font-serif ml-52'>React</p>
            </div>
            <progress class="progress progress-warning max-w-md" value="75" max="100"></progress>
           </div>
           <div>
           <div className='flex'>
            <h2 className='text-white text-5xl font-sans'><CountUp duration={5} end={75}></CountUp>%</h2>
            <p className='text-white text-2xl font-serif ml-52'>Firebase</p>
            </div>
            <progress class="progress progress-warning max-w-md" value="75" max="100"></progress>
           </div>
           <div className='mb-20'>
           <div className='flex'>
            <h2 className='text-white text-5xl font-sans'><CountUp duration={5} end={80}></CountUp>%</h2>
            <p className='text-white text-2xl font-serif ml-52'>Express JS</p>
            </div>
            <progress class="progress progress-warning max-w-md" value="80" max="100"></progress>
           </div>
        </div>
    </div>
    );
};

export default Expertice;