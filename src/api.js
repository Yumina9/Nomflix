import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/", 
    timeout:1000
});

api.interceptors.request.use(config=>{
    config.params = config.params || {};
    config.params['api_key']="a81f6b6be8f245315f66f51986aa9d2e";
    config.params['language']="en-US";
    return config;
});


export const  moviesApi= {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id => api.get(`movie/${id}`, {
        params:{
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/movie",{
        params: {
            query : encodeURIComponent(term)
        }
    })
}

export const tvApi={
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id => api.get(`tv/${id}`, {
        params:{
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/tv",{
        params: {
            query : encodeURIComponent(term)
        }
    })
}



export default api;