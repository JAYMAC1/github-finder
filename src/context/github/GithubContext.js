import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const iniialState = {
    users: [],
    isPending: false,
  }

  const [state, dispatch] = useReducer(githubReducer, iniialState)

  // get initial users from Github (only for testing)
  const fetchUsers = async () => {
    setLoading()
    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    const data = await res.json()
    dispatch({
      type: 'GET_USERS',
      payload: data,
    })
  }

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    })
  }

  return (
    <GithubContext.Provider
      value={{ users: state.users, isPending: state.isPending, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
