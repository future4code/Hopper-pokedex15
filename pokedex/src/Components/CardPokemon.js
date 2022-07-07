import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListDetailsPokemonPage } from '../routes/coordinator'
import { useContext } from 'react'
import GlobalStateContext from '../Global/GlobalStateContext'
import axios from 'axios'

function CardPokemon(props) {
  const navigate = useNavigate()
  const {states,setters,requests} = useContext(GlobalStateContext)

  const verDetalhes = () => {
    requests.getDetails(props.nome)
    goToListDetailsPokemonPage(navigate)
  }

  return (
    <div className="area-cards">
      <div className="card">
        <img src={props.imagem}/>
        <p>{props.nome}</p>
        <div className="buttons-card">
          {props.pagina === 'pokedex' ? 
            <button className="button">Remover da Pokedex</button>
          : <button className="button">Adicionar a Pokedex</button>
          }
          <button className="button"onClick={() => verDetalhes()}>
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPokemon
