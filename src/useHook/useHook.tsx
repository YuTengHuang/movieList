import { useContext } from 'react'
import { MovieListContext } from '../context/MovieListContext';

export const useMovie = () => {
    const context = useContext(MovieListContext);
    if (context === undefined) {
      throw new Error('useMovie 需在 LoadingProvider 內');
    }
    return context;
}