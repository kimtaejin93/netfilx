import api from "../api"

function getMovies(){
    const API_KEY=process.env.REACT_APP_API_KEY;
    return async(dispatch)=>{
        const popularMovieApi=api.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const topRatedApi=api.get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const upComingApi=api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
        const genreApi=api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);
        let [popularMovies,topRatedMovies,upComingMovies,movieGenre]=await Promise.all([popularMovieApi,topRatedApi,upComingApi,genreApi]);
    
        dispatch({
            type:"GET_MOVIES_SUCCESS",
            payload:{
                popularMovies:popularMovies.data,
                topRatedMovies:topRatedMovies.data,
                upComingMovies:upComingMovies.data,
                movieGenre:movieGenre.data.genres,
            }
        })
    }
}
function getMovieDetails(params){
    const API_KEY=process.env.REACT_APP_API_KEY;
    return async(dispatch)=>{
    const movieDetailApi=api.get(`/movie/${params.id}?api_key=${API_KEY}&language=en-US`);
    const movieReviewApi=api.get(`/movie/${params.id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    let [detailPageMovieInfo,movieReview]=await Promise.all([movieDetailApi,movieReviewApi]);
        
    dispatch({
        type:"GET_MOVIE_DETAILS",
        payload:{detailPageMovieInfo:detailPageMovieInfo,
            movieReview:movieReview}
    })

    }
}
function getVideoId(params){
    const API_KEY=process.env.REACT_APP_API_KEY;
    return async(dispatch)=>{
        const getVideoIdApi=api.get(`movie/${params.id}/videos?api_key=${API_KEY}&language=en-US`)
    let getVideoId=await Promise.all([getVideoIdApi])
    
    dispatch({
        type:"GET_VIDEO_ID",
        payload:{getVideoId:getVideoId[0].data.results[0].key}
    })
    }
    
}

function getOtherMovies(pageNum){
    const API_KEY=process.env.REACT_APP_API_KEY;
    return async(dispatch)=>{
        const getOtherMoviesApi=api.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNum}`)
        let [getOtherMovies]= await Promise.all([getOtherMoviesApi])
        
        dispatch({
            type:"GET_OTHER_MOVIES",
            payload:{getOtherMovies:getOtherMovies.data}
        })
    }
}

function getSearchMovie(keyword){
    const API_KEY=process.env.REACT_APP_API_KEY;
    return async(dispatch)=>{
        const getSearchMovieApi=api.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`)
        let [getSearchMovie]=await Promise.all([getSearchMovieApi])

        dispatch({
            type:"GET_SEARCH_MOVIES",
            payload:{getSearchMovie:getSearchMovie.data}
        })
    }
}

export const movieAction={
    getMovies,getMovieDetails,getVideoId,getOtherMovies,getSearchMovie
} 