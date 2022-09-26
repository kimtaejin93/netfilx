import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {Row,Col,Badge} from 'react-bootstrap';

const MovieCard = ({item}) => {
  const navigate=useNavigate();
  const movieGenre=useSelector(state=>state.movie.movieGenre);
  const dispatch=useDispatch();
  const MovieClick=()=>{
    
    dispatch(
      {type:"MovieClick",
      payload:{item}
    }
    )
    navigate(`/movies/${item.id}`)
  }
  return (
     <div className='card-size'>
      <div className="card" 
        style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}`+")",}}
        onClick={MovieClick}
        >
      
        <div className='overlay'>
          <div className='title'>
            <Row>
              <Col xs={8}><h3>{item.title}</h3></Col>
              <Col xs={4}>{item.adult?
             <Badge bg="danger">"18+"</Badge>:<Badge bg="success">Under 18</Badge>}</Col>
            
            </Row>
             
          <div className='genre-area'>{item.genre_ids.map((id)=>
            <div className='genre'>
              {movieGenre.find((item)=>item.id==id).name}
            </div>
        )}</div>
        <div className='movie-overview'>
          <div>{item.overview}</div>
        </div>
      </div>
      
      
      </div>
      
    
      </div>
      
    </div>
      
    
  )
}

export default MovieCard