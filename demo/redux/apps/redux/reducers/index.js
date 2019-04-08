import { combineReducers } from 'redux'

import pokemons from './pokemons'
import focus from './focus'
import search1 from './search'

const rootReducer = combineReducers({
  pokemons, focus, search: search1
})

export default rootReducer
