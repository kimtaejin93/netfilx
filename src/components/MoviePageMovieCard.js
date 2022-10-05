import React from 'react'
import {Row,Col,Badge} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MoviePageMovieCard = ({movie}) => {
  const navigate=useNavigate();
    const MovieClick=()=>{
    
       
        
        navigate(`/movies/${movie.id}`)
      }
 console.log(movie);
  
  return (
    
    <div className='MovieSize' onClick={MovieClick} style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`+")",}}>
      <div className='MoviesMovieCard'>
        <Row>
          <Col xs="10">
          <h3>{movie.title}</h3>
          <div>{movie.release_date}</div>
          <br></br>
          <br></br>
          {movie.genre_ids.map(id=><Badge bg="danger">{id}</Badge>)}
          <br></br>
          <br></br>
          <p className='moviePage-overview'>{movie.overview}</p>
          </Col>      
          <Col>
          
          </Col>
        </Row>
      </div>

    </div>
    
  )
}

export default MoviePageMovieCard