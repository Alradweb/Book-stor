import React from 'react'
import styles from './icons.module.scss'


const PlusIcon = () => {
    return (
        <svg className={styles.menu_svg_link} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="9.35" fill="transparent"/>
            <path
                  d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18.57A8.57,8.57,0,1,1,18.57,10,8.57,8.57,0,0,1,10,18.57Z" fill="white"/>
            <path
                  d="M15.12,8.93h-4v-4a.94.94,0,0,0-1-.95H9.88a.94.94,0,0,0-1,.95V8.93h-4a.94.94,0,0,0-.95,1v.24a.94.94,0,0,0,.95,1H8.93v4a.94.94,0,0,0,1,1h.24a.94.94,0,0,0,1-1v-4h4a.94.94,0,0,0,1-1V9.88A.94.94,0,0,0,15.12,8.93Z" fill="white"/>
        </svg>
    )
}
export default PlusIcon