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
        console.log(movieDetailApi,movieReviewApi)
    dispatch({
        type:"GET_MOVIE_DETAILS",
        payload:{detailPageMovieInfo:detailPageMovieInfo,
            movieReview:movieReview}
    })

    }
}

export const movieAction={
    getMovies,getMovieDetails
} 