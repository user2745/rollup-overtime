import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { chainIds } from '../scripts/SupportedChains'
import ErrorMessage from '../ui/ErrorMessage'
import Loader from '../ui/Loader'
import MarketCard from '../market/MarketCard'
import useFetch from '../scripts/useFetch'

const MarketListView = () => {
  const [activeTab, setActiveTab] = useState('base')
  const [chain, setActiveChain] = useState(8453)
  const url = `https://api.thalesmarket.io/overtime/networks/${chain}/markets?ungroup=true`
  const { data, loading, error } = useFetch(url)

  if (loading) return Loader()
  if (error) return ErrorMessage()

  if (!data) {
    return <p>Error: Data could not be fetched.</p>
  }

  return (
    <Tabs
      id="market-tabs"
      activeKey={activeTab}
      onSelect={(chainName) => {
        setActiveTab(chainName)
        setActiveChain(chainIds[chainName])
      }}
      className="mb-3"
    >
      <Tab eventKey="base" title="Base">
        {data && (
          <div className="market-list">
            {data.map((market) => (
              <MarketCard key={market.gameId} market={market} />
            ))}
          </div>
        )}
      </Tab>
      <Tab eventKey="arbitrum" title="Arbitrium">
        {data && (
          <div className="market-list">
            {data.map((market) => (
              <MarketCard key={market.gameId} market={market} />
            ))}
          </div>
        )}
      </Tab>
      <Tab eventKey="optimism" title="Optimism">
        {data && (
          <div className="market-list">
            {data.map((market) => (
              <MarketCard key={market.gameId} market={market} />
            ))}
          </div>
        )}
      </Tab>
    </Tabs>
  )
}

export default MarketListView
