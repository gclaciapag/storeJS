import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-2 rounded border-secondary">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image}/>
            </Link>
            <Card.Body>
                    <Card.Title as="div">
                        <Link to={`/product/${product._id}`} className="text-primary">
                            <strong>{product.name}</strong>
                        </Link>
                    </Card.Title>

                    <Card.Text as="div">
                        <div className="my-3 text-secondary">
                            <Rating ratingValue={product.rating} 
                                    text={`${product.numReviews} reviews`}
                                    color={"#f0c929"} />
                        </div>
                    </Card.Text>

                    <Card.Text as="h5" className="text-primary">
                        <strong>${product.price}</strong>
                    </Card.Text>
            </Card.Body>
            
        </Card>
    )
}

export default Product
