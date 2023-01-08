import React from 'react'
import Movie from './Movie'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const MovieList = () => {
  const {movies,loading}=useGlobalContext();
  console.log(movies)
  if(loading){
    return <Loading/>
  }
  if(movies.length<1){
   return <h2 className='section-title'>
      No such Movies available
    </h2>
  }
  return (
    <section className="section">
      <h2 className="section-title">
       Some Movies 
      </h2>
      <div className="movies-center" style={{backgroundImage:"./bg.jpg"}}>
        {movies.map((item)=>{
          return <Movie key={item.id}{...item}/>
        })}
      </div>
    </section>
  )
}

export default MovieList
