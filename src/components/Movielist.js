import React, { useState } from 'react';
import Card from './Card';
import useMovies from '../Movie/Movies';

function Movielist() {
    const { movies, loading, error } = useMovies();
    const [searchQuery, setSearchQuery] = useState("");
    const [genreFilter, setGenreFilter] = useState("");
    const [ratingFilter, setRatingFilter] = useState("");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const filteredMovies = movies
        .filter(movie =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter(movie =>
            genreFilter ? movie.Genre.toLowerCase() === genreFilter.toLowerCase() : true
        )

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
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <select
                    value={genreFilter}
                    onChange={(e) => setGenreFilter(e.target.value)}
                    style={{
                        padding: '10px',
                        marginRight: '20px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                >
                    <option value="">ALL</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Romance">Romance</option>
                </select>
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
                            genre={movie.Genre}
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
