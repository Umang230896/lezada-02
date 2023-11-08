import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';


export const Ads = () => {
  return (
    <section className='ads mt-5 mb-5 pt-5 pb-5'>

        <Container className='ads mt-5 mb-5 pt-5 pb-5'>
            <Row className='align-items-center'>
                <Col>
                    <img src={require('../assets/ad1.jpeg')} alt='ad1' className='w-100'></img>
                </Col>
                <Col>
                    <img src={require('../assets/ad2.jpeg')} alt='ad2' className='w-100'></img>
                </Col>
                <Col>
                    <img src={require('../assets/ad3.jpeg')} alt='ad3' className='w-100'></img>
                </Col>
                <Col md={4} className='ps-5 '>
                    <span>@LEZADA_SHOP</span>
                    <h2>Follow us on Instagram</h2>
                </Col>
            </Row>
        </Container>

    </section>
  )
}
