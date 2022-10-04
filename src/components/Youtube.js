import React from 'react'
import YouTube from 'react-youtube';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
const Youtube = () => {
    const params=useParams();
    const dispatch=useDispatch(params);
        
    const video_key=useSelector(state=>state.movie.getVideoId);
    video_key&&console.log("비디오키",video_key);

    useEffect(()=>{dispatch(movieAction.getVideoId(params))},[params])
  return (
    <div className='youtube'>
        <YouTube
  videoId={video_key}
  opts={{
    width: "660",
    height: "355",
    
      autoplay: 1, 
      rel: 0,
      modestbranding: 1, 
    
  }}
  
  onEnd={(e)=>{e.target.stopVideo(0);}}      
/>
    </div>
  )
}

export default Youtube