import React, { useState } from 'react'
import { Tab, Tabs, InputGroup, FormControl } from 'react-bootstrap'
import { chainIds } from '../scripts/SupportedChains'
import ErrorMessage from '../ui/ErrorMessage'
import Loader from '../ui/Loader'
import MarketCard from '../market/MarketCard'
import useFetch from '../scripts/useFetch'
import '../listview/searchBar.css'

const MarketListView = () => {
  const [activeTab, setActiveTab] = useState('base')
  const [chain, setActiveChain] = useState(8453)
  const [searchTerm, setSearchTerm] = useState('')
  const url = `https://api.thalesmarket.io/overtime/networks/${chain}/markets?ungroup=true`
  const { data, loading, error } = useFetch(url)

  if (loading) return Loader()
  if (error) return ErrorMessage()

  if (!data) {
    return <p>Error: Data could not be fetched.</p>
  }

  const filteredData = data.filter((market) => {
    const searchTermLower = searchTerm.toLowerCase()
    const marketHomeTeamLower = market.homeTeam.toLowerCase()
    const marketAwayTeamLower = market.awayTeam.toLowerCase()

    return (
      marketHomeTeamLower.includes(searchTermLower) ||
      marketAwayTeamLower.includes(searchTermLower)
    )
  })

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
        <FormControl
          placeholder="Search markets"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </InputGroup>
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
              {filteredData.map((market) => (
                <MarketCard key={market.gameId} market={market} />
              ))}
            </div>
          )}
        </Tab>
        <Tab eventKey="arbitrum" title="Arbitrium">
          {data && (
            <div className="market-list">
              {filteredData.map((market) => (
                <MarketCard key={market.gameId} market={market} />
              ))}
            </div>
          )}
        </Tab>
        <Tab eventKey="optimism" title="Optimism">
          {data && (
            <div className="market-list">
              {filteredData.map((market) => (
                <MarketCard key={market.gameId} market={market} />
              ))}
            </div>
          )}
        </Tab>
      </Tabs>
    </>
  )
}

export default MarketListView
