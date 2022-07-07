import React from 'react'
import Router from './routes/Router'
import './App.css'
import GlobalState from './Global/GlobalState'

function App() {
  return (
    <div className="App">
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  )
}

export default App