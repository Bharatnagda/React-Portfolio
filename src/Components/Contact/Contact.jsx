import React, { useState } from 'react'
import './Contact.css'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [done,setDone] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_tom7a4p', 'template_ux6wzwh', form.current, 'wLeGZEPq6Ab-RKCl5')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
   <div className="contact-form" id='Contact'>
    <div className="left-service">
        <span>Get in Touch</span>
        <span>Contact Me</span>
        
        <div className="blur" style={{background:'#C1F5FF',top:'10rem',left:'0',width:'21rem',height:'11rem'}}></div>
        <div className="blur" style={{background:"rgb(238 210 255)",top:'5rem',left:'35rem'}}></div>
    </div>
    <div className="c-right">
            <form ref={form} onSubmit={sendEmail} action="">
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
    <textarea name="message" className='user' placeholder='Message' />
    <input type="submit" value="send"className='button' />
    <span className='response'>{done && "Thanks for Contacting Me"}</span>
            </form>
        </div>
   </div>
  )
}

export default Contact