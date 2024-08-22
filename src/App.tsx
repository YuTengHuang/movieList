import Header from './components/Header'
import HomePage from './pages/HomePage'
import MovieDetailPage from './pages/MovieDetailPage'
import NowPlayingPage from './pages/NowPlayingPage'
import PopularPage from './pages/PopularPage'
import TopRatedPage from './pages/TopRatedPage'
import TrendingPage from './pages/TrendingPage'
import MovieListProvider from './context/MovieListContext'
import SearchPage from './pages/SearchPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (

    <MovieListProvider>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/trending' element={<TrendingPage />}/>
        <Route path='/now_playing' element={<NowPlayingPage />}/>
        <Route path='/popular' element={<PopularPage />}/>
        <Route path='/top_rated' element={<TopRatedPage />}/>
        <Route path='/movie/:id' element={<MovieDetailPage />}/>
        <Route path='/search' element={<SearchPage />}/>
      </Routes>
    </MovieListProvider>
  )
}

export default App