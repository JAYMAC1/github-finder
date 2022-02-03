import React from 'react'

const RepoList = ({ repos }) => {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>Top Repositories</h2>
      </div>
      {repos.map((repo) => (
        <div key={repo.name}>{repo.name}</div>
      ))}
    </div>
  )
}

export default RepoList
