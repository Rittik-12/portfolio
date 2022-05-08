import React from "react";
import './Card.css';
import Humble from '../../img/humble.png';

const Card2=() =>{
    return (
        <div className="card">
            <img src={Humble} alt=""/>
            <p>DB & Deployment</p>
            <p>SQL, H2 DB, Git, AWS, Netlify</p>

        </div>
    );
}
export default Card2