import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ErrorMessage() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs="auto">Error: Failed to Load Markets</Col>
      </Row>
    </Container>
  )
}

export default ErrorMessage
