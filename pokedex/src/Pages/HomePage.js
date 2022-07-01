import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <button onClick={() => navigate('/pokemons/list')}>Entrar</button>
    </div>
  )
}

export default HomePage
