import { createStore as reduxCreateStore } from "redux"

const initialState = {
  menuState: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN": 
      return {
        ...state, menuState: true
      }
    case "CLOSE": 
      return {
        ...state, menuState: false
      }
    default: 
      return state
  }
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore

