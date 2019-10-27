import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {useRouter} from 'next/router'
import PageLayout from '../../components/layout/PageLayout'
import items from '../../data'
import Error from "../_error"

export default function BookDetails({item}) {
    // const router = useRouter()
    // const queryTitle = router.query.title
    // const {title} = router.query
    // console.log('BookDetails',  title)
    // const item = items.find((item) => item.titleToLatin === title)
    // if(!item) return (
    //     <PageLayout title={''}/>
    // )
    if (!item) {
        return <Error statusCode={404} />;
    }

    return (
        <PageLayout title={ item.title }>
            <div>
                <Card>
                    <CardImg top width="100%" src={item.src} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{item.title}</CardTitle>
                        <CardSubtitle>{item.publicationDate}</CardSubtitle>
                        <CardText>{item.description}</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
            {/*<h1 style={{color: 'white'}}>{item.title}</h1>*/}
            {/*<p style={{color: 'white'}}>{item.description}</p>*/}
        </PageLayout>
    )
}
BookDetails.getInitialProps =  function(context) {
   // console.log('context--')
    const { title} = context.query;
    const item =  items.find((item) => item.titleToLatin === title)
    if (!item && context.res) {
        context.res.statusCode = 404;
    }
    console.log(`Fetched title: ${item ? item.title : 'хуйня'}`);
    return { item }
};