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
                                            <ListGroupItem
                                                className={'d-flex justify-content-between align-items-center bg-light mb-3'}
                                                key={book.id}>
                                                <div style={{
                                                    marginRight: 'auto',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <img src={book.src} alt={book.title} width='50px'/>
                                                    <div className={'d-flex flex-column ml-3'}>
                                                        <b>{book.title}</b><span>{`Цена: ${book.price} руб.`}</span>
                                                    </div>
                                                </div>
                                                <div className='mr-3'>{`${book.quantity} шт.`}</div>
                                                <div className={'d-flex justify-content-between align-items-center'}>
                                                    <Button onClick={() => increase(book)} color="success"
                                                            className='mr-2'
                                                            style={{padding: '15px'}}><PlusIcon/></Button>
                                                    {
                                                        book.quantity === 1 ?
                                                            <Button onClick={() => removeBook(book)} color="danger"
                                                                    style={{padding: '15px'}}>
                                                                <TrashIcon/>
                                                            </Button> :
                                                            <Button onClick={() => decrease(book)} color="danger"
                                                                    style={{padding: '15px'}}>
                                                                <MinusIcon/>
                                                            </Button>
                                                    }
                                                </div>
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
                                    <CardText className='font-weight-lighter' style={{fontSize: '42px'}}>{itemCount}</CardText>
                                    <CardTitle>Сумма</CardTitle>
                                    <CardText>
                                        <span className='font-weight-lighter mr-2' style={{fontSize: '42px'}}>{total}</span>
                                        <Ruble style={{width: '30px', height: '30px'}}/>
                                    </CardText>
                                    <hr className="my-4"/>
                                    <div className='text-center'>
                                        <Button onClick={handleCheckout} color="success" className='mr-1 mb-2'>Оформить
                                            заказ</Button>
                                        <Button onClick={clearCart} color="danger" className='ml-1 mb-2'>Очистить
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