import React from 'react'
import styles from './icons.module.scss'


const MinusIcon = () => {
    return (
        <svg className={styles.menu_svg_link} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="9.35" fill="transparent"/>
            <path
                  d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18.57A8.57,8.57,0,1,1,18.57,10,8.57,8.57,0,0,1,10,18.57Z" fill="white"/>
            <rect x="3.93" y="8.93" width="12.14" height="2.14" rx="0.95" fill="white"/>
        </svg>
    )
}
export default MinusIcon