import React from 'react';

function Card({ image, title, plot, casting_crew, date, genre, rating }) {
  return (
    <div
      style={{
        backgroundColor: '#2c2c2c',
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        margin: '10px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div
        style={{
          flexShrink: 0,
          marginRight: '20px',
        }}
      >
        <img
          src={'https://image.tmdb.org/t/p/original/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg'}
          alt="Movie Poster"
          style={{
            width: '250px',
            height: '375px',
            objectFit: 'cover',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>
      <div style={{ flexGrow: 1, color: '#fff' }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '10px', fontWeight: 'bold' }}>
          {title || 'Unknown Title'}
        </h1>
        <h3 style={{ fontSize: '1rem', color: '#ddd', marginBottom: '10px' }}>
        Genre: {genre || 'Unknown Genre'}
      </h3>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', fontWeight: 'normal' }}>
          Release Date: {date || 'Unknown Date'}
        </h3>
        <p
          style={{
            fontSize: '1rem',
            marginBottom: '12px',
            lineHeight: '1.5',
            textAlign: 'justify',
            color: '#ccc',
          }}
        >
          {plot || 'No description available.'}
        </p>
        <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '10px' }}>
          Cast: {casting_crew || 'Not available'}
        </p>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#FFD700' }}>
          IMDB Rating: {rating ? `${rating}/10` : 'N/A'}
        </h3>
      </div>
    </div>
  );
}

export default Card;
