import React from "react";

const About = () => {
  return (
  <div>
    <h3 className="text-center text-5xl text-white font-bold mt-32" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">About Me</h3>
    <div className="bg-yellow-500 mt-3 mx-96 h-1 text-center" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"></div>
    
      <div id="about" className="lg:flex sm:block sm:ml-10 gap-16 lg:ml-16 mt-20" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
      <div className="text-white text-3xl font-bold lg:mb-0 sm:mb-10">_Myself</div>
      <div className="text-white lg:mt-0 sm:mt-10 lg:w-3/6 sm:w-52 text-justify">
        Hello! I’m Willium stephen a self-taught & award winning Digital
        Designer & Developer with over five years work experience. Love the Web
        and the work we do.I work closely with my clients to deliver the best
        possible solutions for their needs
      </div>
      <div className="text-white text-3xl font-bold">_Skills</div>
      <div className="text-white">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam. 
        <li>Web Designing -HTML/CSS</li>
         <li>Graphic Design - UI/UX</li>
         <li>Web Development - WORDPRESS/PHP </li>
         <li>Application Dev - ANDROID/ IOS</li>
      </div>
    </div>
  </div>
  );
};

export default About;
