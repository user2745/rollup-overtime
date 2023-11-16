import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Loader from '../ui/Loader'
import './overTimeMarketsItems.css'
import ErrorMessage from '../ui/ErrorMessage'
import GenerateRandomNumber from '../scripts/GenerateRandomNumber'
import useFetch from '../scripts/useFetch'

function BaseOverTimeMarketsItem() {
  const url = 'https://api.thalesmarket.io/overtime/networks/8453/sports'
  const [selectedMarket, setSelectedMarket] = useState(0)
  const { data, loading, error } = useFetch(url)

  if (loading) return Loader()
  if (error) return ErrorMessage()

  const handleShowAnotherMarket = () => {
    const newSelectedMarket = GenerateRandomNumber(data)
    setSelectedMarket(newSelectedMarket)
  }

  return (
    <Card bg="primary" style={{ height: '500px' }}>
      <Card.Header>Overtime Markets on Base</Card.Header>
      <Card.Body>
        <Card.Title>
          <h2 style={{ textAlign: 'center', color: 'black' }}>
            Base Markets available now on Overtime
          </h2>
        </Card.Title>
        <Card className="inner-card">
          {data[selectedMarket].name}
          <Button variant="primary" onClick={handleShowAnotherMarket}>
            {loading ? 'Loading…' : 'Show me Another Market'}
          </Button>
        </Card>
      </Card.Body>
    </Card>
  )
}

export default BaseOverTimeMarketsItem
