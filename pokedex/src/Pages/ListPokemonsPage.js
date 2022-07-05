import React from 'react'
import CardPokemon from '../Components/CardPokemon'
import { useNavigate } from 'react-router-dom'

// Imagens importadas
import logo from '../images/pokemon-logo.png'
import { goToHomePage, goToPokedexPage } from '../routes/coordinator'

const ListPokemonsPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <header className="header-pages">
        <img className="logo-img" src={logo} alt="Logotipo do Pokemon" />
        <div className='header-botoes'>
          <button onClick={() => goToHomePage(navigate)}>Início</button>
          <button onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
        </div>
      </header>
      <CardPokemon
        pagina={'pokemons'}
      />
    </div>
  )
}

export default ListPokemonsPage
