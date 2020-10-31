import {
    Carousel,
    CarouselItem
} from 'reactstrap'
import Fade from 'react-reveal/Fade'
import styles from './slider.module.scss'


class MySlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.goToIndex = this.goToIndex.bind(this)
        this.onExiting = this.onExiting.bind(this)
        this.onExited = this.onExited.bind(this)
        this.sliderRef = React.createRef()
    }

    changeDeviceSize = ({deviceWidth = 300, deviceHeight = 400}) =>{
        const width = deviceWidth - 30
        const availableHeight = deviceHeight - 64
        let height = width * 1.625
        if(height > availableHeight) height = availableHeight
        return {
            deviceWidth : width,
            deviceHeight : height
        }
    }
    onExiting() {
        this.animating = true
        this.props.changeAnimStatus(!!this.animating)
        this.props.setIndex(this.state.activeIndex)
    }

    onExited() {
        this.animating = false
    }

    next() {
        if (this.animating) return
        this.props.changeAnimStatus(!!this.animating)
        const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1
        this.setState({activeIndex: nextIndex})
    }

    previous() {
        if (this.animating) return
        const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1
        this.setState({activeIndex: nextIndex})
    }

    goToIndex(newIndex) {
        if (this.animating) return
        this.setState({activeIndex: newIndex})
    }

    triggerHover = ev =>{
        const event = new MouseEvent(ev, {
            view: window,
            bubbles: true
        })
        this.sliderRef.current.dispatchEvent(event)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pause !== this.props.pause) {
            this.triggerHover(this.props.pause)
        }
    }
    render() {
        const {activeIndex} = this.state
        const {deviceWidth, deviceHeight} = this.changeDeviceSize(this.props)
        const slides = this.props.items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.id}
                >
                    <div className={this.props.fullSize ? styles.image_container_full : styles.image_container} ref={this.sliderRef} >
                        <Fade right>
                            <img src={item.src}
                                 alt={item.title}
                                 className={styles.image}
                                 width={deviceWidth}
                                 height={deviceHeight} />
                        </Fade>
                        {this.props.children}
                    </div>
                </CarouselItem>
            )
        })
        if(this.props.fullSize){
            return (
                <Carousel
                    ride={'carousel'}
                    keyboard={false}
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    interval={2000}
                >
                    {slides}
                </Carousel>
            )
        }
        return (
            <>
                <div className={styles.phone_decoration}>
                    <div className={styles.phone} >
                        <Carousel
                            ride={'carousel'}
                            keyboard={false}
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                            interval={2000}
                        >
                            {slides}
                        </Carousel>
                    </div>
                </div>
            </>
        )
    }
}


export default MySlider






