import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './overTimeMarketsItems.css'
import Loader from '../ui/Loader'
import ErrorMessage from '../ui/ErrorMessage'
import useFetch from '../scripts/useFetch'

function ArbitriumOverTimeMarketsItem() {
  const url = 'https://api.thalesmarket.io/overtime/networks/42161/sports'
  const { data, loading, error } = useFetch(url)

  if (loading) return Loader()
  if (error) return ErrorMessage()

  return (
    <Card bg="info" style={{ height: '500px' }}>
      <Card.Header>Overtime Markets on Arbitrium</Card.Header>
      <Card.Body>
        <Card.Title>
          <h2 style={{ textAlign: 'center', color: 'black' }}>
            These Markets are available now on Overtime
          </h2>
        </Card.Title>
        <Row>
          <Col>
            <Card
              border="light"
              style={{ width: '18rem' }}
              className="inner-card"
            >
              <Card.Header>{data[9].sport} Markets</Card.Header>
              <Card.Body>
                <Card.Title>{data[9].name}</Card.Title>
                <Card.Text>
                  Take a {data[9].supportedTypes[9]} on {data[4].name} now! Only
                  on OverTime Markets
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default ArbitriumOverTimeMarketsItem
