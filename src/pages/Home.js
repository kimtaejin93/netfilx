import React from 'react'
import { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import Banner from '../components/Banner';
import { useDispatch,useSelector } from 'react-redux';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
  const dispatch=useDispatch();
  const {popularMovies,topRatedMovies,upComingMovies}=useSelector((state)=>state.movie)
  
    useEffect(()=>{
    dispatch(movieAction.getMovies())
    
  },[])
  
  return (
    <div className='home-mg'>
      {popularMovies.results&&<Banner movie={popularMovies.results[0]}/>}
      <h1>Popular Movie</h1>
      {popularMovies.results&&<MovieSlide movies={popularMovies}/>}
      <h1>Top rated Movie</h1>
      {topRatedMovies.results&&<MovieSlide movies={topRatedMovies}/>}
      <h1>Upcoming Movie</h1>
      {upComingMovies.results&&<MovieSlide movies={upComingMovies}/>}
    </div>
  )
}

export default Home;