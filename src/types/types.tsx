import React from "react";

export interface MovieListContextType {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>

  credits: Credits
  setCredits: React.Dispatch<React.SetStateAction<Credits>>
  
}

export interface Movie {
    id: number
    title: string
    overview: string
    poster_path: string
    release_date: string
    vote_average: number
}

export interface DataProps {
    apiEndPoint?: string
    numberOfMovies: number
    showButtons: boolean
}

export interface CircleCanvasProps {
    percent: number
    radius: number
    strokeWidth: number
}

export interface CoverProps{
    title: string
    description: string
    headerImage: string
    showSearch: boolean
}

export interface Genre {
    id: number
    name: string
}

export interface MovieResult{
    backdrop_path: string
    genres: Genre[]
    overview: string
    poster_path: string
    release_date: string
    tagline: string
    title: string
    vote_average: number
    runtime: number
}

export interface Credits{
    cast: Cast[]
    crew: Crew[]
}

export interface Cast {
    id: number
    name: string
    character?: string
    profile_path?: string
}

export interface Crew {
    id: number
    name: string
    job: string
    department: string
    profile_path?: string
}

export interface MovieDetailHeaderProps{
    loading: boolean
    result?: MovieResult | null
    crew: Crew[]
    isShow: boolean
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}