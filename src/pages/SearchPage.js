import React from 'react'
import {Container} from 'react-bootstrap/';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import SearchMovies from '../components/SearchMovies';




const SearchPage = () => {
    
    const dispatch=useDispatch();
    const keyword=useSelector(state=>state.movie.searchKeyword);
    
    useEffect(()=>{
        dispatch(movieAction.getSearchMovie(keyword))
        
      },[keyword])
      const movie=useSelector(state=>state.movie.getSearchMovie);
      
     
  return (
    <div className='search-page-margin'>
        <Container>
          {movie.results&&movie.results.length!=0?movie.results.map((movie)=><SearchMovies movie={movie}/>)
          :
          <div className='no-result'>
            <div>🔍</div>
            <div>검색결과가 없습니다.</div>
            
          </div>}
            
        </Container>
    </div>
  )
}

export default SearchPage