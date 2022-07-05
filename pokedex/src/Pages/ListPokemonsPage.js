import React from 'react'
import CardPokemon from '../Components/CardPokemon'
import { useNavigate } from 'react-router-dom'

// Imagens importadas
import logo from '../images/pokemon-logo.png'
import { goToHomePage, goToPokedexPage } from '../routes/coordinator'
import { useRequestData } from '../Hooks/useRequestData'

const ListPokemonsPage = () => {
  const navigate = useNavigate()
  const pokemons = useRequestData(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
  const listaDePokemons = pokemons.results.map((dado) => {
    return <CardPokemon
      nome={dado}
      pagina={'pokemons'}
    />
  })

  return (
    <div>
      <header className="header-pages">
        <img className="logo-img" src={logo} alt="Logotipo do Pokemon" />
        <div className='header-botoes'>
          <button onClick={() => goToHomePage(navigate)}>Início</button>
          <button onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
        </div>
      </header>
      {listaDePokemons}
    </div>
  )
}

export default ListPokemonsPage
