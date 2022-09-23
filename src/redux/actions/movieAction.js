import api from "../api"

function getMovies(){
    const API_KEY=process.env.REACT_APP_API_KEY;
    return async(dispatch)=>{
        const popularMovieApi=api.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const topRatedApi=api.get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const upComingApi=api.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

        let [popularMovies,topRatedMovies,upComingMovies]=await Promise.all([popularMovieApi,topRatedApi,upComingApi]);
        console.log("popularMovies",popularMovies);
        console.log("topRatedMovies",topRatedMovies);
        console.log("upComingMovies",upComingMovies);
        dispatch({
            type:"GET_MOVIES_SUCCESS",
            payload:{
                popularMovies:popularMovies.data,
                topRatedMovies:topRatedMovies.data,
                upComingMovies:upComingMovies.data
            }
        })
    }
}

export const movieAction={
    getMovies,
} 