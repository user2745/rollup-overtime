import Header from './components/header/Header'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './components/routes/Routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesComponent />
    </BrowserRouter>
  )
}

export default App
