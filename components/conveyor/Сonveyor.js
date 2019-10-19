import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import './conveyor.scss'

const Conveyor = ({portion, toggleHover}) => {
    return (
        <div className='d-flex flex-column align-items-center' style={{height: '100%'}}>
            <div>
                <button className='btn btn-danger'>Подробнее</button>
            </div>
            <div className="conveyor">

                <Fade right>
                    <ul>
                        {portion.map(item => {
                            return (

                                <li key={item.id} onMouseEnter={() => toggleHover('mouseover')} onMouseLeave={() => toggleHover('mouseout')}>
                                    <Zoom right>
                                        <img src={item.src}/>
                                    </Zoom>
                                </li>

                            )
                        })}
                    </ul>
                </Fade>
            </div>
        </div>

    )
}
export default Conveyor