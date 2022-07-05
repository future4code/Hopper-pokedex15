import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToListPokemonsPage } from '../routes/coordinator'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <button onClick={() => goToListPokemonsPage(navigate)}>Entrar</button>
    </div>
  )
}

export default HomePage
