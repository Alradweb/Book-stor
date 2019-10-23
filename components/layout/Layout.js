import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.min.css'
import config from 'react-reveal/globals'

import './index.scss'
import './layout.scss'
import Header from "../header/Header"
import {Container} from "reactstrap"
config({ ssrFadeout: true })

const Layout = props => {
    const appTitle = `> BOOKSTORE`
    //console.log(props)
    return (
        <div className="layout">
            <Head>
                <title>{props.title}</title>
            </Head>
            <Header device={props.device} />
            <main>
                <div className='decoration-container' aria-hidden={'true'}>
                    <div className='decoration'>
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
    )
}

export default Layout