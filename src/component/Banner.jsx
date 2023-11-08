import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';


export const Banner = () => {
    return (
        <section className='banner mt-4'>
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col md={5} className='banner-info-main'>
                        <h6>NEW COLLECTION /</h6>
                        <h1>Professional <br></br>skin care for you</h1>
                        <p className='banner-info'>Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit met condimentum estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit.</p>
                        <span>LEARN MORE</span>
                    </Col>
                    <Col md={5}>
                        <img src={require('../assets/bannerImg.jpg')} alt='banner' className='w-100'></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
