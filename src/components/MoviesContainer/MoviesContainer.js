import React from 'react'

import './MoviesContainer.css'

import Movie from '../Movie/Movie'
import Spinner from '../Spinner/Spinner'

export default class MoviesContainer extends React.Component {
  render() {
    const { movies, loading } = this.props
    const allMovies = movies.map((el) => {
      return (
        <Movie
          movie={el}
          key={el.id}
          title={el.title}
          description={el.overview}
          rating={el.vote_average}
          releaseDate={el.release_date}
          poster={el.poster}
        />
      )
    })
    if (loading)
      return (
        <div className="center">
          <Spinner />
        </div>
      )
    else return <ul className="MoviesContainer">{allMovies}</ul>
  }
}
