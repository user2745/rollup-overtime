import React from 'react'
import { Card, CardHeader, CardTitle, CardBody, Table } from 'react-bootstrap'

const MarketCard = ({ market }) => {
  const homeOdds = market.odds.homeOdds
  const awayOdds = market.odds.awayOdds
  const drawOdds = market.odds.drawOdds
  const homePriceImpact = market.priceImpact.homePriceImpact
  const awayPriceImpact = market.priceImpact.awayPriceImpact
  const drawPriceImpact = market.priceImpact.drawPriceImpact
  const homeLiquidity = market.liquidity.homeLiquidity
  const awayLiquidity = market.liquidity.awayLiquidity
  const drawLiquidity = market.liquidity.drawLiquidity
  const homeBonus = market.bonus.homeBonus
  const awayBonus = market.bonus.awayBonus
  const drawBonus = market.bonus.drawBonus

  return (
    <Card className="text-center">
      <CardHeader className="bg-dark text-white">
        {market.homeTeam} vs. {market.awayTeam} - {market.maturityDate}
      </CardHeader>
      <CardBody>
        <CardTitle>Match Information</CardTitle>
        <Table striped bordered hover responsive>
          <tbody>
            <tr>
              <td>Sport</td>
              <td>{market.sport}</td>
            </tr>
            <tr>
              <td>League</td>
              <td>{market.leagueName}</td>
            </tr>
            <tr>
              <td>Match Date</td>
              <td>{market.maturityDate}</td>
            </tr>
          </tbody>
        </Table>
        <CardTitle>Odds</CardTitle>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Market</th>
              <th>American</th>
              <th>Decimal</th>
              <th>Normalized Implied</th>
              <th>Price Impact</th>
              <th>Liquidity (Positions)</th>
              <th>Liquidity (USD)</th>
              <th>Bonus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Home</td>
              <td>{homeOdds.american}</td>
              <td>{homeOdds.decimal}</td>
              <td>{homeOdds.normalizedImplied}</td>
              <td>{homePriceImpact}</td>
              <td>{homeLiquidity.positions}</td>
              <td>{homeLiquidity.usd}</td>
              <td>{homeBonus}</td>
            </tr>
            <tr>
              <td>Draw</td>
              <td>{drawOdds.american}</td>
              <td>{drawOdds.decimal}</td>
              <td>{drawOdds.normalizedImplied}</td>
              <td>{drawPriceImpact}</td>
              <td>{drawLiquidity.positions}</td>
              <td>{drawLiquidity.usd}</td>
              <td>{drawBonus}</td>
            </tr>
            <tr>
              <td>Away</td>
              <td>{awayOdds.american}</td>
              <td>{awayOdds.decimal}</td>
              <td>{awayOdds.normalizedImplied}</td>
              <td>{awayPriceImpact}</td>
              <td>{awayLiquidity.positions}</td>
              <td>{awayLiquidity.usd}</td>
              <td>{awayBonus}</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default MarketCard
