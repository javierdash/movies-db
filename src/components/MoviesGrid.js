import {useState,useEffect} from 'react'
import movies from '../movies.json'
import MovieCard from './MovieCard'
import styles from '../modules/MoviesGrid.module.css'

const MoviesGrid = () => {

  return (
    // movies.map(movie => <li key={movie.id}>{movie.title}</li> )
    <ul className={styles.moviesGrid} >
    {movies.map(movie => <MovieCard movie={movie} /> ) }
    </ul>
  )
}

export default MoviesGrid