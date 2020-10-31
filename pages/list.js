import {Row} from 'reactstrap'
import PageLayout from "../components/layout/PageLayout"
import items from '../data'
import ListItem from "../components/list-item/ListItem"

const List = () =>{
    return(
        <PageLayout title='List'>
            <Row style={{paddingTop: '30px'}}>

                {
                    items.map((item) =>{
                        return(
                            <ListItem item={item} key={item.id}/>
                        )
                    })
                }

            </Row>
        </PageLayout>
    )
}

export default List