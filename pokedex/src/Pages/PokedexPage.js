import React from 'react'
import CardPokemon from '../Components/CardPokemon'
import { useNavigate } from 'react-router-dom'
import logo from '../images/pokemon-logo.png'
import { goToListPokemonsPage } from '../routes/coordinator'
import { useContext } from 'react'
import GlobalStateContext from '../Global/GlobalStateContext'

const PokedexPage = () => {
  const navigate = useNavigate()
  const { states, setters, requests } = useContext(GlobalStateContext)

  console.log(states.pokedex)

  const listaDaPokedex =
    states.pokedex &&
    states.pokedex.map((dado, index, array) => {
      return (
        <CardPokemon
          nome={dado.name}
          imagem={dado.sprites.front_default}
          dado={dado}
          pagina={'pokedex'}
        />
      )
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
      <main>{listaDaPokedex}</main>
    </div>
  )
}

export default PokedexPage
