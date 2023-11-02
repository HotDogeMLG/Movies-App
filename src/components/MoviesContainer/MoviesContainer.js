import React from 'react'

import './MoviesContainer.css'

import Movie from '../Movie/Movie'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'

export default class MoviesContainer extends React.Component {
  render() {
    const { movies, loading, error, ratedMovies, sessionID } = this.props
    if (loading)
      return (
        <div className="center">
          <Spinner />
        </div>
      )
    else if (error)
      return (
        <div className="center">
          <span className="error-text">
            Something went <b>terribly</b> wrong, try again later
          </span>
          <Error />
        </div>
      )
    const allMovies = movies.map((el) => {
      return <Movie movie={el} ratedMovies={ratedMovies} sessionID={sessionID} key={el.id} />
    })
    return <ul className="MoviesContainer">{allMovies}</ul>
  }
}
