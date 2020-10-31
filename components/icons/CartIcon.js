import styles from './icons.module.scss'
import React from "react";

const CartIcon = () => {
    return (
        <svg className={styles.menu_svg_link} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,23A11,11,0,1,1,23,12,11,11,0,0,1,12,23Z"/>
            <path
                d="M17.65,8c-3,0-5.93,0-8.89.12-1.14.05-1.83-.22-2.1-1.4a1.73,1.73,0,0,0-.18-.36,1,1,0,0,0-.93-.57c-.63,0-1.26,0-1.88,0a.88.88,0,0,0-.86,1,.87.87,0,0,0,.89.88,4,4,0,0,0,.85,0c.42-.05.63.1.81.51.86,2,1.75,4,2.65,5.93.08.18.26.86.4,1.39a.71.71,0,0,0,.75.52h0l8.66-1c1-.11,1.37-.57,1.37-1.58,0-1.31,0-2.63-.05-3.94C19.13,8.44,18.65,8,17.65,8ZM12,11.2l-.33-1.49a.29.29,0,0,1,.28-.36l2.23,0a.28.28,0,0,1,.29.29l0,1.34a.28.28,0,0,1-.26.3l-1.92.19A.3.3,0,0,1,12,11.2Zm2.52,1.35,0,1.3a.25.25,0,0,1-.21.25l-1.44.16a.25.25,0,0,1-.26-.19l-.29-1.3a.24.24,0,0,1,.21-.3l1.7-.16A.23.23,0,0,1,14.47,12.55Zm-5.72-1L8,9.76a.25.25,0,0,1,.21-.34l2,0a.24.24,0,0,1,.23.19l.38,1.72a.23.23,0,0,1-.2.29L9,11.74A.23.23,0,0,1,8.75,11.59Zm.78,1.16,1.38-.13a.22.22,0,0,1,.23.17l.3,1.38a.21.21,0,0,1-.18.26l-1.12.12a.2.2,0,0,1-.21-.13l-.57-1.37A.21.21,0,0,1,9.53,12.75Zm8,1-1.62.18a.23.23,0,0,1-.26-.24l0-1.28a.25.25,0,0,1,.22-.25L17.45,12a.24.24,0,0,1,.25.24l0,1.26A.24.24,0,0,1,17.52,13.74Zm-.07-2.81-1.59.16a.27.27,0,0,1-.28-.26l0-1.29a.27.27,0,0,1,.25-.27l1.59,0a.26.26,0,0,1,.25.26l0,1.17A.24.24,0,0,1,17.45,10.93Z"
                fill="inherit"/>
            <path
                d="M16.4,15.6a2,2,0,1,0,2,2A2,2,0,0,0,16.4,15.6Zm0,3.13h0a1,1,0,0,1-.77-.29,1.09,1.09,0,0,1-.3-.82,1,1,0,0,1,1-1.08h0a1.1,1.1,0,0,1,1.06,1.09A1.05,1.05,0,0,1,16.44,18.73Z"
                fill="inherit"/>
            <path
                d="M11,16.15a2,2,0,1,0,2,2A2,2,0,0,0,11,16.15Zm0,3.13h0a1,1,0,0,1-.77-.29,1.15,1.15,0,0,1-.3-.82,1,1,0,0,1,1-1.08h0A1.1,1.1,0,0,1,12,18.17,1.05,1.05,0,0,1,11,19.28Z"
                fill="inherit"/>
        </svg>
    )
}
export default CartIcon