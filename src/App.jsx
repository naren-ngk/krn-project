import React from 'react'
import './App.css'
import { NavBar } from '@/components'
import { navItems } from '@/constants'
import Portfolio from '@/pages/Portfolio'

function App() {
  return (
    <div>
      <NavBar navItems={navItems} />
      <Portfolio />
    </div>
  )
}

export default App
