import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
const Contact = () => {
    const handleSubmit=e=>{
        e.preventDefault()
        emailjs.sendForm('service_rhy2vsd','template_zicz47a',e.target,'59-_-ju4DmbIQjmL2')
        .then(res=>{
           if(res){
            swal({
                title: "Thank You",
                icon: "success",
                button: "OK",
              
              });
           }
           else{
            swal({
                title: "Thank You",
                icon: "warning",
                button: "OK",
              
              });
           }
    
        })
    }
    return (
     <div id='contact'>
            
   
            <section class="w-full max-w-2xl px-6 py-4 mx-auto rounded-md mt-32 shadow-2xl shadow-md dark:bg-gray-800">
        <h2 class="text-5xl mt-6 mb-10 font-semibold text-center dark:text-white text-white" data-aos="fade-up">Get in touch</h2>
       
        
        
       <form onSubmit={handleSubmit} data-aos="fade-up">
       <div class="mt-6 ">
            <div class="items-center -mx-2 md:flex">
                <div class="w-full mx-2">
               

                    <input placeholder='Your Name' className='outline-none border-t-0 w-64 mb-10 p-3 name' name='name' type="text" required/>
                </div>

                <div class="w-full mx-2 mt-4 md:mt-0">
                 

                    <input placeholder='Your Email' className='outline-none border-t-0 w-64 mb-10 p-3 name' name='email' type="email" required/>
                </div>
            </div>

            <div class="w-full mt-4">
                

                <textarea placeholder='Your Message' name='message' class="block w-full h-40 px-4 py-2 outline-none name resize-none"></textarea>
            </div>

            <div class="flex justify-center mt-6">
                <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-yellow-600 focus:outline-none">Send Message</button>
            </div>
        </div>
       </form>
    </section>
     </div>
        
    );
};

export default Contact;