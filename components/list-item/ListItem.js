import React, {useContext} from 'react'
import {Card, Button, CardTitle, CardText, Col, CardBody, CardImg} from 'reactstrap'
import styles from './list-item.module.scss'
import Link from "next/link"
import { CartContext } from '../../context/CartContext'
const BookLink = ({title}) =>{

  return(
      <Link href="/book/[title]" as={`/book/${title}`}>
          <a>Подробнее</a>
      </Link>
  )
}

const ListItem = ({item}) => {
    const { addBook } = useContext(CartContext)
    const substring = item.description.substring(0, 200)
    .concat('...')
    //console.log('addProduct, cartItems, increase-----', addProduct, cartItems, increase)
    return (

        <Col sm={6}  lg={4} xl={3} className={'py-2'}>
            <Card body outline color="danger" className='h-100'>
                <CardBody>
                    <CardImg className={'img-fluid'} top width="100%" src={item.src} alt="Card image cap"/>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>{substring}</CardText>
                        <div className='d-flex justify-content-between' >
                            <BookLink title={item.titleToLatin}/>
                            <Button onClick={()=>addBook(item)} className={styles.card_button_buy} size="sm">Купить</Button>
                        </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ListItem
// {/*<Col sm={6} md={4} lg={3}>*/}