import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'

const Footer = () => {
    return (
        <div>
           <footer>
               <Container>
                  <Row>
                      <Col className="text-center py-3">
                        Copyright &copy; Store JS
                      </Col>
                  </Row> 
               </Container>
           </footer> 
        </div>
    )
}
export default Footer
