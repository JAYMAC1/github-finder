import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'

const User = () => {
  const { getUser, user } = useContext(GithubContext)

  console.log(user)

  const params = useParams()

  useEffect(() => {
    getUser(params.gitUser)
  }, [params.gitUser])

  return <div>{user.login}</div>
}

export default User
