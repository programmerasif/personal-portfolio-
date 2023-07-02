import { useRef, useState} from "react";

import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [isComplite,setComplite] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rjlf1w7', 'template_wswdvfw', form.current, 'B1wVQKVtIspgLa0yi')
      .then((result) => {
          console.log(result.text);
          setComplite(true)
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  
    return (
      <form ref={form} onSubmit={sendEmail} className="w-full md:w-[60%] mx-auto text-black">
        <input placeholder="Write your name" name="name" className="w-full mb-4 px-4 py-2 rounded-md border border-sky-500"/>
        <input  placeholder="Enter your email" name="email" className="w-full mb-4 px-4 py-2 rounded-md border border-sky-500"/>
        
        <textarea  placeholder="Type your message" name="message" className="w-full mb-4 px-4 py-2 rounded-md border border-sky-500"/>
        <input disabled={isComplite} type="Submit" value='Send' className="w-full px-4 py-2 text-white rounded-md border border-sky-200 bg-[#67DB00] hover:bg-[#66db00a7] border-none duration-300"/>
      </form>
    );
  }

export default Form;