import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'

const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('api/products/')
            setProducts(data) 
        }
        fetchProducts()
    }, [])

    return (
        <div>
        <Container className="text-center mt-5">
            <h1>Our Products</h1>
        </Container>
        <div>
            <Row>
                {products.map(prod => (
                   <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={prod} />
                   </Col> 
                ))}
            </Row>
        </div>
        </div>
    )
}

export default ProductList 
