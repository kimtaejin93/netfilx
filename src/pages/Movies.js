import React from 'react'
import {Container,Row,Col} from 'react-bootstrap/';
import MoviePageMovieCard from '../components/MoviePageMovieCard';
import { useSelector,useDispatch } from 'react-redux/'
import { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import Pagination from '../components/Pagination';




const Movies = () => {
  const dispatch=useDispatch();
  const movieCard=useSelector((state)=>state.movie.getOtherMovies);
  const pageNum=useSelector(state=>state.movie.pageNum);
  const movieGenre=useSelector(state=>state.movie.movieGenre);
  
  
  useEffect(()=>{dispatch(movieAction.getOtherMovies(pageNum))},[pageNum]);
  useEffect(()=>{dispatch(movieAction.getMovies())},[]);
  useEffect(()=>{dispatch({type:"PageClicked",payload:{num:1}})},[]) //1로초기화 시켜주려고함
  
  return (
    
    <div className='movies-page'>
      <Container>
          <Row>
            {movieGenre&&movieCard.results&&movieCard.results.map((movie)=>(
              <Col md={6}>
            <MoviePageMovieCard movie={movie} genre={movieGenre}/>
            </Col>
            ))}
             
          </Row>
          
        
      <Pagination/>
      </Container>
    </div>
  )
}

export default Movies