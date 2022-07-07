import React from 'react'
import CardPokemon from '../Components/CardPokemon'
import { useNavigate } from 'react-router-dom'
import logo from '../images/pokemon-logo.png'
import { goToListPokemonsPage } from '../routes/coordinator'

const PokedexPage = () => {
  const navigate = useNavigate()
  const pokemons = []
  const listaDePokemons = pokemons && pokemons.map((dado) => {
    return <CardPokemon
      pokemon={dado}
      pagina={'pokedex'}
    />
  })

  return (
    <div>
      <header className="header-pages">
        <img className="logo-img" src={logo} alt="Logotipo do Pokemon" />
        <div className="header-botoes">
          <button onClick={() => goToListPokemonsPage(navigate)}>
            Lista de Pokemons
          </button>
        </div>
      </header>
      {listaDePokemons}
    </div>
  )
}

export default PokedexPage
