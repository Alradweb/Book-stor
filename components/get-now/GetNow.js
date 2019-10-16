import Ruble from "../icons/Ruble"
import './get-now.scss'
import CheckMark from "../icons/CheckMark"
import Zoom from "react-reveal/Zoom"

const GetNow = ({toggleHover, animStatus, price, dev}) => {

    return (
        <div className='get-now-container ' onMouseEnter={() => toggleHover('mouseover')} onMouseLeave={() => toggleHover('mouseout')}>
            <p className='get-now-profit'><CheckMark/>Выгодное предложение</p>
            <p className='get-now-profit'><CheckMark/>Выгодное предложение</p>
            <Zoom when={animStatus}>
                <button className='btn btn-danger get-now-btn'>КУПИТЬ СЕЙЧАС</button>
                <div className='get-now-price'>
                    <p className='price price-new'>
                        <Ruble/>
                        {price}
                    </p>
                    <p className='price price-old'>
                        <Ruble/>
                        {Math.ceil(price * 1.5)}
                    </p>
                </div>
            </Zoom>
        </div>
    )
}

export default GetNow