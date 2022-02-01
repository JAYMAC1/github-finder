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

  // get search results from Github
  const searchUsers = async (search) => {
    setLoading()
    const params = new URLSearchParams({
      q: search,
    })
    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    const { items } = await res.json()
    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    })
  }

  // Clear user State
  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isPending: state.isPending,
        searchUsers,
        clearUsers,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
