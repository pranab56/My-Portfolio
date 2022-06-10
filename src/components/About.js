import React from "react";

const About = () => {
  return (
  <div className="mx-5">
    <h3 className="text-center text-5xl text-white font-bold mt-32" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">About Me</h3>
    
      <div id="about" className="lg:flex sm:block sm:ml-10 gap-16 lg:ml-16 mt-20" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
      <div className="text-white text-3xl font-bold lg:mb-0 sm:mb-10 pb-7">_Myself</div>
      <div className="text-white lg:mt-0 sm:mt-10 lg:w-3/6 sm:w-52 text-justify pb-7">
      I am a MERN stack web developer working with 6 months of learning experience. If you need any kind of web solution then you are welcome and I am here to solve this. I know web technologies and comfortable with working with these tools. I have done various projects in front-end development.I have comprehensive knowledge in programming including HTML, CSS,Bootstrap, Tailwind CSS, JavaScript, ReactJs, NodeJs, MongoDB, Express-JS Hands-on experience.

      </div>
      <div className="text-white text-3xl font-bold pb-7">_Skills</div>
      <div className="text-white">
      I am working as a web developer. I love this job. My dream is to become a developer . I am interested in working as a web developer .
        <li>Web Designing -HTML/CSS</li>
         <li>tailwind</li>
         <li>Javascript</li>
         <li>mongoDB</li>
         <li>React </li>
         <li>Firebase</li>
         <li>Express</li>
      </div>
    </div>
  </div>
  );
};

export default About;
