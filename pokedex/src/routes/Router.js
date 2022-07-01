import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from '../Pages/Error'
import HomePage from '../Pages/HomePage'
import ListDetailsPokemonPage from '../Pages/ListDetailsPokemonPage'
import ListPokemonsPage from '../Pages/ListPokemonsPage'
import PokedexPage from '../Pages/PokedexPage'

// Componentes de cada tela criados e associados à uma rota

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/pokemons/list'} element={<ListPokemonsPage />} />
        <Route path={'/pokedex'} element={<PokedexPage />} />
        <Route path={'/pokemon/detail'} element={<ListDetailsPokemonPage />} />
        <Route path={'*'} element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
