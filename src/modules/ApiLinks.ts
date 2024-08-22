
// apikey
export const apiKey = "Your TMDB API KEY"

// img base URL
export const baseImgURL = 'https://image.tmdb.org/t/p/w500'
export const baseMediaImgURL = 'https://image.tmdb.org/t/p/w66_and_h66_face'
export const baseBackDropURL = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces'

// movies endpoints
export const TrendingUrl = "https://api.themoviedb.org/3/trending/movie/day?language=zh-TW"
export const NowPlayUrl = "https://api.themoviedb.org/3/movie/now_playing?language=zh-TW"
export const PopularUrl = "https://api.themoviedb.org/3/movie/popular?language=zh-TW"
export const TopRatedUrl = "https://api.themoviedb.org/3/movie/top_rated?language=zh-TW"

// movie detail
export const MovieDetailUrl = "https://api.themoviedb.org/3/movie"
export const SearchlUrl = `https://api.themoviedb.org/3/search/movie?language=zh-TW&include_adult=false&page=1`


// movieItems and router
export const movieItems = [
    {   
        name: '首頁', 
        link: '/', 
    },
    {
        name: '熱門電影', 
        link: '/trending',
        apiEndPoint: `${TrendingUrl}&api_key=${apiKey}`
    },
    {
        name: '現正熱映', 
        link: '/now_playing',
        apiEndPoint: `${NowPlayUrl}&api_key=${apiKey}`
    },
    {
        name: '最受歡迎', 
        link: '/popular',
        apiEndPoint: `${PopularUrl}&api_key=${apiKey}`
    },
    {
        name: '最受好評', 
        link: '/top_rated',
        apiEndPoint: `${TopRatedUrl}&api_key=${apiKey}`
    },
]

export const searchItems = {
        name: '搜尋電影', 
        link: '/search',
        apiEndPoint: `${SearchlUrl}&api_key=${apiKey}`
    }
