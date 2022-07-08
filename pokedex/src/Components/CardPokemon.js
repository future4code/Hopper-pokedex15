import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListDetailsPokemonPage } from '../routes/coordinator'
import { useContext } from 'react'
import GlobalStateContext from '../Global/GlobalStateContext'
import axios from 'axios'

function CardPokemon(props) {
  const navigate = useNavigate()
  const {states,setters,requests,funcoes} = useContext(GlobalStateContext)

  const verDetalhes = () => {
    requests.getDetails(props.nome)
    goToListDetailsPokemonPage(navigate)
  }

  return (
    <main>
      <div className="area-cards">
        <div className="card">
          <img src={props.imagem}/>
          {/* <p>{props.nome}</p> */}
        </div>
        <div className="buttons-card">
          {props.pagina === 'pokedex' ? (
            <button className="button-esquerdo"
            onClick={() => funcoes.rmPokedex(props.dado)}
            >Remover da Pokedex</button>
          ) : (
            <button className="button-esquerdo"
            onClick={() => funcoes.addPokedex(props.dado)}
            >Adicionar a Pokedex</button>
          )}
          <button
            className="button-direito"
            onClick={() => verDetalhes()}
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    </main>
  )
}

export default CardPokemon
