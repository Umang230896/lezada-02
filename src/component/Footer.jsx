import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';


export const Footer = () => {
    return (
        <footer className='mt-4 mb-5 pt-5'>

            <Container>
                <Row>
                    <Col>
                        <img src={require('../assets/logo.png')} alt='logo'></img>
                        <p className='mt-4 fw-light'>© 2023 lezada <br></br>All Rights Reserved</p>
                    </Col>
                    <Col>
                        <ul className='fw-light'>
                            <li className='title mb-4'>ABOUT</li>
                            <li className='mb-4'>About us</li>
                            <li className='mb-4'>Store location</li>
                            <li className='mb-4'>Contact</li>
                            <li className='mb-4'>Orders tracking</li>
                        </ul>
                    </Col>
                    <Col>
                    <ul className='fw-light'>
                            <li className='title mb-4'>USEFUL LINKS</li>
                            <li className='mb-4'>Returns</li>
                            <li className='mb-4'>Support Policy</li>
                            <li className='mb-4'>Size guide</li>
                            <li className='mb-4'>FAQs</li>
                        </ul>
                    </Col>
                    <Col>
                    <ul className='fw-light'>
                            <li className='title mb-4'>FOLLOW US ON</li>
                            <li className='mb-4'>Twitter</li>
                            <li className='mb-4'>Facebook</li>
                            <li className='mb-4'>Instagram</li>
                            <li className='mb-4'>Youtube</li>
                        </ul>
                    </Col>
                    <Col md={4} className='ps-5'>
                        <h2>Subscribe</h2>
                        <p className='fw-light'>Subscribe to our newsletter to receive news on update.</p>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}
