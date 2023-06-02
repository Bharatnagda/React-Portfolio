import React from 'react'
import './Service.css';
import Heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import resume from './Resume.pdf';
import {motion} from 'framer-motion';
const Service = () => {

    const transition = {duration:2,type:'spring'};

  return (

        <div className="service" id='Services'>
            <div className="left-service">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, soluta quod. <br /> Non nostrum illum voluptas?</span>
                <a style={{textDecoration:'none'}} href={resume} download><div className="button s-button">Download CV</div></a>
                <div className="blur" style={{background:'#C1F5FF',top:'10rem',left:'0',width:'21rem',height:'11rem'}}></div>
                <div className="blur" style={{background:"rgb(238 210 255)",top:'5rem',left:'35rem'}}></div>
            </div>
            <div className="right-service">
                {/* first card */}
               <motion.div
               initial={{left:'25%'}}
               whileInView={{left:'14rem'}}
               transition={transition}
               
               style={{left:'14rem'}}>
               <Card
               emoji = {Glasses}
               heading = {'Front-End'}
               detail = {"HTML5, CSS3,JavaScript,Jquery"}
               />
               </motion.div>
               {/* second card */}
               <motion.div
               initial={{left:'15%'}}
               whileInView={{left:'-4rem'}}
               transition={transition}
               
               style={{top:'12rem',left:'-4rem'}}>
               <Card
               emoji = {Heartemoji}
               heading = {'Back-End'}
               detail = {"Core PHP, CodeIgniter,C,C++"}
               />
               </motion.div>
               {/* third card */}
               <motion.div
               initial={{left:'24%'}}
               whileInView={{left:'14rem'}}
               transition={transition}
               
               style={{top:'19rem',left:'14rem'}}>
               <Card
               emoji = {Humble}
               heading = {'Other Tech'}
               detail = {"MySql, Github, Bootstrap, SCSS"}
               />
               </motion.div>
            </div>

        </div>
  
  )
}

export default Service