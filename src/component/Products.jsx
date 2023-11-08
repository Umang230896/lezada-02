import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';

export const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((res) => {
            console.log(res.data.products);
            setProducts(res.data.products);

        })
    }, [])
    return (
        <section className='products mt-5 mb-5 pt-5 pb-5'>

            <Container className='mt-5 mb-5 pt-5 pb-5'>
                <Row>
                    <Col>
                        <h2 className='p-5 mb-5'>Customer favorites</h2>
                    </Col>
                </Row>
                <Row>

                    {/* products.map function will start from here */}
                    {
                        products.map((item, index) => {
                            return (
                                <Col md={3} className='mb-4' key={index}>
                                    <div className="product pos-relative">
                                        <section className="product-images" style={{height: "250px"}}>
                                            <div className="product-thumbnail-image">
                                                <img src={item.thumbnail} alt='product-thumb' className='main-product w-100' style={{height:"250px"}}></img>
                                            </div>
                                            <div className="product-hover-image">
                                                <img src={item.images[0]} alt='product-hover' className='main-product-hover-image w-100 pos-absolute' style={{height:"250px"}} ></img>
                                            </div>
                                        </section>
                                        <section>
                                            <section className="product-discount-percentages pos-absolute d-flex align-items-center justify-content-center rounded-circle">
                                                <span>{item.discountPercentage}%</span>
                                            </section>
                                            <section className="product-wishlist pos-absolute d-flex align-items-center justify-content-center ">
                                                <span><AiOutlineHeart></AiOutlineHeart></span>
                                            </section>
                                            <section className="product-details pt-4">
                                                <div className="product-title">{item.title}</div>
                                                <div className="product-detail pos-relative">
                                                    <div className="Add-to-Cart pos-absolute text-danger"> <b> <span> + </span> Add To Cart </b> </div>
                                                    <div className="Product-description">{item.description}</div>
                                                </div>
                                                <div className="product-price mt-2">
                                                    <span className='old-price'>
                                                        <del>
                                                            $ 20.00
                                                        </del>
                                                    </span>
                                                    <span className='new-price ms-3'>
                                                        <b>
                                                            $ {item.price}
                                                        </b>
                                                    </span>
                                                </div>
                                            </section>
                                        </section>
                                    </div>
                                </Col>
                            )
                        })
                    }


                    {/* products.map will end here */}




                </Row>
            </Container>

        </section>
    )
}
