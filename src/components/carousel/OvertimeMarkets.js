import Carousel from 'react-bootstrap/Carousel'
import ArbitriumOverTimeMarketsItem from '../ArbitriumOverTimeMarketsItem'
import OptimismOverTimeMarketsItem from '../OptimismOverTimeMarketsItem'
import BaseOverTimeMarketsItem from '../BaseOverTimeMarketsItem'
import Button from 'react-bootstrap/Button'
import '../carousel/slider.css'

function OvertimeMarkets() {
  return (
    <Carousel data-bs-theme="dark" style={{ backgroundColor: '#f5f5f5' }}>
      <Carousel.Item style={{ padding: '1rem', border: '1px solid #ccc' }}>
        <BaseOverTimeMarketsItem />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>
            <a href="https://base.org">Base</a> Overtime Markets
          </h3>
          <Button
            style={{ color: 'black' }}
            variant="outline-light"
            size="lg"
            href="http://overtimemarkets.xyz"
          >
            Play Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ padding: '1rem', border: '1px solid #ccc' }}>
        <OptimismOverTimeMarketsItem />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>
            <a href="http://optimism.io/">Optimism</a> Overtime Markets
          </h3>
          <Button
            style={{ color: 'black' }}
            variant="outline-light"
            size="lg"
            href="http://overtimemarkets.xyz"
          >
            Play Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ padding: '1rem', border: '1px solid #ccc' }}>
        <ArbitriumOverTimeMarketsItem />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>
            <a href="http://arbitrum.io">Arbitrium</a> Overtime Markets
          </h3>
          <Button
            style={{ color: 'black' }}
            variant="outline-light"
            size="lg"
            href="http://overtimemarkets.xyz"
          >
            Play Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default OvertimeMarkets
