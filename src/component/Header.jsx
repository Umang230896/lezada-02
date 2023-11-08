import React from 'react'

import { Row, Col, Container } from 'react-bootstrap';

import { BiSearch, BiSolidUser } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosCart } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';



export const Header = () => {
    var Navigate = useNavigate()

    return (
        <>

            <header className='py-4' >
                <Container>
                    <Row className='justify-content-between'>
                        <Col md={2}>
                            <img src={require('../assets/logo.png')} alt='lezada logo' className='img-fluid'></img>
                        </Col>
                        <Col md={6}>
                            <Row className='justify-content-center'>
                                <Col md={2}> <a href='/' className='nav-item py-4'>Home</a>  </Col>
                                <Col md={2}> <a href='/' className='nav-item py-4'>Shop</a>  </Col>
                                <Col md={3}> <a href='/' className='nav-item py-4'>Elements</a>  </Col>
                                <Col md={2}> <a href='/' className='nav-item py-4'>Pages</a>  </Col>
                                <Col md={2}> <a href='/' className='nav-item py-4'>Blog</a>  </Col>
                            </Row>
                        </Col>
                        <Col md={2} className='d-flex justify-content-between'>

                            <span className='search-icon'>
                                <BiSearch></BiSearch>
                            </span>
                            <span className='user-icon' onClick={() => Navigate('/login-register')}>
                                <a>
                                    <BiSolidUser></BiSolidUser>
                                </a>
                            </span>
                            <span className='like-icon'>
                                <AiOutlineHeart></AiOutlineHeart>
                            </span>
                            <span className='cart-icon'>
                                <IoIosCart></IoIosCart>
                            </span>

                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}
