import Card from 'react-bootstrap/Card'
import './overTimeMarketsItems.css'
import Loader from '../ui/Loader'
import ErrorMessage from '../ui/ErrorMessage'
import useFetch from '../scripts/useFetch'

function OptimismOverTimeMarketsItem() {
  const url = 'https://api.thalesmarket.io/overtime/networks/10/sports'
  const { data, loading, error } = useFetch(url)

  if (loading) return Loader()
  if (error) return ErrorMessage()

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
          <Card.Header>{data[11].sport} Markets</Card.Header>
          <Card.Body>
            <Card.Title>{data[11].name}</Card.Title>
            <Card.Text>
              Take a {data[11].supportedTypes[11]} on {data[4].name} now! Only
              on OverTime Markets
            </Card.Text>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  )
}

export default OptimismOverTimeMarketsItem
