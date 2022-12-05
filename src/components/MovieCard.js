import styles from '../modules/MovieCard.module.css'

const MovieCard = (props) => {
  //console.log(styles)
  const imageUrl = "https://image.tmdb.org/t/p/w300"
  return (
    <>
    <li className={styles.movieCard} >
      <img src={`${imageUrl}${props.movie.poster_path}`} alt="nuanda" className={styles.movieImage} style={{width: "230px"}} />
      <div>{props.movie.title}</div>
    </li>
    </>
  )
}

export default MovieCard