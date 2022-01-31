import React, { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'

const UserResults = () => {
  const [users, setUsers] = useState([])
  const [isPending, setIsPending] = useState(true)
  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    })

    const data = await res.json()
    setUsers(data)
    setIsPending(false)
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  if (!isPending) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <h3 key={user.id}>{user.login}</h3>
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
