import React from "react";
import './Portfolio.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import Sidebar from '../../img/ecommerce.PNG';
import Ecommerce from '../../img/ecommerce2.PNG';
import Hoc from '../../img/employee.PNG';
import MusicApp from '../../img/profile.PNG';
import 'swiper/css';
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio=()=>{
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(
        <div className="portfolio" id="Portfolio">
            <span style={{color:darkMode? 'white': ''}}>Recent Projects</span>
            <span>Portfolio</span>
            <Swiper spaceBetween={10}slidesPerView={3} grabCursor={true} className="portfolio-slider">
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hoc} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default  Portfolio
