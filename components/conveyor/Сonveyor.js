import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Link from "next/link"
import styles from './conveyor.module.scss'

const Conveyor = (props) => {
    const {portion, toggleHover, currentItem} = props
    return (
        <div className='d-flex flex-column align-items-center' style={{height: '100%'}}>
            <div>
                <Link href="/book/[title]" as={`/book/${currentItem}`} >
                    <a className='btn btn-danger'>Подробнее</a>
                </Link>
            </div>
            <div className={styles.conveyor}>
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