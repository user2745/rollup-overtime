import React from 'react'

const MarketCard = ({ market }) => {
  return (
    <div>
      <h2>{market.homeTeam}</h2>
      <p>{market.awayTeam}</p>
    </div>
  )
}

export default MarketCard
