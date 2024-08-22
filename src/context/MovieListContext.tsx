import React, { createContext, ReactNode, useState } from "react"
import { Credits, MovieListContextType } from "../types/types"


export const MovieListContext = createContext<MovieListContextType | undefined>(undefined)

const MovieListProvider: React.FC<{ children: ReactNode }> = ({ children }) =>{

  const [loading, setLoading] = useState<boolean>(true)

  const [credits, setCredits] = useState<Credits>({ cast: [], crew: [] })
    

    return (
        <MovieListContext.Provider value={{ loading, setLoading , credits, setCredits}}>
            { children }
        </MovieListContext.Provider>
    )
}

export default MovieListProvider