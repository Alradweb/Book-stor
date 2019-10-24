import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.min.css'
import config from 'react-reveal/globals'

import './index.scss'
import './page-layout.scss'
import Header from "../header/Header"
import {Container} from "reactstrap"
config({ ssrFadeout: true })

const PageLayout = props => {

    return (
        <div className="page-layout">
            <Head>
                <title>{props.title}</title>
            </Head>
            <Header device={props.device} />
            <main>
                <Container fluid>
                {props.children}
                </Container>
            </main>
        </div>
    )
}

export default PageLayout