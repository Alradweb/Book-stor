import {Col, Row} from "reactstrap"
import Logo from "../logo/Logo"
import './description.scss'
import {MediaConsumer} from '../../context/context'

const Description = ({description, title, publicationDate}) =>{
    return(
        <MediaConsumer>
            {
                device =>{
                    const smallDevice = device === 'mobile' || device === 'tablet'
                  return   smallDevice ? null : (
                      <div className='product-description'>
                          <Row className='product-row'>
                              <Col xs='4' className='flex-column'>
                                  <Logo height={32} width={43}/>
                                  <button className='btn btn-danger product-btn'>Подробнее</button>
                              </Col>
                              <Col xs='8' className='description'>
                                  <div className='description-container'>
                                      <div className='description-main'>
                                          <h5 className='description-title'>{title}</h5>
                                          <p>{description.substring(0, 307)
                                          .concat('...')}</p>
                                      </div>
                                      <div className='description-sub'>
                                          <time>{publicationDate}{' '}|</time>
                                          <span className='description-genre'>{' '}Фантастика</span>
                                      </div>
                                  </div>
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