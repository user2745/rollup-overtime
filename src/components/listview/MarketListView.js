import React, { useState, useEffect } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { chainIds } from '../scripts/SupportedChains'
import ErrorMessage from '../ui/ErrorMessage'
import Loader from '../ui/Loader'

const MarketListView = () => {
  const [activeTab, setActiveTab] = useState('base')
  const [markets, setMarkets] = useState([])
  const [chain, setActiveChain] = useState(8453)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const url = `https://api.thalesmarket.io/overtime/networks/${chain}/markets?ungroup=true`

  useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMarkets(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })
  }, [url])

  if (isLoading) return Loader()
  if (error) return ErrorMessage()

  if (!markets) {
    return <p>Error: Data could not be fetched.</p>
  }

  return (
    <Tabs
      id="market-tabs"
      activeKey={activeTab}
      onSelect={(tab) => setActiveTab(tab)}
      className="mb-3"
    >
      <Tab eventKey="base" title="Base">
        {markets && (
          <div className="market-list">
            {markets.map((market) => (
              <div key={market.gameId}>
                <h2>{market.homeTeam}</h2>
                <p>{market.awayTeam}</p>
              </div>
            ))}
          </div>
        )}
      </Tab>
      <Tab eventKey="arbitrum" title="Arbitrium">
        {markets && (
          <div className="market-list">
            {markets.map((market) => (
              <div key={market.gameId}>
                <h2>{market.homeTeam}</h2>
                <p>{market.awayTeam}</p>
              </div>
            ))}
          </div>
        )}
      </Tab>
      <Tab eventKey="optimism" title="Optimism">
        {markets && (
          <div className="market-list">
            {markets.map((market) => (
              <div key={market.gameId}>
                <h2>{market.homeTeam}</h2>
                <p>{market.awayTeam}</p>
              </div>
            ))}
          </div>
        )}
      </Tab>
    </Tabs>
  )
}

export default MarketListView
