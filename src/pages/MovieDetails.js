import React from 'react'
import { useSelector } from 'react-redux'
import {Container,Row,Col,Badge} from 'react-bootstrap/';


const MovieDetails = () => {
  const item=useSelector(state=>state.movie.clickedMovie);
  const movieGenre=useSelector(state=>state.movie.movieGenre);
  console.log("무비디테일테이지",item)
  return (
    <div className='detail-page'>
      <Container>
        <Row className='detail-card'>
          <Col><img className='detail-card-image' src={`https://www.themoviedb.org/t/p/w1280${item.poster_path}`}/></Col>
          <Col><h1>{item.title}</h1>
          
          {item.genre_ids.map((id)=><Badge bg="danger">{
            movieGenre.find((genre)=>genre.id==id).name}
            </Badge>
          )}
          
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieDetails