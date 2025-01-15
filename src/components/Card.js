import React from 'react';

function Card({ image, title, plot, casting_crew, date, genra, rating }) {
  return (
    <div
      style={{
        backgroundColor: '#808080',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        margin: '10px',
        borderRadius: '8px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src={'https://image.tmdb.org/t/p/original/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg'}
          alt="Movie Poster"
          style={{
            width: '300px',
            height: '450px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </div>
      <h1 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>{title || 'Unknown Title'}</h1>
      <h3 style={{ fontSize: '1rem', color: '#ddd', marginBottom: '10px' }}>
        Genre: {genra || 'Unknown Genre'}
      </h3>
      <h3 style={{ fontSize: '1rem', color: '#ddd', marginBottom: '10px' }}>
        Release Date: {date || 'Unknown Date'}
      </h3>
      <p
        style={{
          fontSize: '1rem',
          color: '#ccc',
          marginBottom: '10px',
          textAlign: 'justify',
          maxWidth: '80%',
        }}
      >
        {plot || 'No description available.'}
      </p>
      <p
        style={{
          fontSize: '1rem',
          color: '#ccc',
          marginBottom: '10px',
          textAlign: 'center',
        }}
      >
        Cast: {casting_crew || 'Not available'}
      </p>
      <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>
        IMDB Rating: {rating ? `${rating}/10` : 'N/A'}
      </h3>
    </div>
  );
}

export default Card;
