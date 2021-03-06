const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isPending: false,
      }
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        isPending: false,
      }
    case 'CLEAR_USERS':
      return { users: [], isPending: false, user: {} }
    case 'SET_LOADING':
      return { ...state, isPending: true }
    default:
      return state
  }
}

export default githubReducer
