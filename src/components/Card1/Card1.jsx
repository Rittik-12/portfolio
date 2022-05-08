import React from "react";
import './Card.css';
import Glasses from '../../img/glasses.png';

const Card1=() =>{
    return (
        <div className="card">
            <img src={Glasses} alt=""/>
            <p>Frontend</p>
            <p>HTML, CSS, Bootstrap, React, Angular</p>

        </div>
    );
}
export default Card1