import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/sign-out'

const CURRENT_USER_KEY = 'matches.currentUser'
const users = [
  {
    _id: 1,
    name: 'Melvin Zehl',
    email: 'melvin@codaisseur.nl',
  }
  {
    _id: 2,
    name: 'Vincent Stoop',
    email: 'vincent@codaisseur.nl',
  }
]


const initialState = JSON.parse(localStorage.getItem(CURRENT_USER_KEY))

export default (state = users, { type, payload }) => {
  switch(type) {
    case USER_SIGNED_IN :
      const currentUser = Object.assign({}, payload)
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser))
      return currentUser

    case USER_SIGNED_OUT :
      localStorage.removeItem(CURRENT_USER_KEY)
      return null

    default :
      return state
  }
}
