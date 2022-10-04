let initialState={
    popularMovies:{},
    topRatedMovies:{},
    upComingMovies:{},
    movieGenre:[],
    clickedMovie:{},
    detailPageMovieInfo:{},
    loading:true,
    movieReview:{},
    getVideoId:{},
    getOtherMovies:{},
    pageNum:1,
    searchKeyword:"",
    getSearchMovie:{},
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
        case "GET_VIDEO_ID":
            
            return{...state,getVideoId:payload.getVideoId}

        case "GET_OTHER_MOVIES":

            return{...state,getOtherMovies:payload.getOtherMovies}

        case "PageClicked":
            
            return{...state,pageNum:payload.num}

        case "SEARCH-KEYWORD":

            return{...state,searchKeyword:payload.keyword}
            
        case "GET_SEARCH_MOVIES":
            return{...state,getSearchMovie:payload.getSearchMovie}
            
            default:
        
            return{...state}
    }
}

export default movieReducer;