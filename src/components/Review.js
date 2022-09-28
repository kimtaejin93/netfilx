import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Review = ({movieReview}) => {

  return (
    <Carousel className='review-box' responsive={responsive}>
        {movieReview.map((review)=><div className='review'><h4>{`Author-ID : ${review.author}`}</h4>{review.content}</div>)}
        </Carousel>
  )
  }

export default Review