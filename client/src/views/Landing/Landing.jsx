import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";


const Landing  = ()=> {
    
    return(
        <div className={style.Landing}>
            <div>
                <h1 >Welcome to Pokemon Proyect</h1>
            </div>
            <div>
            <p><Link to='/home'>Start</Link></p>
            </div>
        </div>
    )
}

export default Landing;
