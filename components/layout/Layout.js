import React from "react"
import config from 'react-reveal/globals'
import styles from './layout.module.scss'
import Header from "../header/Header"
import MyHead from "./MyHead"

config({ssrFadeout: true})

const Layout = props => {
    return (
        <>
            <MyHead title={props.title}/>
            <div className={styles.layout}>
                <Header device={props.device}/>
                <main>
                    <div className={styles.decoration_container} aria-hidden={'true'}>
                        <div className={styles.decoration}>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </div>

                    {props.children}

                </main>
            </div>
        </>
    )
}

export default Layout