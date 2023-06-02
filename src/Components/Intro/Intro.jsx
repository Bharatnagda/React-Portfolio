import React from 'react';
import './Intro.css';
import Floatingdiv from '../Floatingdiv/Floatingdiv';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';
import instagram from '../../img/instagram.png';
import hero from '../../img/image-hero.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import Crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';
import glasses from '../../img/glassesimoji.png';
import {motion} from 'framer-motion';
const Intro = () => {

  const transition = {duration:2,type:'spring'};
  return (
    <div className='i-intro'>
        <div className="i-left">
            <div className="i-name">
            <span>Hey! I Am</span>
            <span>Bharat Nagda</span>
            <span>Frontend Developer with the Skills of HTML5, CSS3 and Javascript also well-versed with the Jquery,Bootstrap & SCSS</span>
            </div>
            <div className="button i-button">Hire Me</div>
            <div className="i-icons">
               <a href="#"> <img src={linkedin} alt="linkedin" /></a>
                <a href="#"><img src={github} alt="github" /></a>
                <a href="#"><img src={instagram} alt="instagram" /></a>
            </div>
        </div>
        <div className="i-right">
           <img src={vector1} alt="" />
           <img src={vector2} alt="" />
           <img src={boy} alt="" />
           <motion.img
           initial={{left:'-36%'}}
           whileInView={{left:'-24%'}}
           transition={transition}

           src={glasses} alt="" />
           <motion.div
           initial={{left:'78%'}}
           whileInView={{left:'68%'}}
           transition={transition}

            style={{top:'-4%',left:'68%'}}
            className='floating-div'
            >
            <Floatingdiv image={Crown} txt1='Web' txt2='Developer'  />
           </motion.div>
           <motion.div
           initial={{left:'-28%'}}
           whileInView={{left:'0%'}}
           transition={transition}

           style={{top:'94%',left:'-7%'}}
           className='floating-div'
           >
            <Floatingdiv image={thumbup} txt1='Best Design' txt2='Award' />
           </motion.div>
           <div className="blur" style={{background:"rgb(238 210 255)"}}
           
           >
           
           </div>
           <div className="blur" style={{background:'#C1F5FF',top:'17rem',left:'-9rem',width:'21rem',height:'11rem'}}></div>
        </div>
    </div>
  )
}

export default Intro