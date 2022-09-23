import React from 'react'

const MovieCard = ({item}) => {
  return (
     <div className='card-size'>
      <div className="card" 
        style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}`+")",}}>
      
      <div className='overlay'>
      <div className='title'>
        <h3>{item.title}</h3>
      </div>
      </div>
      
    
      </div>
      
    </div>
      
    
  )
}

export default MovieCard