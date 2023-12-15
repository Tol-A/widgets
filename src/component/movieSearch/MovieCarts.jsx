import './MyMovieSearchStyle.css'

function MovieCarts({state, openDetail}) {

    if(state.results == '') {
        return <p className='textNull'>Search list is empty</p>
    }

    let content;
    if(state.results == null) {
        content = <p className='textNull'>This movie was not found</p>
    } else {
       content = 
        <>
            {state.results.map((result, index) => 
                <div 
                    className='movieCart'
                    key = {index}
                    onClick = {() => openDetail(result.imdbID) } 
                >
                    <img src = {result.Poster}  alt = '' />
                    <p>{result.Title}</p>
                </div>
            )}
        </>

    }

  return (
    <div className='movieCarts'>
        {content}      
    </div>
  )
}

export default MovieCarts