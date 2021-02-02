import React, { useState } from 'react'
import Style from './Nav.module.css'
import {NavLink} from 'react-router-dom'
const Nav = ()=>{
    const [ham,setHam] = useState(false)

    return(
    <nav className={Style.Nav}>
        <ul className={Style.Desk}>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/">Esowcarpet</NavLink></li>
            <li><NavLink to="/registration">REGISTRATION</NavLink></li>
        </ul>
        <ul className={Style.Mobile}>
        <li><NavLink onClick={()=>{return ham===true?setHam(!ham):false}} to="/">Esowcarpet</NavLink></li>
            <li>
                <div className={Style.Ham} onClick={()=>{setHam(!ham)}}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={ham?Style.Active:Style.Slide}>
                    <li><NavLink onClick={()=>{setHam(!ham)}} to="/">HOME</NavLink></li>
                    <li><NavLink onClick={()=>{setHam(!ham)}} to="/registration">REGISTRATION</NavLink></li>
                </ul>
            </li>
        </ul>
    </nav>

    )
}

export default Nav;