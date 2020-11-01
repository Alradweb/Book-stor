import {Row, Col} from "reactstrap"
import MySlider from "../slider/Slider"
import Conveyor from "../conveyor/Сonveyor"
import styles from './main-slider.module.scss'


const MainSlider = ({currentTitle, items, portion, setIndex, changeAnimStatus, pause, toggleHover, device = 'desktop'}) => {
    const mySlider = (
        <MySlider items={items}
                  device={device}
                  setIndex={setIndex}
                  changeAnimStatus={changeAnimStatus}
                  pause={pause}
        />
    )
    if (device === 'tablet') return mySlider
    return (
        <Row className={styles.main_slider}>
            <Col xs={4}>
                {mySlider}
            </Col>
            <Col xs={8} className={styles.conveyor_col}>
                <Conveyor portion={portion} toggleHover={toggleHover} currentTitle={currentTitle}/>
            </Col>
        </Row>
    )
}

export default MainSlider