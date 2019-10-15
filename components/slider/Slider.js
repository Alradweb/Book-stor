import {
    Carousel,
    CarouselItem,
    CarouselCaption
} from 'reactstrap'
import Fade from 'react-reveal/Fade'
//import {UserAgent} from '@quentin-sommer/react-useragent'
import './slider.scss'


class MySlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            // pause: 'mouseout'
        }
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.goToIndex = this.goToIndex.bind(this)
        this.onExiting = this.onExiting.bind(this)
        this.onExited = this.onExited.bind(this)
        this.sliderRef = React.createRef()
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

    triggerHover =(ev) =>{

        const event = new MouseEvent(ev, {
            view: window,
            bubbles: true
        })
        //console.log(this.sliderRef.current)
        this.sliderRef.current.dispatchEvent(event)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pause !== this.props.pause) {
            this.triggerHover(this.props.pause)
            //console.log(this.props.pause, prevProps.pause)
        }
    }
    render() {
        const {activeIndex} = this.state
        const slides = this.props.items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.id}
                >
                    <div className='image-container' ref={this.sliderRef} >
                        <Fade right>
                            <img src={item.src} alt={item.title} className='image'/>
                        </Fade>
                    </div>
                    <CarouselCaption captionText={''} captionHeader={''}/>
                </CarouselItem>
            )
        })

        return (
            <>
                <div className='hren'>
                    <div className='phone' >
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
                {/*<button onClick={() =>this.triggerHover('mouseover')} ref={this.mouseOverBtn}>TRIGGER</button>*/}
                {/*<button onClick={() =>this.triggerHover('mouseout')}>END</button>*/}
            </>
        )
    }
}


export default MySlider






