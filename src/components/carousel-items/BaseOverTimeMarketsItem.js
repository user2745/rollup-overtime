import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Loader from '../ui/Loader'
import './overTimeMarketsItems.css'
import ErrorMessage from '../ui/ErrorMessage'
import GenerateRandomNumber from '../scripts/GenerateRandomNumber'

function BaseOverTimeMarketsItem() {
  const [loading, setLoading] = useState(true)
  const [selectedMarket, setSelectedMarket] = useState(0)

  const [isLoading, Loading] = useState(false)
  const [error, setError] = useState(null)

  const [data, setData] = useState(null)

  const url = 'https://api.thalesmarket.io/overtime/networks/8453/sports'

  useEffect(() => {
    fetch('https://api.thalesmarket.io/overtime/networks/8453/sports')
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
  });




  const GetNewMarkets = () => {
    var dataLength = data.length;
    var min = Math.ceil(0);
    var max = Math.floor(dataLength);
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive 
    setSelectedMarket(randomNumber)
  }

  if (loading) return Loader()
  if (error) return ErrorMessage()

  return (
    <Card bg="primary" style={{ height: '500px' }}>
      <Card.Header>Overtime Markets on Base</Card.Header>
      <Card.Body>
        <Card.Title>
          <h2 style={{ textAlign: 'center', color: 'black' }}>
            Base Markets available now on Overtime
          </h2>
        </Card.Title>

          <Card className='inner-card'>

      {data[selectedMarket].name}

<Button
variant="primary"
onClick={GetNewMarkets}
>
{isLoading ? 'Loading…' : 'Show me Another Market'}
</Button>
          </Card>

      </Card.Body>
    </Card>
  )
}

export default BaseOverTimeMarketsItem
