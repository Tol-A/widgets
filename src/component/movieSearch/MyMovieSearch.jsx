import { useState } from 'react';
import './MyMovieSearchStyle.css'
import axios from 'axios';
import Details from './Details'
import Search from './Search';
import MovieCarts from './MovieCarts';


function MyMovieSearch() {
  const [state, setState] = useState({
    search: '',
    results: [],
    selected: {},
  })

const handleInput = (e) => {
  const search = e.target.value;
    setState((prevState) => {
      return {...prevState, search: search}
    })
}

const openDetail = (id) => {
  axios.get('http://www.omdbapi.com/?i='+id+'&apikey=7f72af3e')
  .then(({data}) => {
    setState((prevState) => {
      return {...prevState, selected: data}})
  })
    .catch(err => console.log(err))
 }

const searchResult = (e) => {
  if(e.key === 'Enter') {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=7f72af3e'+"&s="+state.search)
    .then(res => {
      setState(prevState => {
        return {...prevState, results: res.data.Search}
      })
    })
    .catch( error => console.log(error.res))

  }
}
const handleClose = () => {
  setState(prevState => {
    return {...prevState, selected: {} }
  })
}

  return (
    <>
      {typeof state.selected.Title != 'undefined' ? 
      <Details
        selected = {state.selected}
        handleClose = {handleClose}
      />
      : 
        <>
          <Search
            handleInput = {handleInput}
            searchResult = {searchResult}
          />
          <MovieCarts
            state = {state}
            openDetail = {openDetail}
          />
      </>
      } 
    </>
  )
}

export default MyMovieSearch