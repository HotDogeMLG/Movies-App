import React from 'react';
import ReactDOM from 'react-dom';

import './MoviesContainer.css';

import Movie from '../Movie/Movie';

function MoviesContainer() {
  return (
    <ul className='MoviesContainer'>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </ul>
  );
}

export default MoviesContainer;
