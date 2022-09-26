let initialState={
    popularMovies:{},
    topRatedMovies:{},
    upComingMovies:{},
    movieGenre:[],
    clickedMovie:{}
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
            default:
            return{...state}
    }
}

export default movieReducer;