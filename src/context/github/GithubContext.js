import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const iniialState = {
    users: [],
    user: {},
    repos: [],
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

  // get a single user from Github
  const getUser = async (login) => {
    setLoading()

    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    if (res.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await res.json()
      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    }
  }

  // get a single user from Github
  const getRepos = async (login) => {
    setLoading()

    const res = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    if (res.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await res.json()
      dispatch({
        type: 'GET_REPOS',
        payload: data,
      })
    }
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
        user: state.user,
        repos: state.repos,
        getRepos,
        getUser,
        searchUsers,
        clearUsers,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
