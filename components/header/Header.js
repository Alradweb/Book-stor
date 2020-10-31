import styles from "./header.module.scss"
import React from 'react'
import Link from "next/link"
import Logo from "../logo/Logo"
import NavBar from "../nav-bar/NavBar"
import Sign from "../sign/Sign";
// "next": "^9.5.0", Было--->   "next": "9.0.8-canary.4",
const Header = props => {
    return (
        <header className={styles.header}>
            <NavBar>
                <Sign/>
                <Link href="/">
                    <a>
                        <Logo device={props.device}/>
                    </a>
                </Link>
            </NavBar>
        </header>
    )
}

export default Header