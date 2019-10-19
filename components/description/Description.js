import {Col, Row} from "reactstrap"
import Logo from "../logo/Logo"
import './description.scss'
import {MediaConsumer} from '../../context/context'
import MainSlider from "../main-slider/MainSlider"
import Conveyor from "../conveyor/Сonveyor"

const Description = ({description, title, publicationDate, items, portion, setIndex, changeAnimStatus, pause, toggleHover}) =>{
    return(
        <MediaConsumer>
            {
                device =>{
                    //const smallDevice = device === 'mobile' || device === 'tablet'
                    const smallDevice = device === 'mobile'
                    const substring = description.substring(0, 307)
                    .concat('...')
                  return   smallDevice ? null : (
                      <div className='product-description'>
                          <Row className='row-top'>
                              <Col xs='4' className='flex-column'>
                                  <Logo height={32} width={43}/>

                                  {/*<button className='btn btn-danger product-btn'>Подробнее</button>*/}
                              </Col>
                              <Col xs='8' className='description'>
                                  <div className='description-container'>
                                      <div className='description-main'>
                                          <h5 className='description-title'>{title}</h5>
                                          {/*<p>{description}</p>*/}
                                      </div>
                                      <div className='description-sub'>
                                          <time>{publicationDate}{' '}|</time>
                                          <span className='description-genre'>{' '}Фантастика</span>
                                      </div>
                                  </div>
                              </Col>
                          </Row>
                          <Row className='row-bottom'>
                              <Col xs={12}>
                                  <MainSlider
                                      items={items}
                                      setIndex={setIndex}
                                      portion={portion}
                                      changeAnimStatus={changeAnimStatus}
                                      pause={pause}
                                      toggleHover={toggleHover}
                                  />
                              </Col>
                          </Row>
                      </div>
                  )
                }
            }
        </MediaConsumer>
    )
}
export default Description

