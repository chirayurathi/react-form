import React from 'react'
import Style from './HomePage.module.css'
import Img from '../Assets/download.jfif'
const HomePage = ()=>{
    return(
        <div style={{backgroundImage:`url(${Img})`}} className={Style.HomePage}>
            <div className={Style.Text}>
                <p>Coming</p>
                <p>Soon.</p>
            </div>
            <div className={Style.Bottom}>This site is maintianed by AK developers.</div>
        </div>
    )
}

export default HomePage
