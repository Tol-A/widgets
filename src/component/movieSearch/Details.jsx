import React from 'react'
import './MyMovieSearchStyle.css'

function Details({selected, handleClose}) {
  return (
   <div className='containerDetails'>
     <div className='details'>
        <img 
           src = {selected.Poster} 
           alt = ''
        />
        <div className='detail'>
           <h2>{selected.Title}</h2>
           <p>{selected.Year}</p>
           <p>Rating: {selected.imdbRating}</p>
           <p>{selected.Plot}</p>
           <button onClick = {handleClose} >Close</button>
        </div>
    </div> 
   </div>
  )
}

export default Details