import React from 'react'
import {Row,Col,} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchMovies = ({movie}) => {
    const navigate=useNavigate();
    const MovieClick=()=>{
    
       
        
        navigate(`/movies/${movie.id}`)
      }
  return (
    <div className='Search-MovieSize' onClick={MovieClick} style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`+")",}}>
      <div>
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

export default SearchMovies