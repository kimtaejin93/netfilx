let initialState={
    popularMovies:{},
    topRatedMovies:{},
    upComingMovies:{},
    movieGenre:[],
    clickedMovie:{},
    detailPageMovieInfo:{},
    loading:true,
    movieReview:{}
}

function movieReducer(state=initialState,action){
    let{type,payload}=action;
    switch(type){
        case "GET_MOVIES_SUCCESS":
            return{...state,
                popularMovies:payload.popularMovies,
                topRatedMovies:payload.topRatedMovies,
                upComingMovies:payload.upComingMovies,
                movieGenre:payload.movieGenre,
            }
        case "MovieClick":
            return{
                ...state,clickedMovie:payload.item
            }
        case "GET_MOVIE_DETAILS":
            return{
                ...state,detailPageMovieInfo:payload.detailPageMovieInfo.data,
                loading:false,
                movieReview:payload.movieReview.data
            }
            default:
            return{...state}
    }
}

export default movieReducer;