import React, { useContext, useEffect, useState } from 'react'
import CardPokemon from '../Components/CardPokemon'
import { useNavigate } from 'react-router-dom'

// Imagens importadas
import logo from '../images/pokemon-logo.png'
import { goToHomePage, goToPokedexPage } from '../routes/coordinator'
import GlobalStateContext from '../Global/GlobalStateContext'

const ListPokemonsPage = () => {
  const navigate = useNavigate()
  const {states,setters,requests} = useContext(GlobalStateContext)
  
  useEffect(() => {
    requests.getNomes()
    requests.getPokemons()
  },[])

  const listaDePokemons = states.pokemons && states.pokemons.map((dado,index,array) => {
    return <CardPokemon
      nome={dado.name}
      imagem={dado.sprites.front_default}
      dado={dado}
      pagina={'pokemons'}
    />
  })

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
        {listaDePokemons}        
      </main>
    </div>
  )
}

export default ListPokemonsPage
