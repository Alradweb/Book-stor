import React from 'react'
import Link from "next/link"
import Logo from "../logo/Logo"
import NavBar from "../nav-bar/NavBar"
import Sign from "../sign/Sign"
import styles from "./header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <NavBar>
                <Sign/>
                <Link href="/">
                    <a>
                        <Logo/>
                    </a>
                </Link>
            </NavBar>
        </header>
    )
}

export default Header