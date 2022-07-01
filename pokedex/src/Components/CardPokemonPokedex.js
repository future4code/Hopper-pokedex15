import React from 'react'
import { useNavigate } from 'react-router-dom'

function CardPokemonPokedex() {
  const navigate = useNavigate()
  return (
    <div className="area-cards">
      <div className="card">
        <img src=""></img>
        <div className="buttons-card">
          <button className="button">Remover da Pokedex</button>
          <button
            className="button"
            onClick={() => navigate('/pokemon/detail')}
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPokemonPokedex
