import React, {useContext} from 'react'
import Ruble from "../icons/Ruble"
import styles from './get-now.module.scss'
import CheckMark from "../icons/CheckMark"
import Zoom from "react-reveal/Zoom"
import {CartContext} from "../../context/CartContext"

const GetNow = ({toggleHover, animStatus, portrait, item}) => {
    const { addBook } = useContext(CartContext)
    const classes = []
    classes.push(styles.get_now_container)
    if (portrait) classes.push(styles.get_now_portrait)

    return (
        <div className={classes.join(' ')} onMouseEnter={() => toggleHover('mouseover')}
             onMouseLeave={() => toggleHover('mouseout')}>
            <Zoom when={animStatus}>
            <p className={styles.get_now_profit}>{item.title}</p>
            </Zoom>
            <p className={styles.get_now_profit}><CheckMark/>Выгодное предложение</p>
            <button onClick={()=>addBook(item)} className={`btn btn-danger ${styles.get_now_btn}`}>КУПИТЬ СЕЙЧАС</button>
            <div className={styles.get_now_price}>
                <Zoom when={animStatus}>
                    <p className={styles.price_new}>
                        <Ruble/>
                        {item.price}
                    </p>
                    <p className={styles.price_old}>
                        <Ruble/>
                        {Math.ceil(item.price * 1.5)}
                    </p>
                </Zoom>
            </div>
        </div>

    )
}

export default GetNow
