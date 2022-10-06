import React from 'react'
import {Container,Row,Col,Badge} from 'react-bootstrap/';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import SearchMovies from '../components/SearchMovies';
import { useNavigate } from 'react-router-dom';



const SearchPage = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const keyword=useSelector(state=>state.movie.searchKeyword);
    console.log("keyw44ord",keyword)
    useEffect(()=>{
        dispatch(movieAction.getSearchMovie(keyword))
        
      },[keyword])
      const movie=useSelector(state=>state.movie.getSearchMovie);
      
     
  return (
    <div className='search-page-margin'>
        <Container>
          {movie.results&&movie.results.length!=0?movie.results.map((movie)=><SearchMovies movie={movie}/>):<div><h1>검색결과없습니다.</h1><h1>검색결과없습니다.</h1><h1>검색결과없습니다.</h1><h1>검색결과없습니다.</h1><h1>검색결과없습니다.</h1><h1>검색결과없습니다.</h1><h1>검색결과없습니다.</h1></div>}
            
        </Container>
    </div>
  )
}

export default SearchPage