import React from 'react'
import { useNavigate } from 'react-router-dom'

// Imagens importadas
import logo from '../images/pokemon-logo.png'

const ListDetailsPokemonPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <header className="header-pages">
        <img className="logo-img" src={logo} alt="Logotipo do Pokemon" />
        <div className="header-botoes">
          <button onClick={() => navigate('/pokemons/list')}>
            Lista de Pokemons
          </button>
          <button onClick={() => navigate('/pokedex')}>Pokedex</button>
        </div>
      </header>
    </div>
  )
}

export default ListDetailsPokemonPage
