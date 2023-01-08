import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'


const SingleMovie = () => {
  const { name } = useParams()
  const [loading, setLoading] = React.useState(false);
  const [movie, setMovie] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    async function getMovies() {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?t=${name}&apikey=a9118a3a`)
        if (response.data) {
          const {
            Title,
            Year,
            Released,

          } = response.data

          const newMovie = {
            title: Title,
            year: Year,
            ReleaseDate: Released,
            actors: response.data.Actors,
            desc: response.data.Plot,
            image: response.data.Poster,
            writer: response.data.Writer,
            language:response.data.Language,
            awards:response.data.Awards
          }
          setMovie(newMovie)
          // console.log(newMovie)
        }
        else {
          setMovie(null);
        }
      }
      catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getMovies()
  }, [name])
  if (loading) {
    return <Loading />
  }
  if (!movie) {
    return <h2>No Movie to display</h2>
  }
  const {
    title,
    year,
    ReleaseDate,
    actors,
    desc,
    image,
    writer,
    language,
    awards
    
  } = movie
  return (
    <section className='section movie-section'>
      <Link to="/">Back to Home</Link>
      <h2 className='section-title'>{name}</h2>
      <div className="drink">
        <img src={image} alt={title} />
        <div className="drink-info">
          <p>
            <span className="drink-data">year : </span>
            {year}
          </p>
          <p>
            <span className="drink-data">ReleaseDate : </span>
            {ReleaseDate}
          </p>
          <p>
            <span className="drink-data">desc : </span>
            {desc}
          </p>
          <p>
            <span className="drink-data">actors : </span>
            {actors}
          </p>
          <p>
            <span className="drink-data">writer : </span>
            {writer}
          </p>
          <p>
            <span className="drink-data">Awards : </span>
            {awards}
          </p>
          <p>
            <span className="drink-data">languages : </span>
            {language}
          </p>

        </div>
      </div>
    </section>
  )
}

export default SingleMovie
