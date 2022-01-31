const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isPending: false,
      }
    case 'SET_LOADING':
      return { ...state, isPending: true }
    default:
      return state
  }
}

export default githubReducer
