import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const iniialState = {
    users: [],
    user: {},
    repos: [],
    isPending: false,
  }

  const [state, dispatch] = useReducer(githubReducer, iniialState)

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
