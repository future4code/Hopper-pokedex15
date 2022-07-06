import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListDetailsPokemonPage } from '../routes/coordinator'

function CardPokemonList(props) {
  const navigate = useNavigate()

  return (
    <main>
      <div className="area-cards">
        <div className="card">
          <img src=""></img>
          <p>{props.pokemon.name}</p>
        </div>
        <div className="buttons-card">
          {props.pagina === 'pokedex' ? (
            <button className="button-esquerdo">Remover da Pokedex</button>
          ) : (
            <button className="button-esquerdo">Adicionar a Pokedex</button>
          )}
          <button
            className="button-direito"
            onClick={() => goToListDetailsPokemonPage(navigate)}
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    </main>
  )
}

export default CardPokemonList
