import React from "react";
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import Shopify from '../../img/Shopify.png';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Works=()=>{
    const transition={duration:2,type:'spring'}
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="works">
            <div className="awesome">
                <span style={{color:darkMode? 'white': ''}}>Worked on all these</span>
                <span>Technologies</span>

                <spane>
                    Spring Data JPA
                    <br/>
                    Microservices
                    <br/>
                    Rest Apis
                    <br/>
                    Spring security & JWT
                    <br/>

                </spane>
                <button className="button s-button">Hire Me</button>
                <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
            </div>
            {/*right*/}
            <div className="w-right">
                <motion.div
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={transition}

                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>

                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
                
            </div>
        </div>
    )

}
export default Works