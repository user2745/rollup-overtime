import Carousel from 'react-bootstrap/Carousel';
import ArbitriumOverTimeMarketsItem from './ArbitriumOverTimeMarketsItem';
import OptimismOverTimeMarketsItem from './OptimismOverTimeMarketsItem';
import BaseOverTimeMarketsItem from './BaseOverTimeMarketsItem';
import Button from 'react-bootstrap/Button';


function OvertimeMarkets() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <BaseOverTimeMarketsItem />
        <Carousel.Caption>
          <h3>Overtime Markets on <a href="https://base.org">Base</a></h3>
          <Button variant="outline-light" href="http://overtimemarkets.xyz">
            Play Now 
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <OptimismOverTimeMarketsItem />
        <Carousel.Caption>
          <h3>Overtime Markets on <a href="http://optimism.io/">Optimism</a></h3>
          <Button variant="outline-light" href="http://overtimemarkets.xyz">
            Play Now 
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ArbitriumOverTimeMarketsItem />
        <Carousel.Caption>
          <h3>Overtime Markets on <a href="http://arbitrum.io">Arbitrium</a></h3>
          <Button variant="outline-light" size="lg" href="http://overtimemarkets.xyz">
            Play Now 
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default OvertimeMarkets;