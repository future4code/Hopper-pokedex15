import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListDetailsPokemonPage } from '../routes/coordinator'

function CardPokemonList(props) {
  const navigate = useNavigate()

  return (
    <div className="area-cards">
      <div className="card">
        <img src=""></img>
        <div className="buttons-card">
          {props.pagina === 'pokedex' ? 
            <button className="button">Remover da Pokedex</button>
          : <button className="button">Adicionar a Pokedex</button>
          }
          <button className="button"onClick={() => goToListDetailsPokemonPage(navigate)}>
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPokemonList
