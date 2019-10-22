import {Col, Row} from "reactstrap"
import Logo from "../logo/Logo"
import './description.scss'
import {MediaConsumer} from '../../context/context'
import MainSlider from "../main-slider/MainSlider"
import Conveyor from "../conveyor/Сonveyor"
import GetNow from "../get-now/GetNow"
import MySlider from "../slider/Slider"

const Description = ({description, title, publicationDate, items, portion, setIndex, changeAnimStatus, pause, toggleHover,price, animStatus}) =>{
    return(
        <MediaConsumer>
            {
                (dev) =>{
                   console.log(dev)
                    const {device, orientation, deviceWidth, deviceHeight} = dev
                    const smallDevice = device === 'mobile' || device === 'tablet'
                    const substring = description.substring(0, 307)
                    .concat('...')
                    if(smallDevice && orientation === 'landscape') return (
                            <>
                                <Col xs={6}
                                     className='d-flex justify-content-around '>
                                    <GetNow dev={device} price={price} toggleHover={toggleHover} animStatus={animStatus} orientation={orientation}/>
                                </Col>
                                <Col xs={6} className='d-flex justify-content-around align-items-center'>
                                    <MySlider items={items}
                                              setIndex={setIndex}
                                              changeAnimStatus={changeAnimStatus}
                                              pause={pause}
                                    />
                                </Col>
                            </>
                    )
                    if(smallDevice && orientation === 'portrait') return (
                        <Col xs={12} className='d-flex justify-content-around align-items-center'>
                            <MySlider items={items}
                                      setIndex={setIndex}
                                      changeAnimStatus={changeAnimStatus}
                                      pause={pause}
                                      deviceWidth={deviceWidth}
                                      deviceHeight={deviceHeight}
                                      fullSize
                            />
                        </Col>
                    )
                  return (
                      <div className='product-description'>
                          <Row className='row-top'>
                              <Col xs='4' className='flex-column'>
                                  <Logo height={32} width={43}/>
                              </Col>
                              <Col xs='8' className='description'>
                                  <div className='description-container'>
                                      <div className='description-main'>
                                          <h5 className='description-title'>{title}</h5>
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

