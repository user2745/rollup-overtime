import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Loader() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs="auto">
          <Spinner animation="border" role="status" />
        </Col>
      </Row>
    </Container>
  )
}

export default Loader
