import React from 'react'
import {Container,Row,Col} from 'react-bootstrap/';
import MoviePageMovieCard from '../components/MoviePageMovieCard';
import { useSelector,useDispatch } from 'react-redux/'
import { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import Pagination from '../components/Pagination';
import MovieFilter from '../components/MovieFilter';



const Movies = () => {
  const dispatch=useDispatch();
  const movieCard=useSelector((state)=>state.movie.getOtherMovies);
  const pageNum=useSelector(state=>state.movie.pageNum);
  const movieGenre=useSelector(state=>state.movie.movieGenre);
  
  console.log("pageNum",pageNum);
  useEffect(()=>{dispatch(movieAction.getOtherMovies(pageNum))},[pageNum]);
  useEffect(()=>{dispatch(movieAction.getMovies())},[]);
  useEffect(()=>{dispatch({type:"PageClicked",payload:{num:1}})},[]) //1로초기화 시켜주려고함
  console.log("movieCard",movieCard);
// movieCard.sort(function(a,b){
//   if(a.results.id>b.results.id){
//     return 1;
//   }
//   if(b.results.id>a.results.id){
//     return -1;
//   }
//   return 0;
// }
// )
console.log("movieCard후",movieCard);
  return (
    
    <div className='movies-page'>
      <Container>
        <Row>
          <Col xs={3}>
            <MovieFilter/>
          </Col>
          <Col>
          <Row>
            {movieGenre&&movieCard.results&&movieCard.results.map((movie)=>(
              <Col xs={6}>
            <MoviePageMovieCard movie={movie} genre={movieGenre}/>
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