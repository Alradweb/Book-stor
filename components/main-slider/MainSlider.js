import {MediaConsumer} from '../../context/context'
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
            <MediaConsumer>
                {
                    (device)=>{
                        console.log('MainSlider--',device)
                        if(device === 'mobile') return null
                        return ( <Conveyor portion={portion} toggleHover={toggleHover}/>)
                    }
                }
            </MediaConsumer>
        </div>
    )
}

export default MainSlider