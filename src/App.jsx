import React from 'react'
import './App.css'
import { NavBar } from '@/components'
import { navItems } from '@/constants'

function App() {
  return (
    <div>
      <NavBar navItems={navItems} />
    </div>
  )
}

export default App
