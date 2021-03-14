import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const ProductList = () => {

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList
    useEffect(() => {
        dispatch(listProducts())
        
    }, [dispatch])

    return (
        <div>
            <Container className="text-center mt-5">
                <h1>Our Products</h1>
                {loading ? <h2>Loading...</h2>
                    : error ? <h3>{error}</h3>
                        : 
                        <Row>
                            {products.map(prod => (
                            <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={prod} />
                            </Col> 
                            ))}
                        </Row>
                }
            </Container>
        </div>
    )
}

export default ProductList 
