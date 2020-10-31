import React from 'react'
import config from 'react-reveal/globals'
import styles from './page-layout.module.scss'
import Header from "../header/Header"
import {Container} from "reactstrap"
import MyHead from "./MyHead";

config({ssrFadeout: true})

const PageLayout = props => {

    return (
        <>
            <MyHead title={props.title}/>
            <div className={styles.page}>
                <Header device={props.device}/>
                <main>
                    <Container fluid>
                        {props.children}
                    </Container>
                </main>
            </div>
        </>
    )
}

export default PageLayout