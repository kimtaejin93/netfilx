import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1800 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1800, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const MovieSlide = ({movies}) => {
  return (
    <div>
        <Carousel className='movieSlide-card' responsive={responsive}>
    {movies.results.map((item)=>(<MovieCard item={item}/>))}
    
  </Carousel>
  </div>
  )
}

export default MovieSlide