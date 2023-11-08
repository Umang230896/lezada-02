import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const LoginBanner = () => {
  return (
    <>
        <section className="login-banner py-5">
            <Container className='py-4'>
                <Row>
                    <Col md={4}>
                        <h1>Customer Login</h1>
                        <p> <span >Home /</span> Customer Login</p>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
