import React from 'react'
import { useNavigate } from 'react-router-dom'

// Imagens importadas
import logo from '../images/pokemon-logo.png'
import { goToListPokemonsPage, goToPokedexPage } from '../routes/coordinator'

const ListDetailsPokemonPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <header className="header-pages">
        <img className="logo-img" src={logo} alt="Logotipo do Pokemon" />
        <div className="header-botoes">
          <button onClick={() => goToListPokemonsPage(navigate)}>
            Lista de Pokemons
          </button>
          <button onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
        </div>
      </header>
    </div>
  )
}

export default ListDetailsPokemonPage
