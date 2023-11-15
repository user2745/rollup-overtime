import Carousel from 'react-bootstrap/Carousel'
import ArbitriumOverTimeMarketsItem from '../carousel-items/ArbitriumOverTimeMarketsItem'
import OptimismOverTimeMarketsItem from '../carousel-items/OptimismOverTimeMarketsItem'
import BaseOverTimeMarketsItem from '../carousel-items/BaseOverTimeMarketsItem'
import Button from 'react-bootstrap/Button'
import '../carousel/slider.css'
import '../carousel/overTimeMarkets.css'

function OvertimeMarkets() {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item">
        <BaseOverTimeMarketsItem />
        <Carousel.Caption>
          <h3>
            <a href="https://base.org" className="link">
              Base 
            </a>{' '}
             Overtime Markets
          </h3>
          <Button
            variant="outline-dark"
            size="lg"
            href="http://overtimemarkets.xyz"
          >
            Play Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <OptimismOverTimeMarketsItem />
        <Carousel.Caption>
          <h3>
            <a href="http://optimism.io/" className="link">
              Optimism 
            </a>{''}
            Overtime Markets
          </h3>
          <Button
            variant="outline-dark"
            size="lg"
            href="http://overtimemarkets.xyz"
          >
            Play Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <ArbitriumOverTimeMarketsItem />
        <Carousel.Caption>
          <h3>
            <a href="http://arbitrum.io" className="link">
              Arbitrium 
            </a>{''}
             Overtime Markets
          </h3>
          <Button
            variant="outline-dark"
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
