import React,{useEffect, useState} from 'react'
import instance from '../instance'
import './Row.css';

function Row({title,isPoster,fetchUrl}) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies,setMovies]=useState([])
    const getMovies= async()=>{
        // api call
       const {data}=  await instance.get(fetchUrl)
        setMovies(data.results)
    }
    // console.log(movies);
    useEffect(() => {
     getMovies()
    }, [])
    
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='movies'>
          {
            movies.map(movie=>(
              <img className={`movie ${isPoster&&'movie-poster'}`} src={`${base_url}/${isPoster?movie.poster_path:movie.backdrop_path}`} alt={`${movies}`} />
            ))
          }
        </div>
        </div>
  )
}

export default Row