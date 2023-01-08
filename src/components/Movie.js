import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
  return (
   <article className="movie">
    <div className="img-container">
      <img src={props.image} alt={props.name} />
    </div>
    <div className='movie-footer'>
      <h3>{props.name}</h3>
      <h4>{props.year}</h4>
      <h4>{props.type}</h4>
       <p>
       IMDB Number: {props.info}
      </p>
      <Link to={`/movies/${props.name}`}className="btn btn-primary btn-details">
        Details
      </Link>
    </div>
   </article>
  )
}

export default Movie
