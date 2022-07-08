import axios from 'axios'
import { useState } from 'react'
// import { useRequestData } from "../Hooks/useRequestData"
import GlobalStateContext from './GlobalStateContext'

const GlobalState = props => {
  const [nomes, setNomes] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [detalhes, setDetalhes] = useState({})

  const getNomes = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => setNomes(response.data.results))
      .catch(err => console.log(err.response))
  }

  const getPokemons = () => {
    const listaPokemons = []

    for (let i = 1; i < 151; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => {
          listaPokemons.push(response.data)
          if (listaPokemons.length === 150) {
            const orderListPokemons = listaPokemons.sort((a, b) => {
              if (a.id > b.id) {
                return 1
              }
              if (a.id < b.id) {
                return -1
              }
              return 0
            })
            setPokemons(orderListPokemons)
          }
        })

        .catch(err => console.log(err.response))
    }
  }

  const addPokedex = dado => {
    const listaPokedex = pokedex

    listaPokedex.push(dado)

    const orderListPokedex = listaPokedex.sort((a, b) => {
        if (a.id > b.id) {
          return 1
        }
        if (a.id < b.id) {
          return -1
        }
        return 0
      })
    setPokedex(orderListPokedex)
  }

  const rmPokedex = dado => {
    const listaPokedex = pokedex.filter((item,index,array)=>{
        return (item.id !== dado.id)
    })

    // listaPokedex.filter((item,index,array)=>{
    //     return (item.id !== dado.id)
    // })
    
    console.log(listaPokedex)
    setPokedex(listaPokedex)
  }

  const getDetails = nome => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
      .then(response => setDetalhes(response.data))
      .catch(err => console.log(err.response.message))
  }
  console.log(detalhes)

  const states = { nomes, pokemons, pokedex, detalhes }
  const setters = { setNomes, setPokemons, setPokedex, setDetalhes }
  const requests = { getNomes, getPokemons, getDetails }
  const funcoes = {addPokedex,rmPokedex}

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests, funcoes}}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState
