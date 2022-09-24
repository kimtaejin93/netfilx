import React from 'react'
import { useSelector } from 'react-redux'

const MovieCard = ({item}) => {
  const movieGenre=useSelector(state=>state.movie.movieGenre);
  
  return (
     <div className='card-size'>
      <div className="card" 
        style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}`+")",}}>
      
      <div className='overlay'>
      <div className='title'>
        <h3>{item.title}</h3>
        <div className='genre-area'>{item.genre_ids.map((id)=>
          <div className='genre'>
            {movieGenre.find((item)=>item.id==id).name}
            </div>
        )}</div>
        <div className='movie-overview'>
          <div>{item.overview}</div>
        </div>
      </div>
      {console.log(item)}
      
      </div>
      
    
      </div>
      
    </div>
      
    
  )
}

export default MovieCard