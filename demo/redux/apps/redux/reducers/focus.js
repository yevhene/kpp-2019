import { FOCUS_POKEMON } from '../actions/focus'

export default function focus(state = null, action) {
  switch (action.type) {
  case FOCUS_POKEMON:
    return action.pokemon
  default:
    return state
  }
}
