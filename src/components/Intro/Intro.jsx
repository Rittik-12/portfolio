import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll/modules";
const Intro =() =>{ 

    const transition={duration:2,type:'spring'}

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color:darkMode? 'white': ''}}>Hi! I Am</span>
                    <span>Rittik Sen</span>
                    <span>Full stack developer with intermediete level of experience 
                        in building and deploying production ready website</span>

                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button i-button" >Hire me</button>
                </Link>
                
                <div className="i-icons">
                    <a href="https://github.com/Rittik-12" target="_blank"  rel="noreferrer">
                    <img src={Github} alt=""/>
                    </a>
                    <a href="https://www.linkedin.com/in/rittik-sen-b623521bb/" target="_blank"  rel="noreferrer">
                    <img src={LinkedIn} alt=""/>
                    </a>
                    <a href="https://www.instagram.com/rittiksher/" target="_blank"  rel="noreferrer">
                    <img src={Instagram} alt=""/>
                    </a>
                    
                    
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt=""/>
                <img src={Vector2} alt=""/>
                <img src={boy} alt=""/>
                <motion.img
                    initial={{left:'-36%'}}
                    whileInView={{left:'-25%'}}
                    transition={transition}
                src={glassesimoji} alt=""/>
                <motion.div 
                    initial={{ top:'-4%', left:'74%'}}
                    whileInView={{left:'65%'}}
                    transition={transition}
                    className='floating-div'
                 style={{top:'-4%',left:'68%'}}>
                    <FloatingDiv image={Crown} txt1='Web'txt2 ='Developer'/>
                </motion.div>
                <div className="blur" style={{background:"rgb(238 210 255)"}}>
                    . 
                </div>
            </div>
        </div>
    );
}

export default Intro