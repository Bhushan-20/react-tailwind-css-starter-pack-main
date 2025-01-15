import React from 'react'
import Card from './Card'
import useMovies from '../Movie/Movies';

function Movielist() {
    const movie = useMovies();
    console.log(movie);
  return (
    <Card/>
  )
}

export default Movielist
