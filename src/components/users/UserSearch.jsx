import React, { useState, useContext } from 'react'
import AlertContext from '../../context/alret/AlertContext'
import GithubContext from '../../context/github/GithubContext'

const UserSearch = () => {
  const [search, setSearch] = useState('')

  const { users, searchUsers, clearUsers } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search.trim() === '') {
      setAlert('please enter a search term', 'error')
    } else {
      searchUsers(search)
      setSearch('')
    }
  }
  return (
    <div className='grid  grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'></div>
          <div className='relative'>
            <input
              type='text'
              className='w-full pr-40 bg-gray-200 input input-lg text-black'
              placeholder='Search'
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              type='submit'>
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className='btn btn-ghost btn-gl' onClick={() => clearUsers()}>
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
