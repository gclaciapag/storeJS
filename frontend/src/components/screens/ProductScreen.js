import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import { getProductDetails } from '../../actions/productActions'

import Loader from '../Loader'
import Message from '../Message'
import Rating from '../Rating'


const ProductScreen = ({ match }) => {

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { product, error, loading } = productDetails

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
    }, [dispatch])

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                :
                    <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid/>
                        </Col>
                        <Col md={3}>
                            <ListGroup>
                                <ListGroup.Item variant="flush">
                                    <h4>{product.name}</h4>
                                </ListGroup.Item>
                                <ListGroup.Item variant="flush">
                                    <Rating ratingValue={product.rating} 
                                            text={`${product.numReviews} reviews`}
                                            color={"#f0c929"} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Description: </strong> {product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col><strong>${product.price}</strong></Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button className="btn-block" 
                                                type="button"
                                                disabled={product.countInStock === 0}>
                                            Add To Cart
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
            }

        </div>
    )
}

export default ProductScreen
