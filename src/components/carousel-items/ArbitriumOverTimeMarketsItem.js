import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './overTimeMarketsItems.css'
import Loader from '../ui/Loader'
import generateRandomIndex from '../scripts/GenerateRandomIndex'

import ErrorMessage from '../ui/ErrorMessage'
import useFetch from '../scripts/useFetch'

function ArbitriumOverTimeMarketsItem() {
  const url = 'https://api.thalesmarket.io/overtime/networks/42161/sports'
  const { data, loading, error } = useFetch(url)
  const [selectedMarketIndex, setSelectedMarketIndex] = useState(0)

  if (loading) return Loader()
  if (error) return ErrorMessage()

  if (!data) {
    return <p>Error: Data could not be fetched.</p>
  }

    const handleShowAnotherMarket = () => {
    const newSelectedMarket = generateRandomIndex(data)
    setSelectedMarketIndex(newSelectedMarket)
  }

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
            <Card.Title>{data[selectedMarketIndex].name}</Card.Title>
            <Card.Text>
              Take {data[selectedMarketIndex].supportedTypes[selectedMarketIndex]} on {data[selectedMarketIndex].name} now! Only
              on OverTime Markets
            </Card.Text>

            <Button variant="primary" onClick={handleShowAnotherMarket}>
            {loading ? 'Loading…' : 'Show me Another Market'}
          </Button>
          </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default ArbitriumOverTimeMarketsItem
