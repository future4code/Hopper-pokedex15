import React from 'react'
import CardPokemonList from '../Components/CardPokemonList'
import { useNavigate } from 'react-router-dom'

// Imagens importadas
import logo from '../images/pokemon-logo.png'

const ListPokemonsPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <header className="header-pages">
        <img className="logo-img" src={logo} alt="Logotipo do Pokemon" />
        <div className='header-botoes'>
          <button onClick={() => navigate('/')}>Início</button>
          <button onClick={() => navigate('/pokedex')}>Pokedex</button>
        </div>
      </header>
      <CardPokemonList />
    </div>
  )
}

export default ListPokemonsPage
