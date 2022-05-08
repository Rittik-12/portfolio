import React from "react";
import './Card.css';
import HeartEmoji from '../../img/heartemoji.png';

const Card=() =>{
    return (
        <div className="card">
            <img src={HeartEmoji} alt=""/>
            <p>Backend</p>
            <p>Java, Hibernate, Maven, JDBC, Spring-boot</p>

        </div>
    );
}
export default Card