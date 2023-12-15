import React from 'react'
import './MyMovieSearchStyle.css'

function Search({handleInput, searchResult}) {
  return (
    <div className='search'>
      <h1>Movie Search</h1>
      <input
        onChange={handleInput}
        onKeyDown = {searchResult}
        name = 'movie'
        placeholder='click to search Enter'
      />
  </div>
  )
}

export default Search