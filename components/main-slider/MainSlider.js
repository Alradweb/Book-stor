
import MySlider from "../slider/Slider"
import Conveyor from "../conveyor/Сonveyor"
import './main-slider.scss'


const MainSlider = ({items, portion, setIndex, changeAnimStatus, pause, toggleHover}) => {
    return (
        <div className='main-slider'>

            <MySlider items={items}
                      setIndex={setIndex}
                      changeAnimStatus={changeAnimStatus}
                      pause={pause}
            />
            <Conveyor portion={portion} toggleHover={toggleHover}/>
        </div>
    )
}

export default MainSlider