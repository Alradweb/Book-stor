import React, {useContext} from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import PageLayout from '../../components/layout/PageLayout'
import items from '../../data'
import Error from "../_error"
import {CartContext} from '../../context/CartContext'
import styles from './book.module.scss'

export default function BookDetails({item}) {
    const {addBook} = useContext(CartContext)
    if (!item) {
        return <Error statusCode={404}/>;
    }
    return (
        <PageLayout title={item.title}>
            <div className={styles.book_wrapper}>
                <Card className={styles.book_card}>
                    <CardImg className={styles.book_image} src={item.src} alt={`Книга ${item.title}`}/>
                    <CardBody>
                        <CardTitle>{item.title}</CardTitle>
                        <CardText>{`Год публикации: ${item.publicationDate}`}</CardText>
                        <CardText style={{color: 'red'}}>{`Цена: ${item.price} руб.`}</CardText>
                        <CardText>{item.description}</CardText>
                        <Button onClick={() => addBook(item)} className='btn btn-danger'>В корзину</Button>
                    </CardBody>
                </Card>
            </div>
        </PageLayout>
    )
}

BookDetails.getInitialProps = function (context) {
    const {title} = context.query;
    const item = items.find((item) => item.titleToLatin === title)
    if (!item && context.res) {
        context.res.statusCode = 404
    }
    return {item}
}