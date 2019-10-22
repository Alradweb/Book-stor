//import {MediaConsumer} from '../../context/context'
import MySlider from "../slider/Slider"
import Conveyor from "../conveyor/Сonveyor"
import './main-slider.scss'
import {Row, Col} from "reactstrap"


const MainSlider = ({items, portion, setIndex, changeAnimStatus, pause, toggleHover, device = 'desktop'}) => {
    if (device === 'tablet') {
        return (
            <MySlider items={items}
                      device={device}
                      setIndex={setIndex}
                      changeAnimStatus={changeAnimStatus}
                      pause={pause}
            />
        )
    }
    return (
        <Row className='main-slider'>
            <Col xs={4}>
                <MySlider items={items}
                          setIndex={setIndex}
                          changeAnimStatus={changeAnimStatus}
                          pause={pause}
                />
            </Col>
            <Col xs={8} className='conveyor-col'>
                <Conveyor portion={portion} toggleHover={toggleHover}/>
            </Col>
        </Row>
    )
}

export default MainSlider