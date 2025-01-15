import React, { useState } from 'react';
import Card from './Card';
import useMovies from '../Movie/Movies';

function Movielist() {
    const { movies, loading, error } = useMovies();
    const [searchQuery, setSearchQuery] = useState("");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ backgroundColor: "grey", padding: "20px", minHeight: "100vh" }}>
            <div style={{ margin: "20px 0", textAlign: "center" }}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        padding: "10px",
                        width: "300px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                    }}
                />
            </div>
            <div>
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie, index) => (
                        <Card
                            key={index}
                            image={movie.image}
                            title={movie.title}
                            plot={movie.plot}
                            casting_crew={movie.CastAndCrew}
                            date={movie.releaseDate}
                            genra={movie.Genre}
                            rating={movie.rating}
                        />
                    ))
                ) : (
                    <p style={{ color: "#fff", textAlign: "center" }}>No movies found.</p>
                )}
            </div>
        </div>
    );
}

export default Movielist;
