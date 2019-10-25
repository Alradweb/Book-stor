import {Card, Button, CardTitle, CardText, Col, CardBody, CardImg} from 'reactstrap'
import './list-item.scss'
import Link from "next/link"

const BookLink = props => (
    <Link href="/book/[title]" as={`/book/${props.title}`}>
        <a>Подробнее</a>
    </Link>
)

const ListItem = ({item}) => {
    const substring = item.description.substring(0, 200)
    .concat('...')
    return (

        <Col sm={6}  lg={4} xl={3} className={'py-2'}>
            <Card body outline color="danger" className='h-100'>
                <CardBody>
                    <CardImg  className={'img-fluid'} top width="100%" src={item.src} alt="Card image cap"/>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>{substring}</CardText>
                        <div className='d-flex justify-content-between' >
                            <BookLink title={item.title}/>
                           {/*<Button className='card-button-details' size="sm">Подробнее</Button>*/}
                            <Button className='card-button-buy' size="sm">Купить</Button>
                        </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ListItem
// {/*<Col sm={6} md={4} lg={3}>*/}