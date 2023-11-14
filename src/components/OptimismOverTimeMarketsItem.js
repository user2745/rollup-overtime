import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loader from './ui/Loader'
import ErrorMessage from './ui/ErrorMessage'

function OptimismOverTimeMarketsItem() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch('https://api.thalesmarket.io/overtime/networks/10/sports')
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error(
          '[Console]  An error occurred fetching Optimism markets!',
          error,
        )
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return Loader()
  if (error) return ErrorMessage()

  return (
    <Card style={{ height: '500px' }}>
      <Card.Header>Overtime Markets on Optimism</Card.Header>
      <Card.Body>
        <Card.Title>
          <h2 style={{ textAlign: 'center', color: 'white' }}>
            Optimism Markets available now on Overtime
          </h2>
        </Card.Title>
        <Row>
          <Col>
            <Card border="light" style={{ width: '18rem' }}>
              <Card.Header>{data[9].id}</Card.Header>
              <Card.Body>
                <Card.Title>{data[9].name}</Card.Title>
                <Card.Text>
                  Visit OverTime Markets to Take a {data[9].supportedTypes[0]}{' '}
                  on {data[4].name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default OptimismOverTimeMarketsItem
