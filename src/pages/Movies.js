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
  console.log("pageNum",pageNum);
  useEffect(()=>{dispatch(movieAction.getOtherMovies(pageNum))},[pageNum]);
  useEffect(()=>{dispatch({type:"PageClicked",payload:{num:1}})},[])
  
  return (
    
    <div className='movies-page'>
      <Container>
        <Row>
          <Col xs={3}>
            sds
          </Col>
          <Col>
          <Row>
            {movieCard.results&&movieCard.results.map((movie)=>(
              <Col xs={6}>
            <MoviePageMovieCard movie={movie}/>
            </Col>

            ))}
            
            
            
            
          </Row>
          </Col>
        </Row>
      <Pagination/>
      </Container>
    </div>
  )
}

export default Movies