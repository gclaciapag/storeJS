import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Product from '../Product'
import axios from 'axios'

const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('api/products/')
            setProducts(data) 
        }
        fetchProducts()
    }, [])

    const featuredProducts = products.filter(product => product.isFeatured === "Yes")



    return (
        <>
        <main className="homescreen-bg">
            <div className="title-container">
                <h1 className="welcome-text">WELCOME TO STORE JS</h1>
                <h4>Best products for cheaper prices.</h4>
            </div>
        </main>
        <Container className="text-center mt-5">
            <h1>Featured Products</h1>
        </Container>
        <div>
            <Row>
                {featuredProducts.map(prod => (
                   <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={prod} />
                   </Col> 
                ))}
            </Row>
        </div>
        </>
    )
}

export default HomeScreen
