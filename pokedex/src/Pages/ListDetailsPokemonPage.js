import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
// import axios from 'axios'
import GlobalStateContext from '../Global/GlobalStateContext'

// Imagens importadas
import logo from '../images/pokemon-logo.png'
import { goToListPokemonsPage, goToPokedexPage } from '../routes/coordinator'

const ListDetailsPokemonPage = () => {
  const navigate = useNavigate()
  const { nome, pagePokedex } = useParams()

  const { states, setters, requests } = useContext(GlobalStateContext)

  useEffect(() => {
    let listPokedex = []
    if (pagePokedex) {
      listPokedex = states.pokedex.find(item => {
        return item.nome === nome
      })
    } else {
      listPokedex = states.pokemons.find(item => {
        return item.nome === nome
      })
    }

    if (!listPokedex) {
      requests.getDetails()
    } else {
      setters.setDetalhes(listPokedex)
    }
  }, [])

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
      <main className="main-detail">
        {states.detalhes && states.detalhes.sprites && (
          <div className="page-detail">
            <div className="images-details">
              <img
                className="img-detail"
                src={states.detalhes.sprites.front_default}
              />
              <img
                className="img-detail"
                src={states.detalhes.sprites.back_default}
              />
            </div>
            <div className="poderes">
              <h2>Poderes</h2>
              {states.detalhes &&
                states.detalhes.stats.map(stat => {
                  return (
                    <p key={stat.stat.name}>
                      <strong>{stat.stat.name}: </strong>
                      {stat.base_stat}
                    </p>
                  )
                })}
            </div>
            <div className="tipos">
              {states.detalhes &&
                states.detalhes.types.map(type => {
                  return (
                    <p key={type.type.name}>{type.type.name}</p>
                  )
                })}
            </div>
            <div className="ataques">
              <h2>Principais ataques</h2>
              {states.detalhes &&
                states.detalhes.moves.map((move, index) => {
                  return (
                    index < 5 && <p key={move.move.name}>{move.move.name}</p>
                  )
                })}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default ListDetailsPokemonPage
