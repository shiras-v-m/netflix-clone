import React,{useEffect, useState} from 'react'
import instance from '../instance'
import './Banner.css';

function Banner({title,fetchUrl}) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movie,setMovies]=useState([])
    const getMovies= async()=>{
        // api call
       const {data}=  await instance.get(fetchUrl)
       
        setMovies(data.results[Math.floor(Math.random()*data.results.length)])
    }
    console.log(movie);
    useEffect(() => {
     getMovies()
    }, [])
    
  return (
    
    <div className='banner' style={
        {   
            backgroundSize:"cover",
            height:"600px",
            backgroundImage:`url(${base_url}/${movie.backdrop_path})`
        }
    }>
        <div className='banner-content'>
            <h1 className='banner-title'>
                {movie.name}
            </h1>
            <h2 className='banner-overview'>{movie.overview}</h2>
        </div>
    </div>
  )
}

export default Banner