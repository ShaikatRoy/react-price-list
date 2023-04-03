import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Dashboard from './components/Dashboard/Dashboard'
import Phonebar from './components/Phonebar/Phonebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-7xl text-purple-500'>Hello form tailwind</h1>
      <PriceList/>
      <Dashboard></Dashboard>
      <Phonebar></Phonebar>

    </div>
  )
}

export default App
