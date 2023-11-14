import Carousel from 'react-bootstrap/Carousel'
import ArbitriumOverTimeMarketsItem from '../ArbitriumOverTimeMarketsItem'
import OptimismOverTimeMarketsItem from '../OptimismOverTimeMarketsItem'
import BaseOverTimeMarketsItem from '../BaseOverTimeMarketsItem'
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
            <a href="https://base.org">Base</a> Overtime Markets
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
            <a href="http://optimism.io/">Optimism</a> Overtime Markets
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
            <a href="http://arbitrum.io">Arbitrium</a> Overtime Markets
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
