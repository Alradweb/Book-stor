import {Col, Row} from "reactstrap"
import Logo from "../logo/Logo"
import styles from './description.module.scss'
import {MediaConsumer} from '../../context/media'
import MainSlider from "../main-slider/MainSlider"
import GetNow from "../get-now/GetNow"
import MySlider from "../slider/Slider"

const Description = ({currentItem, description, title, publicationDate, items, portion, setIndex, changeAnimStatus, pause, toggleHover,price, animStatus}) =>{
    return(
        <MediaConsumer>
            {
                (dev) =>{

                    const {device, orientation, deviceWidth, deviceHeight} = dev
                    const smallDevice = device === 'mobile' || device === 'tablet'
                    //console.log(deviceWidth)
                    if(smallDevice && orientation === 'landscape') return (
                            <>
                                <Col xs={6}
                                     className='d-flex justify-content-around '>
                                    <GetNow dev={device} title={title} price={price} toggleHover={toggleHover} animStatus={animStatus} orientation={orientation}/>
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
                            >
                                <GetNow price={price} animStatus={animStatus} toggleHover={toggleHover} portrait/>
                            </MySlider>
                        </Col>
                    )
                  return (
                      <div className={styles.product_description}>
                          <Row className={styles.product_row_top}>
                              <Col xs='4' className='flex-column'>
                                  <Logo height={32} width={43}/>
                              </Col>
                              <Col xs='8' className={styles.description}>
                                  <div className={styles.description_container}>
                                      <div className={styles.description_main}>
                                          <h5 className={styles.description_title}>{title}</h5>
                                      </div>
                                      <div className={styles.description_sub}>
                                          <time>{publicationDate}{' '}|</time>
                                          <span className={styles.description_genre}>{' '}Фантастика</span>
                                      </div>
                                  </div>
                              </Col>
                          </Row>
                          <Row className={styles.product_row_bottom}>
                              <Col xs={12}>
                                  <MainSlider
                                      items={items}
                                      setIndex={setIndex}
                                      portion={portion}
                                      changeAnimStatus={changeAnimStatus}
                                      pause={pause}
                                      toggleHover={toggleHover}
                                      currentItem={currentItem}
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

