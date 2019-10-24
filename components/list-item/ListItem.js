import {CardDeck, Card, Button, CardTitle, CardText, Col, CardBody, CardImg} from 'reactstrap'

const ListItem = ({item}) => {
    const substring = item.description.substring(0, 200)
    .concat('...')
    return (

        <Col sm={6} md={4} lg={3} className={'py-2'}>
            <Card body outline color="danger" className='h-100'>
                <CardBody>
                    <CardImg  className={'img-fluid'} top width="100%" src={item.src} alt="Card image cap"/>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>{substring}</CardText>
                    <Button>Go somewhere</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ListItem
// {/*<Col sm={6} md={4} lg={3}>*/}