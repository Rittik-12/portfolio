import React from "react";
import './Services.css';
import Card from '../Card/Card.jsx'
import Card1 from "../Card1/Card1";
import Card2 from "../Card2/Card2";

import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Services=()=>{
    const transition={duration:2,type:'spring'}
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="services" id="Services">

            <div className="container">

                <div className="awesome">
                    <span style={{color:darkMode? 'white': ''}}> My </span>
                    <span>Services</span>
                    <span>tagline any what so ever</span>

                    <a href='https://drive.google.com/file/d/1r6PQT-4-plfuThtbRWrHTNnG0PvmxJID/view?usp=sharing'  target="_blank"  rel="noreferrer">
                    <button className="button s-button">Download Resume</button>
                    </a>
                    <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
                </div>
            </div>
            <div className="container2">
                <div className="cards">
                    <motion.div 
                    initial={{left:'25rem'}}
                    whileInView={{left:'14rem'}}
                    transition={transition}
                    style={{left:'14rem'}}>
                   
                        <Card/>
                        <div className="blur s-blur" style={{background:"#BAF1FF94"}}></div>
                    </motion.div>
                    
                    <motion.div
                    initial={{left:'-15rem'}}
                    whileInView={{left:'-4rem'}}
                    transition={transition}
                    style={{top:"12rem", left:"-4rem"}}>
                    
                        <Card1/>  
                    </motion.div>
                    
                    <motion.div
                    className="db"
                    initial={{top:'30rem'}}
                    whileInView={{top:'19rem'}}
                    transition={transition}
                    style={{top:"19rem",left:"12rem"}}>
                    
                        <Card2/>
                        
                    </motion.div>
                    
                </div>
            </div>
            

        </div>
    )
}
export default Services