import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import './conveyor.scss'

const Conveyor = ({portion, toggleHover}) => {
    return (
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
    )
}
export default Conveyor