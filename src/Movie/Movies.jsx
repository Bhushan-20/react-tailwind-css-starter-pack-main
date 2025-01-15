import React, { useEffect, useState } from 'react'
import { moviesList } from './MovieClass';

function useMovies(query) {
    const [movies,setMovies] = useState([]) ;
    const [error,setError] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        const fetchMovies = async ()=>{
            setLoading(true);
            try{
                const response = await fetch('ABCD') ;
                const data = await response.json();
                setMovies(data);
            }
            catch(error){
                setError(error);
                setMovies(moviesList)
                console.log(movies)
            }
            setLoading(false);
        };
        fetchMovies();
    },[query]);

  return {movies,loading};
}

export default useMovies