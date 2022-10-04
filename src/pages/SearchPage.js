import React from 'react'
import {Container,Row,Col,Badge} from 'react-bootstrap/';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';



const SearchPage = () => {
    const dispatch=useDispatch();
    const keyword=useSelector(state=>state.movie.searchKeyword);
    console.log("keyw44ord",keyword)
    useEffect(()=>{
        dispatch(movieAction.getSearchMovie(keyword))
        
      },[keyword])
      const movie=useSelector(state=>state.movie.getSearchMovie);
      console.log(movie)

  return (
    <div>
        <Container>

        </Container>
    </div>
  )
}

export default SearchPage