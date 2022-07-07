import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import GlobalStateContext from '../Global/GlobalStateContext'

// Imagens importadas
import logo from '../images/pokemon-logo.png'
import { goToListPokemonsPage, goToPokedexPage } from '../routes/coordinator'

const ListDetailsPokemonPage = () => {
  const navigate = useNavigate()
  const {states,setters,requests} = useContext(GlobalStateContext)
 
  useEffect(() => {
    console.log(states.detalhes)
  },[])

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
