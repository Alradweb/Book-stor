import './main.scss'
import {Container, Row, Col} from 'reactstrap'
import Layout from "../components/layout/Layout"
import Link from "next/link"
import Zoom from 'react-reveal/Zoom'
import MainSlider from "../components/main-slider/MainSlider"
import GetNow from "../components/get-now/GetNow"
import Logo from "../components/logo/Logo"
import CheckMark from "../components/icons/CheckMark"


const items = [
    {
        id: 1,
        title: 'Поиск предназначения',
        publicationDate: 1995,
        description: 'Этот роман — о времени. Об эпохе. О людях. По сути дела, как и большинство произведений Стругацких, этот роман — поиск предназначения не героя, и не «человека вообще», а вполне конкретных людей. «Поиск предназначения» — произведение, во-первых, антисоветское, начиная с того, что один из центральных героев — диссидент, да и весь роман проникнут соответствующим пафосом. Люди, окружающие Стаса Красногорова, очень и очень мало напоминают героев «Понедельника». Зато гораздо больше, чем последние, напоминают реальных людей.',
        author: 'Борис Стругацкий',
        src: 'https://img2.labirint.ru/books/587258/big.jpg',
        price: 20
    },
    {
        id: 2,
        title: 'Трудно быть богом',
        publicationDate: 1964,
        description: 'Дерзкое и богатое воображение авторов заглядывает через века, создает фантастический мир. Кто он, благородный дон Румата Эсторский? Как живет в нем душа Антона, мальчика с далекой Земли, посланника-энтузиаста из Института экспериментальной истории? Вместе с Руматой Эсторским нас мучают сомнения: как жить перед лицом человеческого горя, перед лицом смерти? Как оставаться Богом - высшим существом, знающим законы истории и потому не обнажающим меча?',
        author: "Аркадий Стругацкий, Борис Стругацкий",
        src: 'https://j.livelib.ru/boocover/1000013607/200/1596/Arkadij_i_Boris_Strugatskie__Trudno_byt_bogom.jpg',
        price: 42

    },
    {
        id: 3,
        title: 'Улитка на склоне',
        publicationDate: 1972,
        description: 'Улитка на склоне". Самое странное, самое неоднозначное произведение в богатом творческом наследии братьев Стругацких. Произведение, в котором собственно фантастика, "магический реализм" и даже некоторые оттенки психоделики переплетены в удивительно талантливое оригинальное единое целое.',
        author: "Аркадий Стругацкий, Борис Стругацкий",
        src: 'https://j.livelib.ru/boocover/1000319929/200/5810/A._Strugatskij_B._Strugatskij__Ulitka_na_sklone.jpg',
        price: 23
    },
    {
        id: 4,
        title: 'Отель «У Погибшего Альпиниста»',
        publicationDate: 1970,
        description: 'Отель У Погибшего Альпинистаеоднозначное произведение в богатом творческом наследии братьев Стругацких. Произведение, в котором собственно фантастика, "магический реализм" и даже некоторые оттенки психоделики переплетены в удивительно талантливое оригинальное единое целое.',
        author: "Аркадий Стругацкий, Борис Стругацкий",
        src: 'https://marketut.ru/wa-data/public/shop/products/23/31/163123/images/129630/129630.750.jpg',
        price: 18
    },
    {
        id: 5,
        title: 'За миллиард лет до конца света',
        publicationDate: 1976,
        description: 'За миллиард лет до конца света начное произведение в богатом творческом наследии братьев Стругацких. Произведение, в котором собственно фантастика, "магический реализм" и даже некоторые оттенки психоделики переплетены в удивительно талантливое оригинальное единое целое.',
        author: "Аркадий Стругацкий, Борис Стругацкий",
        src: 'https://img-gorod.ru/25/121/2512181_detail.jpg',
        price: 12
    },
    {
        id: 6,
        title: 'Град обреченный',
        publicationDate: 1989,
        description: 'Улитка на склоне". Самое странное, самое неоднозначное произведение в богатом творческом наследии братьев Стругацких. Произведение, в котором собственно фантастика, "магический реализм" и даже некоторые оттенки психоделики переплетены в удивительно талантливое оригинальное единое целое.',
        author: "Аркадий Стругацкий, Борис Стругацкий",
        src: 'https://cdn1.ozone.ru/multimedia/c1200/1015086517.jpg',
        price: 19
    },
    {
        id: 7,
        title: 'Понедельник начинается в субботу',
        publicationDate: 1965,
        description: 'Понедельник начинается в субботуе". Самое странное, самое неоднозначное произведение в богатом творческом наследии братьев Стругацких. Произведение, в котором собственно фантастика, "магический реализм" и даже некоторые оттенки психоделики переплетены в удивительно талантливое оригинальное единое целое.',
        author: "Аркадий Стругацкий, Борис Стругацкий",
        src: 'https://upload.wikimedia.org/wikipedia/ru/1/16/%D0%9F%D0%BE%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA_%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%B2_%D1%81%D1%83%D0%B1%D0%B1%D0%BE%D1%82%D1%83.jpg',
        price: 46
    },

]

//import test from '../static/test.jpg'
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            animStatus: true,
            pause: 'mouseout'
        }
    }

    setIndex = (index) => {
        this.setState({
            index
        })
    }
    changeAnimStatus = status => {
        this.setState({
            animStatus: status
        })
    }
    getCurrentProduct = () => items[this.state.index]
    getPortion = () => {
        const quantity = 4
        const {length} = items
        const boundary = length - quantity
        if (boundary <= this.state.index) {
            const latest = items.slice(this.state.index + 1)
            if (latest.length === quantity) return latest
            if (!latest.length) return items.slice(0, quantity)
            const addItems = items.slice(0, quantity - latest.length)
            return [...latest, ...addItems]
        }
        return items.slice(this.state.index + 1, this.state.index + quantity + 1)
    }
    toggleHover = hover =>{
        if(this.state.pause === hover) return
        this.setState(state =>{
            return{
                pause: hover
            }
        })
    }
    render() {
        const {getCurrentProduct, setIndex, getPortion, changeAnimStatus, toggleHover} = this
        const{animStatus, pause} = this.state
        const{title, description, publicationDate, price} = getCurrentProduct()
        //console.log(description.length)
        return (
            <Layout title='Main page'>
                <div className='product-description'>
                    <Row className='product-row'>
                        <Col xs='4'>
                            <Logo height={32} width={43}/>
                            <button className='btn btn-danger product-btn'>ПОДРОБНЕЕ</button>
                        </Col>
                        <Col xs='8' className='description'>
                            <div className='description-container'>
                                <div className='description-main'>
                                    <h5>{title}</h5>
                                    <p>{description.substring(0, 300)
                                    .concat('...')}</p>
                                </div>
                                <div className='description-date'>
                                    <time>{publicationDate} |</time>
                                    <span className='description-genre'> Фантастика</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <section className='content-container'>
                    <Container fluid>
                        <Row>
                            <Col xs='6' className='get-now'>
                                <GetNow price={price} toggleHover={toggleHover} animStatus={animStatus}/>
                            </Col>
                            <Col xs='6'>
                                <MainSlider
                                    items={items}
                                    setIndex={setIndex}
                                    portion={getPortion()}
                                    changeAnimStatus={changeAnimStatus}
                                    pause={pause}
                                    toggleHover={toggleHover}
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        )

    }
}

export default Index