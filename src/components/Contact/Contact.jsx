import React, { useRef, useState } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [done,setDone]= useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6nnabhj', 'template_1525pd4', form.current, 'bej7WCzez5IXq_eo4')
          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
      };



  return (
    <div className='contact-form' id='Contact'>
        <div className='w-left'>
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact Me</span>
                <div className="blur s.blurl" style={{background:"ABF1FF94"}}></div>

            </div>
        </div>
        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Name'/>
                <input type="email" name="user_email" className='user' placeholder='Email Id'/>
                <textarea name='message' className='user' placeholder='Message'/>
                <input type="submit" value="Send" className='button' />
                <span>{done && "Thanks for connecting"}</span>

                <div className='blur c-blurl' style={{background:"var(--purple)"}}>
                    
                </div>

            </form>    
        </div>  
    </div>
  )
}

export default Contact 