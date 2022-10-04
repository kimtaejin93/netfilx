import React from 'react'
import {Row,Col,} from 'react-bootstrap';

const MoviePageMovieCard = ({movie}) => {
  
 
  
  return (
    
    <div className='MovieSize' style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`+")",}}>
      <div className='MoviesMovieCard'>
        <Row>
          <Col xs="10">
          <h3>{movie.title}</h3>
          {movie.release_date}
          </Col>      
          <Col>
          
          </Col>
        </Row>
      </div>

    </div>
    
  )
}

export default MoviePageMovieCard