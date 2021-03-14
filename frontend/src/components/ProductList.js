import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'

import Loader from './Loader';
import Message from './Message'
import Product from '../components/Product'

const ProductList = () => {

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList
    useEffect(() => {
        dispatch(listProducts())
        
    }, [dispatch])

    return (
        <div>
            <Container className="text-center mt-3">
                <h1>Our Products</h1>
                <div className="mt-3">
                {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        : 
                        <Row>
                            {products.map(prod => (
                            <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={prod} />
                            </Col> 
                            ))}
                        </Row>
                }
                </div>
            </Container>
        </div>
    )
}

export default ProductList 
