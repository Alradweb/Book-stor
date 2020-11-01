import React, {useContext} from 'react'
import Layout from "../components/layout/PageLayout"
import Link from "next/link"
import {Row, Col, ListGroup, ListGroupItem, Button, Card, CardBody, CardTitle, CardText} from "reactstrap"
import {CartContext} from '../context/CartContext'
import MinusIcon from "../components/icons/Minus"
import PlusIcon from "../components/icons/Plus"
import TrashIcon from "../components/icons/Trash"
import Ruble from "../components/icons/Ruble"

const Cart = () => {
    const {cartItems, increase, decrease, clearCart, handleCheckout, removeBook, itemCount, total = 0} = useContext(CartContext)

    return (
        <Layout title='Cart'>
            <Row style={{minHeight: '90vh', paddingTop: '30px'}}>
                {!cartItems.length ?
                    <Col className="p-3 text-center text-muted">
                        <h2 style={{color: 'white'}}>Ваша корзина пуста</h2>
                        <Link href="/list">
                            <a className='btn btn-success mt-3'>Список книг</a>
                        </Link>
                    </Col> :
                    <>
                        <Col xs={12} md={8}>
                            <ListGroup>
                                {
                                    cartItems.map((book) => {
                                        return (
                                            <ListGroupItem key={book.id}>
                                                <Row
                                                    className={'d-flex justify-content-start justify-content-sm-between align-items-center flex-wrap'}>
                                                    <Col xs={12} sm={5} className='d-flex flex-column'>
                                                        <img src={book.src} alt={book.title} width='50px'/>
                                                        <b>{book.title}</b>
                                                    </Col>
                                                    <Col xs={5} sm={3}>{`Цена: ${book.price} руб.`}</Col>
                                                    <Col xs={2} sm={1}>{`${book.quantity} шт.`}</Col>
                                                    <Col xs={5} sm={3}
                                                         className={'d-flex justify-content-end justify-content-sm-around align-items-center flex-wrap'}>
                                                        <Button onClick={() => increase(book)} color="success"
                                                                style={{padding: '10px'}}
                                                                className='mb-1 mr-1 mr-sm-0 mb-sm-0'
                                                        ><PlusIcon/></Button>
                                                        {
                                                            book.quantity === 1 ?
                                                                <Button onClick={() => removeBook(book)} color="danger"
                                                                        style={{padding: '10px'}}
                                                                        className='mr-1 mr-sm-0 mb-1 mb-sm-0'
                                                                >
                                                                    <TrashIcon/>
                                                                </Button> :
                                                                <Button onClick={() => decrease(book)} color="danger"
                                                                        style={{padding: '10px'}}
                                                                        className='mr-1 mr-sm-0 mb-1 mb-sm-0'
                                                                >
                                                                    <MinusIcon/>
                                                                </Button>
                                                        }
                                                    </Col>
                                                </Row>
                                            </ListGroupItem>
                                        )
                                    })
                                }
                            </ListGroup>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className='bg-light'>
                                <CardBody>
                                    <CardTitle>Всего книг</CardTitle>
                                    <CardText className='font-weight-lighter'
                                              style={{fontSize: '42px'}}>{itemCount}</CardText>
                                    <CardTitle>Сумма</CardTitle>
                                    <CardText>
                                        <span className='font-weight-lighter mr-2'
                                              style={{fontSize: '42px'}}>{total}</span>
                                        <Ruble style={{width: '30px', height: '30px'}}/>
                                    </CardText>
                                    <hr className="my-4"/>
                                    <div className=' d-flex flex-wrap justify-content-around'>
                                        <Button onClick={handleCheckout} color="success" className='mb-2'>Оформить
                                            заказ</Button>
                                        <Button onClick={clearCart} color="danger" className='mb-2'>Очистить
                                            корзину</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </>
                }
            </Row>
        </Layout>
    )
}

export default Cart

