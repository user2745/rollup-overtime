import Card from 'react-bootstrap/Card'
import './overTimeMarketsItems.css'
import Loader from '../ui/Loader'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import generateRandomIndex from '../scripts/GenerateRandomIndex'
import ErrorMessage from '../ui/ErrorMessage'
import useFetch from '../scripts/useFetch'

function OptimismOverTimeMarketsItem() {
  const url = 'https://api.thalesmarket.io/overtime/networks/10/sports'
  const { data, loading, error } = useFetch(url)
  const [selectedMarketIndex, setSelectedMarketIndex] = useState(0)


  const handleShowAnotherMarket = () => {
    const newSelectedMarket = generateRandomIndex(data)
    setSelectedMarketIndex(newSelectedMarket)
  }

  if (loading) return Loader()
  if (error) return ErrorMessage()

  if (!data) {
    return <p>Error: Data could not be fetched.</p>
  }


  return (
    <Card bg="danger" style={{ height: '500px' }}>
      <Card.Header>Overtime Markets on Optimism</Card.Header>
      <Card.Body>
        <Card.Title>
          <h2 style={{ textAlign: 'center', color: 'black' }}>
            Optimism Markets available now on Overtime
          </h2>
        </Card.Title>
        <Card border="light" style={{ width: '18rem' }} className="inner-card">
          <Card.Header>{data[selectedMarketIndex].sport} Markets</Card.Header>
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
      </Card.Body>
    </Card>
  )
}

export default OptimismOverTimeMarketsItem
