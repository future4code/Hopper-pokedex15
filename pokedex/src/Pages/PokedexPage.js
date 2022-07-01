import React from 'react'
import CardPokemonPokedex from '../Components/CardPokemonPokedex'
import { useNavigate } from 'react-router-dom'
import logo from '../images/pokemon-logo.png'

const PokedexPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <header className="header-pages">
        <img className="logo-img" src={logo} alt="Logotipo do Pokemon" />
        <div className="header-botoes">
          <button onClick={() => navigate('/pokemons/list')}>
            Lista de Pokemons
          </button>
        </div>
      </header>
      <CardPokemonPokedex />
    </div>
  )
}

export default PokedexPage
