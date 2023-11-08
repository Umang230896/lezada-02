import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const LoginForm = () => {
  return (
    <>
      <section className="login-sign-up-form py-5">
        <Container className='py-5'>
          <Row>
            <Col>
              <div className="login">
                <section className="login-title text-center">
                  <div className="h2 text-dark">Login</div>
                  <div className="welcom fw-light h6">Great to have you back!</div>
                </section>
                <section className="login-form">

                </section>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
