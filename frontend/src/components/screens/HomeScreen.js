import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { listProducts } from '../../actions/productActions'

import Loader from '../Loader'
import Message from '../Message'
import Product from '../Product'

const HomeScreen = () => {

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {products, error, loading} = productList


    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    const featuredProducts = products ? products.filter(product => product.isFeatured === true) : []


    return (
        <>
        <main className="homescreen-bg">
            <div className="title-container">
                <h1 className="welcome-text">WELCOME TO STORE JS</h1>
                <h4>Best products for cheaper prices.</h4>
            </div>
        </main>
        <Container className="text-center mt-3 mb-3">
            <h1>Featured Products</h1>
        </Container>

        {loading ? <Loader />
            : error ? <Message variant='danger'>{error}</Message>
                :
                <div>
                    <Row>
                        {featuredProducts.map(prod => (
                        <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={prod} />
                        </Col> 
                        ))}
                    </Row>
                </div>
        }
        </>
    )
}

export default HomeScreen
