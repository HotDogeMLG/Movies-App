import React from 'react';
import ReactDOM from 'react-dom';

import './Movie.css';
import movieImg from '../../img/movie-img.png';
import starsRating from '../../img/stars-rating.png';

function Movie() {
  return (
    <li className='Movie'>
      <img src={movieImg} alt='Movie Poster' className='poster'></img>
      <article className='Movie__info'>
        <div className='rating'>9.9</div>
        <h4 className='name'>The way back</h4>
        <span className='release-date'>March 5, 2020</span>
        <div className='genres-container'>
          <span className='genre'>Action</span>
          <span className='genre'>Drama</span>
        </div>
        <p className='description'>
          A former basketball all-star, who has lost his wife and family
          foundation in a struggle with addiction attempts to regain his soul
          and salvation by becoming the coach of a disparate ethnically mixed
          high ...
        </p>
        <img src={starsRating} className='stars'></img>
      </article>
    </li>
  );
}

export default Movie;
