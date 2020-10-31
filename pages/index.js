import styles from './main-page.module.scss'
import {Container, Row, Col} from 'reactstrap'
import Layout from "../components/layout/Layout"
import GetNow from "../components/get-now/GetNow"
import {MediaProvider} from '../context/media'
import Description from "../components/description/Description"
import items from '../data'
import { providers } from 'next-auth/client'


class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            animStatus: true,
            pause: 'mouseout',
            device: 'desktop',
            orientation: 'landscape',
            deviceWidth: 300,
            deviceHeight: 400,
            hydrationComplete: false
        }
    }

    static async getInitialProps(context) {
        const x = await providers(context)
        const {req} = context
        let device
        if (typeof window === 'undefined') {
            const parser = eval("require('ua-parser-js')")  // prevent downloading on the client
            const userAgent = req ? req.headers['user-agent'] : null
            device = parser(userAgent).device.type || 'desktop'
            console.log(`YES isServer, ${device}`)
        } else {

        }

        return {
            //shows: data.map(entry => entry.show),
            device,
            authProvider : x
        }
    }

    componentDidMount() {
        const {device, orientation, deviceWidth, deviceHeight} = this.setDeviceType()
        window.addEventListener('resize', this.onResize)
        this.setState({
            hydrationComplete: true,
            device,
            orientation,
            deviceWidth,
            deviceHeight
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    setDeviceType = () => {
        const screenOrientation = () => {
            const orientation = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type
            const landscape = orientation === 'landscape-primary' || orientation === 'landscape-secondary'
            if (landscape) return 'landscape'
            return 'portrait'
        }
        const width = document.documentElement.clientWidth
        const height = document.documentElement.clientHeight
        const checkSize = width => {
            if (width < 768) return 'mobile'
            if (width >= 768 && width < 992) return 'tablet'
            return 'desktop'
        }
        return {
            device: checkSize(width),
            orientation: screenOrientation(),
            deviceWidth: width,
            deviceHeight: height
        }
    }
    onResize = () => {
        setTimeout(() => {
            const {device, orientation, deviceWidth, deviceHeight} = this.setDeviceType()
            if (this.state.device === device && this.state.orientation === orientation) return
            this.setState({
                device,
                orientation,
                deviceWidth,
                deviceHeight
            })
        }, 0)
    }
    setIndex = (index) => {
        this.setState({
            index
        })
    }
    changeAnimStatus = status => {
        this.setState({
            animStatus: status
        })
    }
    getCurrentProduct = () => items[this.state.index]
    getPortion = () => {
        //console.log('this.props.device-',this.props.device)
        const quantity = 4
        const {length} = items
        const boundary = length - quantity
        if (boundary <= this.state.index) {
            const latest = items.slice(this.state.index + 1)
            if (latest.length === quantity) return latest
            if (!latest.length) return items.slice(0, quantity)
            const addItems = items.slice(0, quantity - latest.length)
            return [...latest, ...addItems]
        }
        return items.slice(this.state.index + 1, this.state.index + quantity + 1)
    }
    toggleHover = hover => {
        if (this.state.pause === hover) return
        this.setState(state => {
            return {
                pause: hover
            }
        })
    }

    render() {

        const {getCurrentProduct, setIndex, getPortion, changeAnimStatus, toggleHover} = this
        const {hydrationComplete, animStatus, pause, orientation, deviceWidth, deviceHeight} = this.state
        const {title, description, publicationDate, price, titleToLatin} = getCurrentProduct()
        const device = hydrationComplete ? this.state.device : this.props.device
        const desktopContent = device === 'desktop'
        const portraitSmallDevice = !desktopContent && orientation === 'portrait'
        const descriptionComponent = (
            <Description
                description={description}
                title={title}
                publicationDate={publicationDate}
                items={items}
                setIndex={setIndex}
                portion={getPortion()}
                changeAnimStatus={changeAnimStatus}
                pause={pause}
                toggleHover={toggleHover}
                orientation={orientation}
                price={price}
                animStatus={animStatus}
                currentItem={titleToLatin}
            />
        )
        const getNowComponent = (
            <GetNow item={items[this.state.index]} dev={device} price={price} toggleHover={toggleHover} animStatus={animStatus} title={title}/>
        )
        return (
            <MediaProvider value={{device, orientation, deviceWidth, deviceHeight}}>
                <Layout title='Main page' device={device} authProvider={this.props.authProvider}>
                    <Container fluid className={styles.main_wrapper}>
                        <Row className={portraitSmallDevice ? styles.portrait_row : styles.main_row}>
                            {
                                desktopContent ? (
                                    <>
                                        <Col xs={12} sm={12} md={12} lg={6}
                                             className='d-flex justify-content-around'>
                                            {getNowComponent}
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={6}>
                                            {descriptionComponent}
                                        </Col>
                                    </>
                                ) : (
                                   <>
                                        {descriptionComponent}
                                  </>
                                )
                            }
                        </Row>
                    </Container>
                </Layout>
            </MediaProvider>
        )

    }
}

export default Index