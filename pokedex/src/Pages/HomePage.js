import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToListPokemonsPage } from '../routes/coordinator'
import { useContext } from 'react'
import GlobalStateContext from '../Global/GlobalStateContext'

const HomePage = () => {
  const navigate = useNavigate()
  const {states,setters,requests} = useContext(GlobalStateContext)

  return (
    <div className="home-page">
      <button onClick={() => goToListPokemonsPage(navigate)}>Entrar</button>
    </div>
  )
}

export default HomePage
