import React from 'react'
import { Routes, Route } from 'react-router-dom'
import OvertimeMarkets from '../carousel/OvertimeMarkets'
import MarketListView from '../listview/MarketListView'

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<OvertimeMarkets />} />
      <Route path="/markets" element={<MarketListView />} />
    </Routes>
  )
}

export default RoutesComponent
