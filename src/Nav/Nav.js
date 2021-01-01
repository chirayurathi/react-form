import React from 'react'
import Style from './Nav.module.css'

const Nav = ()=>{
    return(
    <nav className={Style.Nav}>
        <ul>
            <li>HOME</li>
            <li>
                <ul>
                    <li>Esowcarpet.com</li>
                    <li>Your Local Search Marketplace</li>
                </ul>
            </li>
            <li>REGISTRATION</li>
        </ul>
    </nav>
    )
}

export default Nav;