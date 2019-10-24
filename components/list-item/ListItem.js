import { Card, Button, CardTitle, CardText, Col, CardBody, CardImg } from 'reactstrap';

const ListItem = ({item}) =>{
    return(
        <Col sm={6} md={4} lg={3}>
            <Card body>
                <CardBody>
                    <CardImg top width="100%" src={item.src} alt="Card image cap" />
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.description}</CardText>
                <Button>Go somewhere</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ListItem