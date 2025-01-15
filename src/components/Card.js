import React from 'react'

function Card({image , title , description , rating}) {
  return (
    <div style={{backgroundColor: "#808080" , display:'flex'}}>

    <div className='outer' >
      <div id='img1' style={{width: null,
        height: 300,
        resizeMode: 'cover'}}>
        <img src={image || 'https://image.tmdb.org/t/p/original/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg'} style={{width: null,
        height: 500,
        resizeMode: 'cover'}} alt='img' />
      </div>
      
      <div style={{marginTop: 200 , }}>
        <h1> THE LION KING </h1>
      </div>

      <div id='des'>
        <h3>Views in SQL are a type of virtual table that simplifies how users interact with data across one or more tables. Unlike traditional tables, a view in SQL does not store data on disk; instead, it dynamically retrieves data based on a pre-defined query each time it’s accessed.</h3>
      </div>
      <div className='rating'>
        <h3> IMDB RATING : 4/5</h3>
      </div>
    </div>
    <div className='outer' >
      <div id='img1' style={{width: null,
        height: 300,
        resizeMode: 'cover'}}>
        <img src={image || 'https://image.tmdb.org/t/p/original/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg'} style={{width: null,
        height: 500,
        resizeMode: 'cover'}} alt='img' />
      </div>
      
      <div style={{marginTop: 200 , }}>
        <h1> THE LION KING </h1>
      </div>

      <div id='des'>
        <h3>Views in SQL are a type of virtual table that simplifies how users interact with data across one or more tables. Unlike traditional tables, a view in SQL does not store data on disk; instead, it dynamically retrieves data based on a pre-defined query each time it’s accessed.</h3>
      </div>
      <div className='rating'>
        <h3> IMDB RATING : 4/5</h3>
      </div>
    </div>
    <div className='outer' >
      <div id='img1' style={{width: null,
        height: 300,
        resizeMode: 'cover'}}>
        <img src={image || 'https://image.tmdb.org/t/p/original/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg'} style={{width: null,
        height: 500,
        resizeMode: 'cover'}} alt='img' />
      </div>
      
      <div style={{marginTop: 200 , }}>
        <h1> THE LION KING </h1>
      </div>

      <div id='des'>
        <h3>Views in SQL are a type of virtual table that simplifies how users interact with data across one or more tables. Unlike traditional tables, a view in SQL does not store data on disk; instead, it dynamically retrieves data based on a pre-defined query each time it’s accessed.</h3>
      </div>
      <div className='rating'>
        <h3> IMDB RATING : 4/5</h3>
      </div>
    </div>
    </div>
  )
}

export default Card
