import React from 'react'
import { useSelector } from 'react-redux'
import {Container,Row,Col,Badge} from 'react-bootstrap/';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import Review from '../components/Review'



const MovieDetails = () => {
  const params = useParams();
  const dispatch=useDispatch();
  const movieReview=useSelector(state=>state.movie.movieReview);
  const detailPageMovieInfo=useSelector(state=>state.movie.detailPageMovieInfo);
  const loading=useSelector(state=>state.movie.loading)
  console.log("로딩",loading);
  console.log("무비리뷰",movieReview);
  console.log("디테일인포",detailPageMovieInfo);
  
  
  useEffect(
    ()=>{dispatch(movieAction.getMovieDetails(params))},[loading]
  )
  console.log("현재파람",params);
  
  return (
    
    <div className='detail-page'>
      <Container>
        <Row className='detail-card'>
          <Col><img className='detail-card-image' src={`https://www.themoviedb.org/t/p/w1280${detailPageMovieInfo.poster_path}`}/></Col>
          <Col>
            <Row className='detail-title'>
              <Col><h1>{detailPageMovieInfo.title}</h1></Col>
              <Col className='adult-badge'>{detailPageMovieInfo.adult?<Badge bg="danger">"18+"</Badge>:<Badge bg="success">Under 18</Badge>}</Col> 
            </Row>
            
            {detailPageMovieInfo.genres&&detailPageMovieInfo.genres.map((item)=><Badge bg="danger">{item.name}</Badge>)}
            
          
          <p className='movieDetail-overview'>
            {detailPageMovieInfo.overview}
          </p> 
          <Row>
            <Col xs={2}>
            <Badge className='detail-badge' pill bg="secondary">
              ReleaseDate
            </Badge>
            </Col>
            <Col>{detailPageMovieInfo.release_date}</Col>
          </Row>
          
          <Row>
            <Col xs={2}>
            <Badge className='detail-badge' pill bg="secondary">
              Runtime
            </Badge>
            </Col>
            <Col>{detailPageMovieInfo.runtime}Min</Col>
          </Row>
          
          </Col>

        </Row>
        <h2 className='detailPage-review-title'>
          REVIEW
        </h2>
        <div className='detailPage-review'>
        
        {movieReview.results&&<Review movieReview={movieReview.results}/>}
          
        
        </div>
       
        </Container>
    </div>
  )
}

export default MovieDetails