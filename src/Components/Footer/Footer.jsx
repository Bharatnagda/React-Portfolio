import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
const Footer = () => {
  return (
   <div className="footer">
    <img src={wave} alt="" style={{width:'100%'}}/>
    <div className="f-content">
        <span>Bharat.nagda94@gmail.com</span>
        <div className="f-icons">
            <Insta size='3rem'/>
            <Linkedin size='3rem'/>
            <Github size='3rem'/>
        </div>
    </div>
   </div>
  )
}

export default Footer