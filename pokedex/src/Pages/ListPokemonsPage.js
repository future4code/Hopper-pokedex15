import React, { useState } from 'react'
import CardPokemon from '../Components/CardPokemon'
import { useNavigate } from 'react-router-dom'

// Imagens importadas
import logo from '../images/pokemon-logo.png'
import { goToHomePage, goToPokedexPage } from '../routes/coordinator'
import { useRequestData } from '../hooks/useRequestData'

const ListPokemonsPage = () => {
  const navigate = useNavigate()
  // const [pokemons,setPokemons] = useState([])
  const pokemons = useRequestData(
    [],
    'https://pokeapi.co/api/v2/pokemon/?limit=151'
  )
  console.log(pokemons)

  return (
    <div>
      <header className="header-pages">
        <img className="logo-img" src={logo} alt="Logotipo do Pokemon" />
        <div className="header-botoes">
          <button onClick={() => goToHomePage(navigate)}>Início</button>
          <button onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
        </div>
      </header>
      <main>
        {' '}
        {pokemons &&
          pokemons.map(dado => {
            return (
              <CardPokemon key={dado.name} pokemon={dado} pagina={'pokemons'} />
            )
          })}
      </main>
    </div>
  )
}

export default ListPokemonsPage
